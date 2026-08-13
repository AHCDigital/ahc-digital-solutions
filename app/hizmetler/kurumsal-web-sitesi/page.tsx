import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "kurumsal-web-sitesi",
  title: "Kurumsal Web Sitesi",
  desc: "Markanızı güven veren, hızlı ve modern bir dijital vitrinle temsil ediyoruz.",
  heroA: "Markanızı anlatan.",
  heroB: "Güven veren bir vitrin.",
  eyebrow: "KURUMSAL WEB TEMELİ",
  introTitle: "Kurumsal web sitesi nedir?",
  image: "/service-detail-visuals/kurumsal-web-sitesi.jpg",
  capabilities: [
    "Kurumsal tasarım",
    "Responsive yapı",
    "Hızlı açılış",
    "SEO altyapısı",
    "İçerik mimarisi",
    "İletişim akışı",
    "Güvenlik",
    "Teknik destek"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
