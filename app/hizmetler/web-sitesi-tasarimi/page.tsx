import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "web-sitesi-tasarimi",
  title: "Web Sitesi Tasarımı",
  desc: "Markanıza özgü, sade, okunaklı ve dönüşüm odaklı web arayüzleri tasarlıyoruz.",
  heroA: "İlk bakışta güçlü.",
  heroB: "Kullanırken doğal.",
  eyebrow: "WEB TASARIMIN TEMELİ",
  introTitle: "İyi web tasarımı nedir?",
  image: "/service-detail-visuals/web-sitesi-tasarimi.jpg",
  capabilities: [
    "Görsel dil",
    "Sayfa hiyerarşisi",
    "Responsive tasarım",
    "CTA kurgusu",
    "Tipografi",
    "İçerik düzeni",
    "Prototipleme",
    "Tasarım sistemi"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
