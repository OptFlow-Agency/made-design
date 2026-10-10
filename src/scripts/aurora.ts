// Aurora Curtain: WebGL2 shader by Eduardo Calvo (SmoothUI),
// Copyright (c) 2024 Eduardo Calvo, MIT: https://github.com/educlopez/smoothui/blob/main/LICENSE
// Ported from the React component to a framework-free mount function.
import { reduce } from './motion'

type Rgb = [number, number, number]

interface Settings {
  bands: number
  blur: number
  colors: Rgb[]
  direction: number
  grain: number
  intensity: number
  speed: number
}

const MAX_DPR = 1.5
const MAX_COLORS = 6
const MAX_BANDS = 8
const GRAIN_SEED_CYCLE = 977
const FALLBACK_COLORS: Rgb[] = [
  [0.399, 0.826, 0.48],
  [0.323, 0.817, 0.822],
  [0.79, 0.471, 0.886],
]

const VERTEX_SHADER = `#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`

const FRAGMENT_SHADER = `#version 300 es
precision highp float;

out vec4 fragColor;

uniform vec2 uRes;
uniform float uTime;
uniform float uBands;
uniform float uSpeed;
uniform float uBlur;
uniform float uIntensity;
uniform float uDirection;
uniform float uGrain;
uniform float uSeed;
uniform float uPixel;
uniform int uColorCount;
uniform vec3 uColors[6];

const int MAX_BANDS = 8;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float grainHash(vec2 p, float seed) {
  return fract(sin(dot(p, vec2(12.9898, 78.233)) + seed * 1.6180339) * 43758.5453123);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm2(vec2 p) {
  float value = vnoise(p) * 0.5 + vnoise(p * 2.07 + 9.31) * 0.25;
  return value * 1.3333333;
}

float fbm3(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 3; i++) {
    value += amplitude * vnoise(p);
    p = p * 2.03 + 7.13;
    amplitude *= 0.5;
  }
  return value * 1.1428571;
}

vec3 bandColor(int index) {
  int count = max(uColorCount, 1);
  int slot = index - (index / count) * count;
  return uColors[slot];
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float flow = mix(1.0, -1.0, uDirection);
  float y = mix(uv.y, 1.0 - uv.y, uDirection);

  float rise = smoothstep(-0.10, 0.26, y);
  float fade = 1.0 - smoothstep(0.16, 1.08, y);
  float envelope = rise * fade * fade;

  vec3 accum = vec3(0.0);
  float alpha = 0.0;
  float bandCount = clamp(uBands, 1.0, float(MAX_BANDS));
  float spacing = 0.92 / bandCount;
  float t = uTime * uSpeed;

  for (int i = 0; i < MAX_BANDS; i++) {
    if (float(i) >= bandCount) {
      break;
    }
    float fi = float(i);
    float seed = fi * 13.37;

    float driftA = fbm3(vec2(y * 1.35 + seed, t * 0.16 + seed)) - 0.5;
    float driftB = vnoise(vec2(y * 3.40 - seed, t * 0.27 + seed * 0.5)) - 0.5;
    float fold = sin(y * 4.1 + t * 0.42 * flow + seed) * 0.045;
    float center = 0.04 + spacing * (fi + 0.5) + driftA * 0.52 + driftB * 0.18 + fold;

    float widthNoise = fbm2(vec2(y * 2.7 + seed * 2.0, t * 0.22 + seed));
    float pinch = smoothstep(0.0, 0.22, y) * (1.0 - smoothstep(0.55, 1.08, y));
    float width = (0.010 + uBlur * 0.052)
      * mix(0.30, 1.85, widthNoise)
      * (0.45 + 0.75 * pinch);
    width = max(width, 0.0025);

    float dx = (uv.x - center) / width;
    float d2 = dx * dx;
    float core = exp(-d2 * 2.60);
    float halo = exp(-d2 * 0.22);
    float ribbon = core * 1.30 + halo * 0.34;

    float rays = 0.45 + 0.85 * fbm2(vec2(uv.x * 13.0 + seed, y * 1.7 - flow * t * 0.55));
    float breathe = 0.78 + 0.22 * sin(t * 0.31 + seed) * cos(t * 0.17 + seed * 0.7);

    float weight = ribbon * envelope * rays * breathe * 0.46;
    vec3 hot = mix(bandColor(i), vec3(1.0), clamp(core * 0.42, 0.0, 0.45));
    accum += hot * weight;
    alpha += weight;
  }

  float haze = envelope * (1.0 - smoothstep(0.0, 0.58, y)) * 0.10;
  accum += bandColor(0) * haze;
  alpha += haze;

  alpha = clamp(alpha * uIntensity, 0.0, 1.0);
  accum = max(accum * uIntensity, vec3(0.0));

  if (uGrain > 0.0) {
    vec2 cell = floor(gl_FragCoord.xy / max(uPixel, 1.0));
    float g = grainHash(cell, uSeed) + grainHash(cell + vec2(41.7, 17.3), uSeed + 7.31) - 1.0;
    float amp = uGrain * 0.42;
    accum *= 1.0 + g * amp * 1.10;
    float bright = max(g, 0.0) * amp * 0.48;
    float dark = max(-g, 0.0) * amp * 0.34;
    accum += vec3(bright);
    alpha = clamp(alpha + bright + dark, 0.0, 1.0);
  }

  fragColor = vec4(max(accum, vec3(0.0)), alpha);
}`

const QUAD = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1])
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))

const resolveColors = (inputs: string[], host: HTMLElement): Rgb[] => {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 1
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  const probe = document.createElement('span')
  probe.style.display = 'none'
  host.append(probe)
  const out = inputs.map((input, i) => {
    const fallback = FALLBACK_COLORS[i % FALLBACK_COLORS.length]
    if (!ctx) return fallback
    probe.style.color = ''
    probe.style.color = input
    const computed = getComputedStyle(probe).color
    if (!computed) return fallback
    ctx.clearRect(0, 0, 1, 1)
    ctx.fillStyle = '#000000'
    ctx.fillStyle = computed
    ctx.fillRect(0, 0, 1, 1)
    const d = ctx.getImageData(0, 0, 1, 1).data
    return [d[0] / 255, d[1] / 255, d[2] / 255] as Rgb
  })
  probe.remove()
  return out
}

const compile = (gl: WebGL2RenderingContext, type: number, src: string) => {
  const s = gl.createShader(type)
  if (!s) return null
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    gl.deleteShader(s)
    return null
  }
  return s
}

/** Mounts one aurora on `host`. Returns false when WebGL2 is unavailable (CSS fallback stays visible). */
export function mountAurora(host: HTMLElement): boolean {
  const canvas = host.querySelector('canvas')
  if (!canvas) return false
  const gl = canvas.getContext('webgl2', { alpha: true, antialias: false, premultipliedAlpha: true })
  if (!gl) return false

  const vs = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER)
  const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER)
  const program = gl.createProgram()
  if (!(vs && fs && program)) return false
  gl.attachShader(program, vs)
  gl.attachShader(program, fs)
  gl.linkProgram(program)
  gl.deleteShader(vs)
  gl.deleteShader(fs)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return false
  gl.useProgram(program)

  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer())
  gl.bufferData(gl.ARRAY_BUFFER, QUAD, gl.STATIC_DRAW)
  const pos = gl.getAttribLocation(program, 'aPosition')
  gl.enableVertexAttribArray(pos)
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)
  gl.enable(gl.BLEND)
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)

  const u = (n: string) => gl.getUniformLocation(program, n)
  const uRes = u('uRes'), uTime = u('uTime'), uBands = u('uBands'), uSpeed = u('uSpeed')
  const uBlur = u('uBlur'), uIntensity = u('uIntensity'), uDirection = u('uDirection')
  const uGrain = u('uGrain'), uSeed = u('uSeed'), uPixel = u('uPixel')
  const uColorCount = u('uColorCount'), uColors = u('uColors')

  const d = host.dataset
  const colorList = JSON.parse(d.colors ?? '[]') as string[]
  const colors = resolveColors(colorList, host).slice(0, MAX_COLORS)
  const s: Settings = {
    bands: clamp(Math.round(Number(d.bands ?? 4)), 1, MAX_BANDS),
    blur: clamp(Number(d.blur ?? 0.5), 0, 1),
    colors: colors.length ? colors : FALLBACK_COLORS,
    direction: d.direction === 'down' ? 1 : 0,
    grain: clamp(Number(d.noise ?? 0), 0, 1),
    intensity: clamp(Number(d.intensity ?? 1), 0, 1),
    speed: Math.max(Number(d.speed ?? 1), 0),
  }
  const palette = new Float32Array(MAX_COLORS * 3)
  s.colors.forEach((c, i) => palette.set(c, i * 3))

  let pixelRatio = 1
  let seed = 0
  let frame = 0
  let running = false
  const t0 = performance.now()

  const resize = () => {
    const r = canvas.getBoundingClientRect()
    pixelRatio = Math.min(devicePixelRatio || 1, MAX_DPR)
    const w = Math.max(1, Math.round(r.width * pixelRatio))
    const h = Math.max(1, Math.round(r.height * pixelRatio))
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w
      canvas.height = h
      gl.viewport(0, 0, w, h)
    }
  }
  const draw = () => {
    seed = (seed + 1) % GRAIN_SEED_CYCLE
    gl.clearColor(0, 0, 0, 0)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.uniform2f(uRes, canvas.width, canvas.height)
    gl.uniform1f(uTime, (performance.now() - t0) / 1000)
    gl.uniform1f(uBands, s.bands)
    gl.uniform1f(uSpeed, s.speed)
    gl.uniform1f(uBlur, s.blur)
    gl.uniform1f(uIntensity, s.intensity)
    gl.uniform1f(uDirection, s.direction)
    gl.uniform1f(uGrain, s.grain)
    gl.uniform1f(uSeed, seed)
    gl.uniform1f(uPixel, pixelRatio)
    gl.uniform1i(uColorCount, s.colors.length)
    gl.uniform3fv(uColors, palette)
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
  }
  const tick = () => {
    if (!running) return
    draw()
    frame = requestAnimationFrame(tick)
  }
  const setRunning = (next: boolean) => {
    if (running === next) return
    running = next
    if (next) frame = requestAnimationFrame(tick)
    else cancelAnimationFrame(frame)
  }

  // Canvas is revealed only once the first frame is on screen, so the CSS fallback never flashes out.
  resize()
  draw()
  canvas.dataset.ready = ''

  new ResizeObserver(() => {
    resize()
    if (!running) draw()
  }).observe(canvas)

  // Animate only while on screen and the tab is visible; reduced motion keeps one still frame.
  let onScreen = true
  const sync = () => setRunning(onScreen && document.visibilityState === 'visible' && !reduce)
  new IntersectionObserver((entries) => {
    onScreen = entries.some((e) => e.isIntersecting)
    sync()
  }).observe(host)
  document.addEventListener('visibilitychange', sync)
  sync()
  return true
}
