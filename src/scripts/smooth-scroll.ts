import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { reduce } from './motion'

// Respect reduced motion: keep native scrolling.
if (!reduce) {
  const lenis = new Lenis({
    lerp: 0.1,
    // in-page links (#services...) glide too, clear of the sticky header
    anchors: { offset: -88 },
  })

  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}
