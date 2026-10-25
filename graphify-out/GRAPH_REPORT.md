# Graph Report - optflow  (2026-10-25)

## Corpus Check
- 63 files · ~513,160 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1790 nodes · 4309 edges · 63 communities (60 shown, 3 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 234 edges (avg confidence: 0.64)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cad56186`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_console_DzxFduoL.mjs|console_DzxFduoL.mjs]]
- [[_COMMUNITY_console_DzxFduoL.mjs|console_DzxFduoL.mjs]]
- [[_COMMUNITY_entry.mjs|entry.mjs]]
- [[_COMMUNITY_generic_BVtjWNC_.mjs|generic_BVtjWNC_.mjs]]
- [[_COMMUNITY_generic_BVtjWNC_.mjs|generic_BVtjWNC_.mjs]]
- [[_COMMUNITY_entry.mjs|entry.mjs]]
- [[_COMMUNITY_Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js|Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js]]
- [[_COMMUNITY_remote_BrelTrH3.mjs|remote_BrelTrH3.mjs]]
- [[_COMMUNITY_normalizeParams|normalizeParams]]
- [[_COMMUNITY_has|has]]
- [[_COMMUNITY_has|has]]
- [[_COMMUNITY_renderStreaming|renderStreaming]]
- [[_COMMUNITY_renderStreaming|renderStreaming]]
- [[_COMMUNITY_site.ts|site.ts]]
- [[_COMMUNITY_get|get]]
- [[_COMMUNITY_renderFrameworkComponent|renderFrameworkComponent]]
- [[_COMMUNITY_renderDefaultError|renderDefaultError]]
- [[_COMMUNITY_render|render]]
- [[_COMMUNITY_get|get]]
- [[_COMMUNITY_key|key]]
- [[_COMMUNITY_remote_BrelTrH3.mjs|remote_BrelTrH3.mjs]]
- [[_COMMUNITY_constructor|constructor]]
- [[_COMMUNITY_key|key]]
- [[_COMMUNITY_renderFrameworkComponent|renderFrameworkComponent]]
- [[_COMMUNITY_value|value]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_renderDefaultError|renderDefaultError]]
- [[_COMMUNITY_Design System Optflow|Design System: Optflow]]
- [[_COMMUNITY_createAssetLink|createAssetLink]]
- [[_COMMUNITY_addAttribute|addAttribute]]
- [[_COMMUNITY_render|render]]
- [[_COMMUNITY_match|match]]
- [[_COMMUNITY_addAttribute|addAttribute]]
- [[_COMMUNITY_match|match]]
- [[_COMMUNITY_stringifyParams|stringifyParams]]
- [[_COMMUNITY_renderPage|renderPage]]
- [[_COMMUNITY_getRouteTable|getRouteTable]]
- [[_COMMUNITY_createResult|createResult]]
- [[_COMMUNITY_stringifyParams|stringifyParams]]
- [[_COMMUNITY_createEndpoint|createEndpoint]]
- [[_COMMUNITY_getIslandContent|getIslandContent]]
- [[_COMMUNITY_Product|Product]]
- [[_COMMUNITY_isPlainObject|isPlainObject]]
- [[_COMMUNITY_finalize|finalize]]
- [[_COMMUNITY_isRoute404|isRoute404]]
- [[_COMMUNITY_finalize|finalize]]
- [[_COMMUNITY_renderJSX|renderJSX]]
- [[_COMMUNITY_Astro Starter Kit Minimal|Astro Starter Kit: Minimal]]
- [[_COMMUNITY_canParseURL|canParseURL]]
- [[_COMMUNITY_tsconfig.json|tsconfig.json]]
- [[_COMMUNITY_getCsp|getCsp]]
- [[_COMMUNITY_CLAUDE|CLAUDE.md]]
- [[_COMMUNITY_AuroraCurtain.astro|AuroraCurtain.astro]]
- [[_COMMUNITY_package.json|package.json]]

## God Nodes (most connected - your core abstractions)
1. `normalizeParams()` - 46 edges
2. `normalizeParams()` - 46 edges
3. `get()` - 39 edges
4. `key()` - 39 edges
5. `get()` - 39 edges
6. `key()` - 39 edges
7. `render()` - 33 edges
8. `render()` - 33 edges
9. `renderStreaming()` - 29 edges
10. `renderStreaming()` - 29 edges

## Surprising Connections (you probably didn't know these)
- `template()` --calls--> `escape()`  [INFERRED]
  .vercel/output/_functions/entry.mjs → src/pages/api/contact.ts
- `redirectTemplate()` --calls--> `escape()`  [INFERRED]
  .vercel/output/_functions/entry.mjs → src/pages/api/contact.ts
- `template()` --calls--> `escape()`  [INFERRED]
  .vercel/output/functions/_render.func/.vercel/output/server/entry.mjs → src/pages/api/contact.ts
- `redirectTemplate()` --calls--> `escape()`  [INFERRED]
  .vercel/output/functions/_render.func/.vercel/output/server/entry.mjs → src/pages/api/contact.ts
- `mountAurora()` --indirect_call--> `n()`  [INFERRED]
  src/scripts/aurora.ts → .vercel/output/static/_astro/Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js

## Import Cycles
- 2-file cycle: `.vercel/output/functions/_render.func/.vercel/output/server/chunks/generic_BVtjWNC_.mjs -> .vercel/output/functions/_render.func/.vercel/output/server/chunks/sharp_BBuu-3J1.mjs -> .vercel/output/functions/_render.func/.vercel/output/server/chunks/generic_BVtjWNC_.mjs`
- 2-file cycle: `.vercel/output/_functions/chunks/generic_BVtjWNC_.mjs -> .vercel/output/_functions/chunks/sharp_BBuu-3J1.mjs -> .vercel/output/_functions/chunks/generic_BVtjWNC_.mjs`

## Communities (63 total, 3 thin omitted)

### Community 0 - "console_DzxFduoL.mjs"
Cohesion: 0.02
Nodes (99): and(), _array(), _base64(), _base64url(), _cidrv4(), _cidrv6(), claim(), _cuid() (+91 more)

### Community 1 - "console_DzxFduoL.mjs"
Cohesion: 0.02
Nodes (52): and(), canParseURL(), claim(), deduplicateDirectiveValues(), defineBound(), flattenError(), formatError(), _getMessage() (+44 more)

### Community 2 - "entry.mjs"
Cohesion: 0.03
Nodes (53): astroToRuntimeLogger(), decodeKey(), fileExtension(), removeLeadingForwardSlash(), slash(), appendQueryParams(), [APPLY_HEADERS](), array_index_cut() (+45 more)

### Community 3 - "generic_BVtjWNC_.mjs"
Cohesion: 0.05
Nodes (76): consoleLogDestination(), createConsoleLogger(), baseCreateComponent(), calculate(), calculateByDimensions(), calculateByViewbox(), calculateExtended(), calculateImageDimension() (+68 more)

### Community 4 - "generic_BVtjWNC_.mjs"
Cohesion: 0.06
Nodes (74): consoleLogDestination(), createConsoleLogger(), baseCreateComponent(), calculate(), calculateByDimensions(), calculateByViewbox(), calculateExtended(), calculateImageDimension() (+66 more)

### Community 5 - "entry.mjs"
Cohesion: 0.03
Nodes (43): astroToRuntimeLogger(), decodeKey(), removeLeadingForwardSlash(), array_index_cut(), compileCacheRoutes(), computeFallbackRoute(), consume(), createErrorHandler() (+35 more)

### Community 6 - "Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js"
Cohesion: 0.06
Nodes (35): clamp(), compile(), FALLBACK_COLORS, mountAurora(), QUAD, resolveColors(), Rgb, Settings (+27 more)

### Community 7 - "remote_BrelTrH3.mjs"
Cohesion: 0.07
Nodes (47): appendForwardSlash(), codeFrame(), collapseDuplicateSlashes(), collapseDuplicateTrailingSlashes(), hasFileExtension(), isInternalPath(), isString(), joinPaths() (+39 more)

### Community 8 - "normalizeParams"
Cohesion: 0.04
Nodes (53): _array(), _base64(), _base64url(), _cidrv4(), _cidrv6(), _cuid(), _cuid2(), _custom() (+45 more)

### Community 9 - "has"
Cohesion: 0.06
Nodes (47): add(), aggregateChecks(), attach(), bucketFor(), chunkToByteArray(), chunkToByteArrayOrString(), clear(), cloneIssues() (+39 more)

### Community 10 - "has"
Cohesion: 0.06
Nodes (47): add(), aggregateChecks(), attach(), bucketFor(), catchExpressionError(), chunkToByteArray(), chunkToByteArrayOrString(), clear() (+39 more)

### Community 11 - "renderStreaming"
Cohesion: 0.07
Nodes (46): appendStatic(), bufferPropagatedHead(), catch(), collectPropagatedHeadParts(), constantCatch(), constructor(), createBufferedRenderer(), createRenderInstruction() (+38 more)

### Community 12 - "renderStreaming"
Cohesion: 0.08
Nodes (44): appendStatic(), bufferHeadContent(), bufferPropagatedHead(), callComponentAsTemplateResultOrResponse(), catch(), catchExpressionError(), collectPropagatedHeadParts(), constantCatch() (+36 more)

### Community 13 - "site.ts"
Cohesion: 0.12
Nodes (30): ../components/About.astro, ../components/Contact.astro, ../components/Faq.astro, ../components/Footer.astro, ../components/Formats.astro, ../components/Header.astro, sections, ../components/Hero.astro (+22 more)

### Community 14 - "get"
Cohesion: 0.07
Nodes (38): actionsAndPages(), badRequest(), createCrossOriginForbiddenResponse(), createOriginCheckMiddleware(), decode(), defineMiddleware(), deserializeActionResult(), #ensureParsed() (+30 more)

### Community 15 - "renderFrameworkComponent"
Cohesion: 0.07
Nodes (36): bitwise(), chunkToString(), componentIsHTMLElement(), containsServerDirective(), entityFor(), escapeHTML(), escapeStyleText(), formatList() (+28 more)

### Community 16 - "renderDefaultError"
Cohesion: 0.09
Nodes (36): isAstroError(), applyRewriteToState(), attachCookiesToResponse(), callMiddleware(), copyRequest(), createNormalizedUrl(), createRequest(), executeRewrite() (+28 more)

### Community 17 - "render"
Cohesion: 0.08
Nodes (35): applyCacheHeaders(), consume(), delete(), #ensureOutgoingMap(), fetch(), finalizeAll(), finalizeI18n(), getCacheProvider() (+27 more)

### Community 18 - "get"
Cohesion: 0.08
Nodes (35): actionsAndPages(), badRequest(), createCrossOriginForbiddenResponse(), createOriginCheckMiddleware(), decode(), defineMiddleware(), deserializeActionResult(), #ensureParsed() (+27 more)

### Community 19 - "key"
Cohesion: 0.15
Nodes (32): catchall(), _check(), clone(), deferProp(), defineScriptVars(), derived(), exactPartial(), extend() (+24 more)

### Community 20 - "remote_BrelTrH3.mjs"
Cohesion: 0.10
Nodes (25): getURL(), appendForwardSlash(), codeFrame(), collapseDuplicateTrailingSlashes(), hasFileExtension(), isAstroError(), isInternalPath(), isString() (+17 more)

### Community 21 - "constructor"
Cohesion: 0.11
Nodes (32): collapseDuplicateSlashes(), prependForwardSlash(), stripRequestBase(), #applyForwardedHeaders(), #computePathname(), computePathnameFromDomain(), constructor(), createNormalizedUrl() (+24 more)

### Community 22 - "key"
Cohesion: 0.14
Nodes (32): aborted(), catchall(), _check(), clone(), deferProp(), derived(), exactPartial(), extend() (+24 more)

### Community 23 - "renderFrameworkComponent"
Cohesion: 0.08
Nodes (30): bitwise(), chunkToString(), componentIsHTMLElement(), createSlotValueFromString(), decodeBase64(), decodeBase64_internal(), decodeHex(), decryptString() (+22 more)

### Community 24 - "value"
Cohesion: 0.09
Nodes (29): hasGetReader(), hide(), markHTMLBytes(), normalizeCspHashEntry(), normalizeCspResourceEntry(), own(), partitionByKind(), renderAsyncIterable() (+21 more)

### Community 25 - "dependencies"
Cohesion: 0.07
Nodes (27): @vercel/analytics/astro, allowScripts, esbuild, dependencies, astro, @astrojs/vercel, framer-motion, lenis (+19 more)

### Community 26 - "renderDefaultError"
Cohesion: 0.13
Nodes (28): applyRewriteToState(), attachCookiesToResponse(), callMiddleware(), executeRewrite(), getComponentByRoute(), getCookiesFromResponse(), getDefaultRoutes(), getEnvironment() (+20 more)

### Community 27 - "Design System: Optflow"
Cohesion: 0.07
Nodes (26): Buttons, Cards / Containers, Colors, Components, Design System: Optflow, Do:, Do's and Don'ts, Don't: (+18 more)

### Community 28 - "createAssetLink"
Cohesion: 0.10
Nodes (26): fileExtension(), slash(), appendQueryParams(), componentMetadata(), createAssetLink(), createAstro(), createAstroPagePartial(), createCallAction() (+18 more)

### Community 29 - "addAttribute"
Cohesion: 0.09
Nodes (24): addAttribute(), classifyAttribute(), clsx(), config(), createAstroComponentInstance(), en_default(), _ensureDefaultLocale(), _ensureDefaultMemoizer() (+16 more)

### Community 30 - "render"
Cohesion: 0.13
Nodes (23): applyCacheHeaders(), computeRedirectStatus(), getCacheProvider(), getResolvedLogger(), handleCache(), handleRequest(), handleTrailingSlash(), logRequest() (+15 more)

### Community 31 - "match"
Cohesion: 0.13
Nodes (22): computeCurrentLocale(), computeCurrentLocaleFromParams(), computePreferredLocale(), computePreferredLocaleList(), getAllCodes(), getErrorRoutePath(), getRedirectForPathname(), isRouteServerIsland() (+14 more)

### Community 32 - "addAttribute"
Cohesion: 0.10
Nodes (22): addAttribute(), classifyAttribute(), clsx(), config(), defineScriptVars(), en_default(), _ensureDefaultLocale(), _ensureDefaultMemoizer() (+14 more)

### Community 33 - "match"
Cohesion: 0.13
Nodes (22): computeCurrentLocale(), computeCurrentLocaleFromParams(), computePreferredLocale(), computePreferredLocaleList(), getAllCodes(), getErrorRoutePath(), getRedirectForPathname(), isRouteServerIsland() (+14 more)

### Community 34 - "stringifyParams"
Cohesion: 0.12
Nodes (19): collapseDuplicateLeadingSlashes(), addRouteBase(), callGetStaticPaths(), computeRedirectStatus(), findPathItemByKey(), generatePaginateFunction(), getParameter(), getRouteGenerator() (+11 more)

### Community 35 - "renderPage"
Cohesion: 0.13
Nodes (19): bufferHeadContent(), callComponentAsTemplateResultOrResponse(), containsServerDirective(), createAstroComponentInstance(), isPropagatingHint(), maybeRenderHead(), nonAstroPageNeedsHeadInjection(), registerIfPropagating() (+11 more)

### Community 36 - "getRouteTable"
Cohesion: 0.15
Nodes (17): isRoute404(), isRoute500(), compileRouteTable(), ensure404Route(), getCustom404Route(), getCustom500Route(), getDefaultStatusCode(), getRouteTable() (+9 more)

### Community 37 - "createResult"
Cohesion: 0.19
Nodes (15): componentMetadata(), createAstro(), createAstroPagePartial(), createCallAction(), createGetActionResult(), createResult(), defineProviderGetters(), getActionAPIContext() (+7 more)

### Community 38 - "stringifyParams"
Cohesion: 0.14
Nodes (15): collapseDuplicateLeadingSlashes(), addRouteBase(), callGetStaticPaths(), findPathItemByKey(), generatePaginateFunction(), getParameter(), getRouteGenerator(), getSegment() (+7 more)

### Community 39 - "createEndpoint"
Cohesion: 0.16
Nodes (14): createSlotValueFromString(), decodeBase64(), decodeBase64_internal(), decodeHex(), decryptString(), hasGetReader(), markHTMLBytes(), renderTemplate() (+6 more)

### Community 40 - "getIslandContent"
Cohesion: 0.17
Nodes (12): createSearchParams(), encodeBase64(), encodeBase64_internal(), encodeHexUpperCase(), encryptString(), generateCspDigest(), getComponentExport(), getComponentPath() (+4 more)

### Community 41 - "Product"
Cohesion: 0.20
Nodes (9): Capabilities and Constraints, Evidence on Hand, Operating Context, Platform, Positioning, Product, Product Principles, Product Purpose (+1 more)

### Community 42 - "isPlainObject"
Cohesion: 0.20
Nodes (10): aborted(), handleArrayResult(), handleCatchall(), handleIntersectionResults(), handlePropertyResult(), isObject(), isPlainObject(), mergeValues() (+2 more)

### Community 43 - "finalize"
Cohesion: 0.36
Nodes (8): assignProp(), assignProps(), compactTypeUnion(), finalize(), foldIntersection(), foldObjects(), object(), undeclaredConstraint()

### Community 44 - "isRoute404"
Cohesion: 0.32
Nodes (8): isRoute404(), isRoute500(), getCustom404Route(), getCustom500Route(), getDefaultStatusCode(), isLocalizedErrorRoute(), isRoute404or500(), matchRoute$1()

### Community 45 - "finalize"
Cohesion: 0.36
Nodes (8): assignProp(), assignProps(), compactTypeUnion(), finalize(), foldIntersection(), foldObjects(), object(), undeclaredConstraint()

### Community 46 - "renderJSX"
Cohesion: 0.29
Nodes (8): escapeStyleText(), isVNode(), mergeSlotInstructions(), prerenderElementChildren(), renderElement(), renderJSX(), renderJSXVNode(), spreadAttributes()

### Community 47 - "Astro Starter Kit: Minimal"
Cohesion: 0.40
Nodes (4): Astro Starter Kit: Minimal, 🧞 Commands, 🚀 Project Structure, 👀 Want to learn more?

### Community 48 - "canParseURL"
Cohesion: 0.40
Nodes (5): canParseURL(), isValidCIDRv6(), isValidIPv6(), parseURLObject(), validateURL()

### Community 49 - "tsconfig.json"
Cohesion: 0.50
Nodes (3): exclude, extends, include

### Community 50 - "getCsp"
Cohesion: 0.50
Nodes (4): normalizeCspHashEntry(), normalizeCspResourceEntry(), partitionByKind(), getCsp()

## Knowledge Gaps
- **65 isolated node(s):** `type`, `name`, `type`, `version`, `node` (+60 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `i()` connect `Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js` to `generic_BVtjWNC_.mjs`, `renderStreaming`, `renderStreaming`, `generic_BVtjWNC_.mjs`?**
  _High betweenness centrality (0.163) - this node is a cross-community bridge._
- **Why does `escape()` connect `site.ts` to `render`, `entry.mjs`, `entry.mjs`, `render`?**
  _High betweenness centrality (0.123) - this node is a cross-community bridge._
- **Why does `render()` connect `renderStreaming` to `console_DzxFduoL.mjs`, `renderPage`, `Layout.astro_astro_type_script_index_0_lang.BP_tALKx.js`, `has`, `renderFrameworkComponent`?**
  _High betweenness centrality (0.103) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `get()` (e.g. with `value()` and `key()`) actually correct?**
  _`get()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 38 inferred relationships involving `key()` (e.g. with `assignProps()` and `deduplicateElements()`) actually correct?**
  _`key()` has 38 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `get()` (e.g. with `value()` and `key()`) actually correct?**
  _`get()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `type`, `name`, `type` to the rest of the system?**
  _65 weakly-connected nodes found - possible documentation gaps or missing edges._