import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "teknik-seo",
  title: "Teknik SEO",
  desc: "Tarama, indeksleme, hız ve site mimarisindeki teknik engelleri tespit edip iyileştiriyoruz.",
  heroA: "Arama motoruna açık.",
  heroB: "Teknik olarak sağlam.",
  eyebrow: "TEKNİK SEO TEMELİ",
  introTitle: "Teknik SEO nedir?",
  image: "/service-detail-visuals/teknik-seo.jpg",
  capabilities: [
    "Tarama analizi",
    "İndeksleme",
    "Site haritası",
    "Robots.txt",
    "Canonical",
    "Schema",
    "Mobil uyumluluk",
    "Core Web Vitals"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
