import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "web-yazilim-gelistirme",
  title: "Web Yazılım Geliştirme",
  desc: "Tarayıcı üzerinde çalışan hızlı, güvenli ve ölçeklenebilir iş uygulamaları geliştiriyoruz.",
  heroA: "Tarayıcıda güçlü.",
  heroB: "İşinize göre şekillenen.",
  eyebrow: "WEB YAZILIMIN TEMELİ",
  introTitle: "Web yazılım nedir?",
  image: "/service-detail-visuals/web-yazilim-gelistirme.jpg",
  capabilities: [
    "Web uygulamaları",
    "Müşteri portalları",
    "Üyelik sistemleri",
    "Sipariş akışları",
    "API servisleri",
    "Veritabanı",
    "Yetkilendirme",
    "Raporlama"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
