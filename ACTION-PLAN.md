# SEO Action Plan — electroterapia.co
**Generated:** 2026-04-09 | **Overall Score: 64/100**

---

## CRITICAL — Fix immediately

| # | Issue | Where to fix | Effort |
|---|-------|-------------|--------|
| C1 | Non-www redirect is 307 (temporary) — change to 301 permanent | Vercel dashboard → Domains | 5 min |
| C2 | Missing privacy policy page | Create `/app/privacidad/page.tsx` | 30 min |
| C3 | Claim/optimize Google Business Profile | maps.business.google.com | 1–2 hrs |
| C4 | Create Doctoralia.com.co profile | doctoralia.com.co/registrarse | 30 min |
| C5 | Homepage and /electroterapia-bogota content too thin | Expand both pages | 2–3 hrs |

---

## HIGH — Fix within 1 week

| # | Issue | Where to fix | Effort |
|---|-------|-------------|--------|
| H1 | Duplicate title tag on /electroterapia-bogota | `app/electroterapia-bogota/page.tsx` line 8 | 5 min |
| H2 | Add FAQPage JSON-LD schema (FAQ content already exists) | `lib/schema.ts` or page files | 30 min |
| H3 | Add `@id` to LocalBusiness schema | `lib/schema.ts` | 5 min |
| H4 | Add `image` property to schema | `lib/schema.ts` | 10 min |
| H5 | Fix email domain mismatch in schema (`rafaelcortes.co` → `electroterapia.co`) | `lib/business.ts` | 5 min |
| H6 | Add medical disclaimer to service pages | Footer or component | 15 min |
| H7 | Add security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy) | `next.config.ts` | 15 min |

---

## MEDIUM — Fix within 1 month

| # | Issue | Where to fix | Effort |
|---|-------|-------------|--------|
| M1 | Decide canonical domain (www vs non-www) and align canonical tags | `app/layout.tsx` metadataBase + Vercel domains | 15 min |
| M2 | Add llms.txt for AI search readiness | `public/llms.txt` | 15 min |
| M3 | Add `WebSite` schema to homepage | `lib/schema.ts` | 20 min |
| M4 | Add `BreadcrumbList` schema to /electroterapia-bogota | `app/electroterapia-bogota/page.tsx` | 15 min |
| M5 | Add `Person` schema for Dr. Rafael Cortés | `lib/schema.ts` | 20 min |
| M6 | Fix `telephone` to E.164 format in schema (remove spaces) | `lib/schema.ts` | 5 min |
| M7 | Verify geo coordinates against Google Maps | `lib/schema.ts` | 10 min |
| M8 | Optimize og-image.png from 412 KB to <200 KB | `public/og-image.png` | 20 min |
| M9 | Add RETHUS / tarjeta profesional number to about section | Component | 10 min |
| M10 | Clarify EPS vs medicina particular on page | Content | 15 min |
| M11 | Create citations in Paginas Amarillas CO + secondary directories | External | 1 hr |
| M12 | Implement review acquisition process (WhatsApp template) | Process | 30 min |

---

## LOW — Backlog

| # | Issue | Where to fix | Effort |
|---|-------|-------------|--------|
| L1 | Add `MedicalWebPage` schema to /electroterapia-bogota | Page file | 15 min |
| L2 | Use full schema.org URL for medicalSpecialty | `lib/schema.ts` | 5 min |
| L3 | Fix sitemap homepage trailing slash to match canonical exactly | `public/sitemap.xml` | 5 min |
| L4 | Add author bio page for Dr. Cortés | New page | 1–2 hrs |
| L5 | Add `sameAs` links to LinkedIn / Doctoralia once profiles created | `lib/schema.ts` | 10 min |
| L6 | Add Google Search Console + track indexation of both pages | Google Search Console | 15 min |
| L7 | Add map embed to homepage | Contact section | 20 min |
| L8 | Add `hasMap` Google Maps iframe embed link using confirmed CID | Already done ✅ | — |

---

## Implementation Roadmap

### Week 1 (Critical + Quick Wins)
- [ ] Fix non-www 307 → 301 redirect in Vercel
- [ ] Fix /electroterapia-bogota duplicate title tag
- [ ] Add security headers to next.config.ts
- [ ] Add `@id`, `image`, fix email and telephone in schema
- [ ] Claim Google Business Profile
- [ ] Create Doctoralia.com.co profile
- [ ] Add FAQPage schema to both pages

### Week 2 (Content & Trust)
- [ ] Create privacy policy page (/privacidad)
- [ ] Add medical disclaimer
- [ ] Expand homepage to 500+ words
- [ ] Expand /electroterapia-bogota to 800+ words
- [ ] Add RETHUS number

### Week 3–4 (Schema & AI Readiness)
- [ ] Add llms.txt
- [ ] Add WebSite, BreadcrumbList, Person schema
- [ ] Submit sitemap to Google Search Console
- [ ] Decide and enforce www vs non-www canonical
- [ ] Create citations in secondary directories

### Ongoing
- [ ] Review acquisition (2+ per month via WhatsApp)
- [ ] Monthly GBP post (tratamientos, tips, disponibilidad)
- [ ] Track rankings for: "electroterapia Bogotá", "médico electroterapia Bogotá", "fisiatra Bogotá"
