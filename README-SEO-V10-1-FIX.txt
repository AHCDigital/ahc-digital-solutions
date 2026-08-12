AHC Digital Solutions — V10.1 Static Export SEO Fix

Düzeltme:
- app/opengraph-image.tsx kaldırıldı.
- Dinamik ImageResponse/Edge Runtime kullanılmıyor.
- Statik 1200x630 Open Graph görseli public/og-image.png olarak eklendi.
- layout.tsx Open Graph ve Twitter metadata bu statik görseli kullanıyor.

Bu değişiklik output: "export" / Cloudflare Pages statik build yapısıyla uyumludur.

Kontrol:
npm run build
