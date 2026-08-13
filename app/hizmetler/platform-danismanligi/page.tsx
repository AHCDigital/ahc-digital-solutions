import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "platform-danismanligi",
  title: "Platform Danışmanlığı",
  desc: "Projeniz için doğru teknoloji, altyapı ve büyüme kararlarını birlikte planlıyoruz.",
  heroA: "Doğru teknoloji.",
  heroB: "Sağlam yol haritası.",
  eyebrow: "PLATFORMUN TEMELİ",
  introTitle: "Platform danışmanlığı nedir?",
  image: "/service-detail-visuals/platform-danismanligi.jpg",
  capabilities: [
    "Teknoloji seçimi",
    "Mimari planlama",
    "Altyapı analizi",
    "Maliyet değerlendirme",
    "Güvenlik",
    "Ölçeklenebilirlik",
    "Entegrasyon planı",
    "Teknik yol haritası"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
