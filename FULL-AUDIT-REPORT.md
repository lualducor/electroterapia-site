# SEO Full Audit Report — electroterapia.co
**Date:** 2026-04-09  
**Audited URL:** https://www.electroterapia.co/  
**Business:** Dr. Rafael Cortés — Electroterapia, Medicina Física y Rehabilitación  
**Framework:** Next.js 16.2.3 App Router (static, Vercel)  
**Pages crawled:** 2 (/ and /electroterapia-bogota)

---

## Overall SEO Health Score: 64 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 68 | 14.96 |
| Content Quality | 23% | 61 | 14.03 |
| On-Page SEO | 20% | 62 | 12.40 |
| Schema / Structured Data | 10% | 55 | 5.50 |
| Performance (CWV) | 10% | 72* | 7.20 |
| AI Search Readiness | 10% | 52 | 5.20 |
| Images | 5% | 88 | 4.40 |
| **TOTAL** | | | **63.7 → 64** |

*Performance score is estimated from stack analysis (next/image, WebP, static SSG). PageSpeed Insights API was rate-limited during audit.

---

## Executive Summary

### Top 5 Critical Issues
1. **Non-www uses 307 (temporary) redirect** instead of 301 — leaks PageRank
2. **Missing privacy policy page** — YMYL medical site without legal pages is a trust deficit
3. **No Google Business Profile confirmed** — #1 local ranking factor unoptimized
4. **Content too thin** — Homepage ~260 words (min 500), /electroterapia-bogota ~230 words (min 800)
5. **No Doctoralia.com.co profile** — Primary Colombian medical directory unrepresented

### Top 5 Quick Wins
1. Fix 307 → 301 redirect for non-www in Vercel project settings (5 min)
2. Fix duplicate title tag on /electroterapia-bogota (10 min)
3. Add FAQPage JSON-LD schema — FAQ content already exists on both pages (30 min)
4. Add missing security headers via next.config.ts (20 min)
5. Add `@id` to LocalBusiness schema (5 min)

---

## 1. Technical SEO — Score: 68/100

### Redirects & Canonicalization

| Check | Status | Severity |
|-------|--------|----------|
| HTTP → HTTPS redirect | ✅ 308 Permanent | Pass |
| HTTPS HSTS header | ✅ max-age=63072000 | Pass |
| Non-www → www redirect | ⚠️ **307 Temporary** | **High** |
| www served, canonical non-www | ⚠️ Inconsistent signal | **Medium** |
| 404 page returns HTTP 404 | ✅ Correct | Pass |
| robots.txt allows all crawlers | ✅ | Pass |
| Sitemap in robots.txt | ✅ | Pass |
| noindex on production | ✅ Not present | Pass |

**Non-www 307 issue:** `https://electroterapia.co/` returns a `307 Temporary Redirect` to `https://www.electroterapia.co/`. A 307 does not pass full PageRank and signals to Google that the redirect may be temporary. This should be a 301 Permanent. Fix in Vercel project settings → Domains → set canonical domain with a permanent redirect.

**Canonical inconsistency:** Pages declare `<link rel="canonical" href="https://electroterapia.co/...">` (non-www) but are served at `https://www.electroterapia.co/`. The canonical is a hint, not a directive — the 307 means Google has two signals pointing in opposite directions. Fix the redirect to 301 and decide on a canonical domain (either www or non-www consistently).

### Security Headers

| Header | Status | Severity |
|--------|--------|----------|
| Strict-Transport-Security | ✅ Present | Pass |
| X-Content-Type-Options | ❌ Missing | Medium |
| X-Frame-Options | ❌ Missing | Medium |
| Content-Security-Policy | ❌ Missing | Medium |
| Referrer-Policy | ❌ Missing | Low |
| Permissions-Policy | ❌ Missing | Low |

Add to `next.config.ts`:
```ts
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
};
```

### Crawlability
- robots.txt: valid, allows all bots ✅
- AI crawlers (GPTBot, ClaudeBot, PerplexityBot): not blocked ✅
- `/_next/static/` not disallowed ✅ (critical for Next.js rendering)
- Sitemap referenced at `https://electroterapia.co/sitemap.xml` ✅

---

## 2. Content Quality — Score: 61/100

*Source: E-E-A-T analysis against September 2025 Quality Rater Guidelines*

### E-E-A-T Breakdown

| Dimension | Score | Key Gaps |
|-----------|-------|----------|
| Experience | 55/100 | No first-person narrative, no clinical case context, generic FAQs |
| Expertise | 65/100 | UNAL credential present; missing tarjeta profesional, no modality detail |
| Authoritativeness | 48/100 | No external citations, no professional associations, no sameAs profiles |
| Trustworthiness | 60/100 | NAP consistent; missing privacy policy, no medical disclaimer |

### Word Count vs Minimums

| Page | Visible Words | Minimum | Status |
|------|--------------|---------|--------|
| Homepage (/) | ~260 | 500 | ❌ Below minimum |
| /electroterapia-bogota | ~230 | 800 | ❌ Well below minimum |

### Critical Content Issues

**Missing privacy policy** — YMYL (Your Money or Your Life) classification applies to all medical sites. Absence of a privacy policy is a direct trust deficit under the QRG. Required legally for GDPR-adjacent compliance and Colombian data protection law (Ley 1581 de 2012).

**No medical disclaimer** — Service pages describing treatments without a disclaimer that content is informational and does not substitute for an in-person consultation is a YMYL risk.

**Duplicate title on /electroterapia-bogota:**
```
Current: "Electroterapia en Bogotá | Dr. Rafael Cortés – Tratamiento del dolor | Dr. Rafael Cortés – Electroterapia Bogotá"
Target:  "Electroterapia en Bogotá | Tratamiento del dolor – Dr. Rafael Cortés"
```
The brand suffix appears twice (~90 chars). Google truncates at ~60 chars and may rewrite the title.

---

## 3. On-Page SEO — Score: 62/100

### Title Tags

| Page | Title | Length | Status |
|------|-------|--------|--------|
| / | Electroterapia en Bogotá \| Dr. Rafael Cortés – 30 años de experiencia | 68 chars | ⚠️ Slightly long |
| /electroterapia-bogota | Electroterapia en Bogotá \| Dr. Rafael Cortés – Tratamiento del dolor \| Dr. Rafael Cortés – Electroterapia Bogotá | 113 chars | ❌ Duplicate suffix |

### Meta Descriptions

| Page | Description | Status |
|------|-------------|--------|
| / | Médico especialista en electroterapia para el manejo del dolor... (156 chars) | ✅ Good |
| /electroterapia-bogota | Consulta médica en electroterapia en Bogotá para el manejo del dolor... (152 chars) | ✅ Good |

### Canonical Tags

| Page | Canonical | Matches Served URL |
|------|-----------|--------------------|
| / | https://electroterapia.co | ❌ Served at www |
| /electroterapia-bogota | https://electroterapia.co/electroterapia-bogota | ❌ Served at www |

### Internal Linking
- Homepage → /electroterapia-bogota: ✅ (1 internal link)
- /electroterapia-bogota → Homepage: ✅ (breadcrumb)
- No orphan pages ✅

---

## 4. Schema / Structured Data — Score: 55/100

### Current Implementation
```json
@type: ["LocalBusiness", "Physician"]
Properties: name, url, telephone, email, address, areaServed, geo, openingHours, medicalSpecialty, hasMap, sameAs
```

### Validation Issues

| Issue | Severity |
|-------|----------|
| Missing `@id` on entity | **High** |
| Missing `image` property | **High** |
| Email domain mismatch (`rafaelcortes.co` vs `electroterapia.co`) | **High** |
| `telephone` has spaces — not E.164 format | Medium |
| Geo coordinates not verified against live Maps | Medium |
| `medicalSpecialty` should use full schema.org URL | Low |

### Missing Schema Opportunities

| Schema Type | Page | Priority |
|-------------|------|----------|
| `WebSite` with SearchAction | / | Medium |
| `BreadcrumbList` | /electroterapia-bogota | Medium |
| `Person` (Dr. Rafael Cortés) | / | Medium |
| `FAQPage` | Both | Info (AI/LLM benefit, not Google rich results) |
| `MedicalWebPage` | /electroterapia-bogota | Low |

---

## 5. Performance (CWV) — Score: 72/100 (estimated)

*Note: PageSpeed Insights API was rate-limited. Score is based on stack analysis.*

### Stack Signals

| Signal | Status |
|--------|--------|
| Static SSG (pre-rendered HTML) | ✅ Excellent for TTFB |
| `next/image` with `priority` on hero | ✅ Prevents LCP delay |
| All images WebP format | ✅ |
| `next/font` (Figtree + Noto Sans) | ✅ No layout shift from fonts |
| Vercel Edge CDN (cache HIT observed) | ✅ |
| JavaScript bundle (Next.js 16 Turbopack) | ✅ Optimized |

### Image Sizes (source files)

| File | Size | Notes |
|------|------|-------|
| og-image.png | 412 KB | ⚠️ Large for OG image (target <200 KB) |
| electro2.webp | 324 KB | OK — next/image resizes on delivery |
| consultorio2.webp | 272 KB | OK |
| electro1.webp | 244 KB | OK |
| consultorio1.webp | 236 KB | OK |
| doctor_main.webp | 216 KB | OK |
| portrait2.webp | 200 KB | OK |

**og-image.png** at 412 KB is the only concern. OG images are not resized by next/image. Recommend optimizing to <200 KB.

To get real CWV scores, run:
```bash
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.electroterapia.co/&strategy=mobile"
```

---

## 6. Images — Score: 88/100

| Check | Status |
|-------|--------|
| All images have alt text | ✅ |
| Alt text is descriptive (not generic) | ✅ |
| Images served as WebP | ✅ |
| next/image used for all content images | ✅ |
| Responsive srcset generated by next/image | ✅ |
| og-image.png optimized | ⚠️ 412 KB (compress to <200 KB) |

All 6 content images have keyword-rich, descriptive alt text in Spanish. No missing alt attributes detected.

---

## 7. AI Search Readiness — Score: 52/100

| Check | Status | Severity |
|-------|--------|----------|
| robots.txt allows AI crawlers | ✅ GPTBot, ClaudeBot, PerplexityBot not blocked | Pass |
| llms.txt | ❌ 404 — not present | Medium |
| FAQPage schema | ❌ Missing (FAQ content exists) | High |
| Citable expert statements | ⚠️ Generic — not attributed to Dr. Cortés | Medium |
| Structured passage blocks (134–167 words) | ⚠️ Partial — /electroterapia-bogota is better structured | Medium |
| Brand signals ("Dr. Rafael Cortés electroterapia Bogotá") | ✅ Present across both pages | Pass |
| sameAs entity anchors | ✅ GBP CID added to schema | Pass |

**llms.txt missing** — AI search engines like Perplexity and Claude use this file to understand site structure and citability permissions. Add `/public/llms.txt`:
```
# llms.txt — electroterapia.co
# Dr. Rafael Cortés — Electroterapia Bogotá

> Consulta médica especializada en electroterapia para manejo del dolor y rehabilitación funcional. Bogotá, Colombia.

## Páginas principales
- [Inicio](https://electroterapia.co/)
- [Electroterapia en Bogotá](https://electroterapia.co/electroterapia-bogota)

## Contacto
- WhatsApp: +57 315 786 2547
- Dirección: Carrera 28 bis #49a-21, Teusaquillo, Bogotá
```

---

## 8. Sitemap — Score: 82/100

| Check | Status | Severity |
|-------|--------|----------|
| Valid XML | ✅ | Pass |
| All URLs return 200 | ✅ | Pass |
| lastmod dates present | ✅ | Pass |
| No priority/changefreq (deprecated) | ✅ | Pass |
| Referenced in robots.txt | ✅ | Pass |
| www vs non-www consistency | ⚠️ Sitemap uses non-www, served via www | Medium |
| Homepage trailing slash vs canonical | ⚠️ `<loc>/</loc>` vs canonical without slash | Low |
| Coverage (2/2 pages) | ✅ | Pass |

---

## 9. Local SEO — Score: 28/100 (estimated)

*Note: GBP live data was not accessible. Score is based on confirmed NAP data and standard audit signals.*

| Dimension | Score |
|-----------|-------|
| GBP Signals | 20/100 |
| Reviews & Reputation | 15/100 |
| Local On-Page SEO | 35/100 |
| NAP Consistency & Citations | 30/100 |
| Local Schema | 20/100 |
| Local Link & Authority | 65/100 |

**Top Local SEO Gaps:**
1. GBP listing: existence unconfirmed — must be claimed and fully optimized
2. Doctoralia.com.co: not present (primary Colombian medical directory)
3. No RETHUS number (tarjeta profesional médica) displayed
4. No review acquisition strategy
5. EPS/medicina particular status not stated on page

**Domain advantage:** `electroterapia.co` is an exact-match keyword domain — significant local SEO asset.

---

## 10. Backlinks — Score: N/A (insufficient data)

- Common Crawl (Jan–Mar 2026): **0 referring domains** found
- Domain is new — no backlink profile established yet
- No Moz/Bing API keys configured for DA/PA metrics

**Interpretation:** Normal for a newly deployed domain. Backlinks will build over time through citations (Doctoralia, GBP, Paginas Amarillas) and organic mentions.
