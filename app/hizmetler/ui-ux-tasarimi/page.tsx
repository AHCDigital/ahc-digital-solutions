import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "ui-ux-tasarimi",
  title: "UI / UX Tasarımı",
  desc: "Kullanıcının ne aradığını anlayan ve işi en az adımla tamamlatan ürün deneyimleri tasarlıyoruz.",
  heroA: "Güzel görünmekten öte.",
  heroB: "Kolay kullanılmak için.",
  eyebrow: "DENEYİMİN TEMELİ",
  introTitle: "UI / UX tasarımı nedir?",
  image: "/service-detail-visuals/ui-ux-tasarimi.jpg",
  capabilities: [
    "Kullanıcı akışları",
    "Wireframe",
    "Prototip",
    "Arayüz tasarımı",
    "Etkileşimler",
    "Tasarım sistemi",
    "Kullanılabilirlik",
    "Responsive deneyim"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
