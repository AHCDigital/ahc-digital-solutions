# AHC Digital Solutions — Premium Overhaul V1

Bu paket, kullanıcının gönderdiği güncel Next.js projesi baz alınarak hazırlanmıştır.

## Değiştirilenler
- Tam ekran 2K Hailuo hero videosu entegre edildi ve web için optimize edildi.
- Navbar ve logo kullanımı yeniden tasarlandı. Orijinal siyah arka planlı logo, koyu navbar üzerinde `mix-blend-mode: screen` ile yamalı görünmeden kullanılıyor.
- Tüm ana sayfa görsel dili sıfırdan yenilendi.
- Türkçe hero, hizmetler, projeler, yaklaşım ve iletişim bölümleri oluşturuldu.
- Mobil ve tablet responsive düzenleri eklendi.
- Next.js static export / Cloudflare Pages yapısı korundu.
- `.next`, `node_modules`, `out` gibi üretilmiş klasörler pakete dahil edilmedi.

## Kurulum
1. Mevcut proje klasörünün bir yedeğini alın.
2. Bu ZIP içeriğini `C:\Users\AHC\Desktop\ahc-digital-solutions` klasörüne kopyalayın.
3. PowerShell:

```powershell
cd $HOME\Desktop\ahc-digital-solutions
npm install
npm run dev
```

4. Yerelde kontrol edin: `http://localhost:3000`
5. Beğenilirse:

```powershell
git add .
git commit -m "Premium UI overhaul V1"
git push
```
