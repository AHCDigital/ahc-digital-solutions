import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "mobil-uygulama-gelistirme",
  title: "Mobil Uygulama Geliştirme",
  desc: "Mobil uygulamanız kullanıcıyla buluştuğu anda hızlı, anlaşılır ve güvenilir olmalı.",
  heroA: "Kullanıcının elinde.",
  heroB: "Akıcı bir deneyim.",
  eyebrow: "MOBİL ÜRÜNÜN TEMELİ",
  introTitle: "Mobil uygulama nedir?",
  image: "/service-detail-visuals/mobil-uygulama-gelistirme.jpg",
  capabilities: [
    "Android uygulamaları",
    "Kullanıcı akışları",
    "Bildirim sistemleri",
    "API bağlantıları",
    "Oturum & güvenlik",
    "Harita & konum",
    "Firebase altyapısı",
    "Yayın hazırlığı"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
