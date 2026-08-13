import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "api-entegrasyonu",
  title: "API Entegrasyonu",
  desc: "Farklı sistemlerin güvenli, kontrollü ve izlenebilir biçimde veri alışverişi yapmasını sağlıyoruz.",
  heroA: "Sistemler konuşur.",
  heroB: "Veri doğru akar.",
  eyebrow: "ENTEGRASYONUN TEMELİ",
  introTitle: "API entegrasyonu nedir?",
  image: "/service-detail-visuals/api-entegrasyonu.jpg",
  capabilities: [
    "REST API",
    "Veri senkronizasyonu",
    "Kimlik doğrulama",
    "Webhook akışları",
    "Üçüncü taraf servisler",
    "Hata yönetimi",
    "Loglama",
    "Güvenli iletişim"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
