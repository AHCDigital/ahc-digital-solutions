AHC Digital Solutions — Cyber System V9 / Responsive Final Sprint

Bu sürüm V8 tasarımını değiştirmez; masaüstü dışındaki ekranlara özel olarak sağlamlaştırır.

Kontrol edilen alanlar:
- 1600px+ geniş ekran
- 1180px küçük laptop
- 900px tablet
- 640px telefon
- 390px küçük telefon
- Yatay telefon
- Dokunmatik cihazlar

Özel düzenlemeler:
- Mobil navbar yatay kaydırılabilir ve kompakt hale getirildi.
- Hero video mobilde tam ekran korunuyor, güvenli kırpma noktası ayarlandı.
- AHC Kimdir paneli 3→2→1 kolon kırılımına sahip.
- AHC Location / AHC Auth 9:16 videoları mobilde tek kolon ve tam oranlı.
- Kod editörü telefonda taşmayacak şekilde yeniden ölçeklendi.
- Keşif / Mimari / Geliştirme / Yayın pipeline'ı telefonda tek kolona iner.
- İletişim terminali ve footer mobil için yeniden düzenlendi.
- Touch cihazlarda gereksiz hover hareketleri kapatıldı.

Test:
npm install
npm run dev

Production:
npm run build
