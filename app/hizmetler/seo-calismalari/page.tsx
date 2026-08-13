import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "seo-calismalari",
  title: "SEO Çalışmaları",
  desc: "Arama motorlarında daha görünür olmanız için teknik yapı, içerik ve performansı birlikte ele alıyoruz.",
  heroA: "Daha görünür olun.",
  heroB: "Doğru kitleye ulaşın.",
  eyebrow: "SEO’NUN TEMELİ",
  introTitle: "SEO çalışması nedir?",
  image: "/service-detail-visuals/seo-calismalari.jpg",
  capabilities: [
    "Anahtar kelime",
    "İçerik SEO",
    "Sayfa optimizasyonu",
    "Rakip analizi",
    "İç bağlantılar",
    "Teknik kontroller",
    "Performans",
    "Raporlama"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
