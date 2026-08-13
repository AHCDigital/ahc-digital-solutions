import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "yonetim-paneli-gelistirme",
  title: "Yönetim Paneli Geliştirme",
  desc: "Veriyi, kullanıcıları ve operasyonu tek merkezden yönetebileceğiniz güvenli paneller geliştiriyoruz.",
  heroA: "Kontrol tek yerde.",
  heroB: "Kararlar daha net.",
  eyebrow: "YÖNETİMİN TEMELİ",
  introTitle: "Yönetim paneli nedir?",
  image: "/service-detail-visuals/yonetim-paneli-gelistirme.jpg",
  capabilities: [
    "Canlı veriler",
    "Kullanıcı yönetimi",
    "Yetkilendirme",
    "Raporlama",
    "Filtreleme",
    "Bildirimler",
    "İş akışları",
    "Sistem izleme"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
