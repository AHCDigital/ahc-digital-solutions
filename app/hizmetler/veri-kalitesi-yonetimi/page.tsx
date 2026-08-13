import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "veri-kalitesi-yonetimi",
  title: "Veri Kalitesi Yönetimi",
  desc: "Verinizin doğru, tutarlı, izlenebilir ve karar vermeye hazır kalması için kalite süreçleri kuruyoruz.",
  heroA: "Doğru veri.",
  heroB: "Güvenilir karar.",
  eyebrow: "VERİNİN TEMELİ",
  introTitle: "Veri kalitesi nedir?",
  image: "/service-detail-visuals/veri-kalitesi-yonetimi.jpg",
  capabilities: [
    "Veri doğrulama",
    "Tutarlılık kontrolü",
    "Eksik veri analizi",
    "Kalite kuralları",
    "Temizleme",
    "İzleme",
    "Raporlama",
    "Süreç standardı"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
