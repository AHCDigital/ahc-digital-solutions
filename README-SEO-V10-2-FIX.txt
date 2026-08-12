AHC Digital Solutions — V10.2 Static Export SEO Fix

Düzeltmeler:
- app/sitemap.ts kaldırıldı.
- app/robots.ts kaldırıldı.
- public/sitemap.xml eklendi.
- public/robots.txt eklendi.
- Statik Open Graph görseli public/og-image.png olarak korunuyor.

Bu yapı output: "export" ile Cloudflare Pages statik deploy için uygundur.

ÖNEMLİ:
Eski dosyaları projenin üzerine ZIP kopyalamak onları otomatik silmez.
Projede şu eski dosyaların bulunmadığından emin olun:
- app/opengraph-image.tsx
- app/sitemap.ts
- app/robots.ts

Ardından .next klasörünü silip npm run build çalıştırın.
