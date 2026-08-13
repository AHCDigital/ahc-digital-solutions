import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "web-sitesi-performans-optimizasyonu",
  title: "Web Sitesi Performans Optimizasyonu",
  desc: "Yavaşlayan noktaları analiz ediyor, sitenizi daha hızlı ve daha akıcı hale getiriyoruz.",
  heroA: "Daha hızlı açılır.",
  heroB: "Daha akıcı çalışır.",
  eyebrow: "PERFORMANSIN TEMELİ",
  introTitle: "Web performansı nedir?",
  image: "/service-detail-visuals/web-sitesi-performans-optimizasyonu.jpg",
  capabilities: [
    "Hız analizi",
    "Core Web Vitals",
    "Görsel optimizasyonu",
    "Kod iyileştirme",
    "Önbellekleme",
    "Ağ optimizasyonu",
    "Mobil performans",
    "Sürekli izleme"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
