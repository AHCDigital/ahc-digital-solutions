import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "is-surecleri-otomasyonu",
  title: "İş Süreçleri Otomasyonu",
  desc: "Tekrarlayan işleri azaltan, ekipler arasında veri akışını hızlandıran otomasyonlar kuruyoruz.",
  heroA: "Tekrarlayan işi azaltın.",
  heroB: "Akışı hızlandırın.",
  eyebrow: "OTOMASYONUN TEMELİ",
  introTitle: "İş otomasyonu nedir?",
  image: "/service-detail-visuals/is-surecleri-otomasyonu.jpg",
  capabilities: [
    "Akıllı iş akışları",
    "Otomatik bildirimler",
    "Veri senkronizasyonu",
    "Görev tetikleme",
    "Onay akışları",
    "Zamanlama",
    "Entegrasyonlar",
    "İzleme"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
