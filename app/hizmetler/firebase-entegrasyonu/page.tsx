import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "firebase-entegrasyonu",
  title: "Firebase Entegrasyonu",
  desc: "Kimlik doğrulama, veri, depolama ve bulut servislerini güvenli bir Firebase altyapısında birleştiriyoruz.",
  heroA: "Gerçek zamanlı altyapı.",
  heroB: "Tek merkezde buluşur.",
  eyebrow: "FIREBASE TEMELİ",
  introTitle: "Firebase entegrasyonu nedir?",
  image: "/service-detail-visuals/firebase-entegrasyonu.jpg",
  capabilities: [
    "Authentication",
    "Cloud Firestore",
    "Storage",
    "Cloud Functions",
    "Cloud Messaging",
    "Analytics",
    "Security Rules",
    "Gerçek zamanlı veri"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
