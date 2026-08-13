import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "elektronik-telefon-tablet-bilgisayar-tamiri",
  title: "Elektronik, Telefon, Tablet ve Bilgisayar Tamiri",
  desc: "Cihazları yalnızca parça değişimiyle değil, arızanın kaynağını bularak profesyonel biçimde onarıyoruz.",
  heroA: "Arızayı buluyoruz.",
  heroB: "Doğru noktaya müdahale.",
  eyebrow: "TEKNİK SERVİSİN TEMELİ",
  introTitle: "Profesyonel onarım nedir?",
  image: "/service-detail-visuals/elektronik-telefon-tablet-bilgisayar-tamiri.jpg",
  capabilities: [
    "Arıza tespiti",
    "Anakart onarımı",
    "Mikroskop işlemleri",
    "Lehim & rework",
    "Parça kontrolü",
    "Telefon & tablet",
    "Bilgisayar",
    "Test & teslim"
  ]
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
