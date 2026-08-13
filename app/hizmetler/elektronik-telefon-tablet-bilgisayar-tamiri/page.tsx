import ServiceDetailTemplate from "../ServiceDetailTemplate";

const data = {
  slug: "elektronik-telefon-tablet-bilgisayar-tamiri",
  title: "Elektronik, Telefon, Tablet ve Bilgisayar Tamiri",
  desc: "Telefon, tablet, bilgisayar ve elektronik cihazlarda arızayı tahmin ederek değil; ölçüm, mikroskop incelemesi ve kontrollü testlerle tespit edip doğru noktaya müdahale ediyoruz.",
  heroA: "Arızayı doğru tespit.",
  heroB: "Doğru noktaya müdahale.",
  eyebrow: "PROFESYONEL TEKNİK SERVİS",
  introTitle: "Profesyonel onarım nedir?",
  image: "/service-detail-visuals/elektronik-telefon-tablet-bilgisayar-tamiri.jpg",
  introParagraphs: [
    "Profesyonel onarım, yalnızca arızalı görünen parçayı değiştirmek değil; cihazın neden çalışmadığını ölçüm ve testlerle belirleyerek arızanın gerçek kaynağına ulaşmaktır.",
    "Özellikle anakart seviyesindeki arızalarda mikroskop altında inceleme, kısa devre ve hat kontrolleri, lehimleme, rework ve gerektiğinde BGA işlem adımları dikkatle uygulanır.",
    "Hedefimiz cihazı gereksiz parça değişimine yönlendirmeden, yapılabilecek müdahaleyi netleştirmek ve onarım sonrasında temel fonksiyonları tekrar kontrol ederek teslim etmektir."
  ],
  miniFacts: ["Ölçümle arıza tespiti", "Mikroskop altında işlem", "Anakart seviyesi müdahale", "Onarım sonrası test"],
  capabilities: ["Arıza Tespiti", "Anakart Onarımı", "Mikroskop İşlemleri", "Lehim & Rework", "BGA / Reballing", "Telefon & Tablet", "Bilgisayar Onarımı", "Test & Teslim"],
  capabilityDescriptions: [
    "Belirtiyi değil arızanın kaynağını bulmak için cihazın ilgili hatları ve bileşenleri kontrollü biçimde incelenir.",
    "Güç, şarj, görüntü, bağlantı ve benzeri anakart kaynaklı sorunlarda kart seviyesi müdahale değerlendirilir.",
    "Küçük SMD bileşenler, pad ve bağlantı noktaları mikroskop altında kontrollü şekilde incelenir ve işlenir.",
    "Hasarlı lehim noktaları, soketler ve uygun bileşenlerde profesyonel lehimleme ve rework işlemleri uygulanır.",
    "Uygun arıza senaryolarında BGA entegreler için söküm, temizlik, yeniden toplama ve reballing işlemleri değerlendirilir.",
    "Telefon ve tabletlerde cihazın arızasına göre ekran, şarj, batarya, bağlantı ve anakart kaynaklı sorunlar ele alınır.",
    "Dizüstü ve masaüstü bilgisayarlarda donanım, güç, ısınma, bağlantı ve kart kaynaklı arızalar incelenir.",
    "Müdahale sonrasında cihazın ilgili fonksiyonları kontrol edilir; yapılan işlem doğrulanarak teslim sürecine geçilir."
  ],
  scopeIntro: "Her cihaz ve her arıza aynı değildir. Müdahale biçimini cihazın belirtisine, ölçüm sonuçlarına ve arızanın bulunduğu noktaya göre belirliyoruz.",
  gains: [
    ["Doğru Teşhis", "Parça değişimine başlamadan önce arızanın kaynağını anlamaya odaklanırız."],
    ["Kart Seviyesi Onarım", "Uygun durumlarda komple kart değişimi yerine arızalı bölge veya bileşen üzerinde çalışılır."],
    ["Hassas Müdahale", "Mikroskop, ölçüm ekipmanları ve uygun rework teknikleriyle kontrollü işlem hedeflenir."],
    ["Şeffaf Süreç", "Cihazın durumu ve uygulanabilecek işlem, teknik değerlendirme sonrasında netleştirilir."],
    ["Kontrollü Teslim", "Onarım tamamlandığında ilgili fonksiyonlar yeniden test edilerek sonuç doğrulanır."]
  ] as [string, string][],
  gainsIntro: "Teknik serviste önemli olan hızlıca parça değiştirmek değil, cihazın gerçek arızasını doğru anlayıp mümkün olan en doğru müdahaleyi yapmaktır.",
  process: [
    ["Cihazı Dinliyoruz", "Arızanın nasıl başladığını, belirtileri ve daha önce işlem görüp görmediğini öğreniyoruz."],
    ["Ön Kontrol Yapıyoruz", "Cihazın fiziksel durumu, güç davranışı ve temel fonksiyonları kontrol ediliyor."],
    ["Arızayı Ölçüyoruz", "Gerekli noktalarda ölçüm, kısa devre kontrolü ve mikroskop incelemesiyle arıza bölgesi daraltılıyor."],
    ["Müdahaleyi Belirliyoruz", "Parça değişimi, lehim, rework veya anakart seviyesi işlem gerekip gerekmediği netleştiriliyor."],
    ["Onarımı Uyguluyoruz", "Belirlenen işlem uygun ekipman ve kontrollü sıcaklık/işçilik koşullarıyla gerçekleştiriliyor."],
    ["Fonksiyonları Test Ediyoruz", "Onarımla ilişkili fonksiyonlar ve cihazın temel çalışma durumu tekrar kontrol ediliyor."],
    ["Teslime Hazırlıyoruz", "Son kontroller tamamlandıktan sonra cihaz yapılan işlemle birlikte teslim sürecine alınıyor."]
  ] as [string, string][],
  processIntro: "Tamir sürecini yazılım geliştirme gibi değil, gerçek teknik servis akışıyla yürütüyoruz: teşhis, ölçüm, müdahale, doğrulama ve teslim.",
  systemEyebrow: "MİKRO ELEKTRONİK ONARIM",
  systemTitle: "Parça değişiminden fazlası.",
  systemEm: "Anakart seviyesinde müdahale.",
  systemText: "Mikroskop altında komponent kontrolü, lehim ve rework işlemleri, uygun vakalarda BGA/reballing gibi hassas uygulamalar; arızanın niteliğine göre profesyonel teknik servis sürecinin bir parçası olabilir.",
  trustEyebrow: "ONARIM STANDARDI",
  trustTitle: "Cihaza göre değil, arızaya göre işlem.",
  trustIntro: "Her cihazın arızası farklıdır. Bu nedenle işlem kararı, gerçek teknik bulgular ve cihazın onarılabilirlik durumu üzerinden verilir.",
  trustItems: [
    ["Teşhis", "Müdahaleden önce arızanın mümkün olduğunca doğru noktada tespit edilmesi hedeflenir."],
    ["Hassas İşçilik", "Anakart ve küçük bileşen işlemlerinde uygun ekipmanla kontrollü çalışma yapılır."],
    ["Parça & Uygunluk", "Değişim gereken durumlarda cihazla uyumlu parça ve doğru montaj süreci esas alınır."],
    ["Son Kontrol", "İşlem sonrasında ilgili fonksiyonlar yeniden kontrol edilerek onarım sonucu doğrulanır."]
  ] as [string, string][],
  ctaTitle: "Cihazınızdaki arızayı birlikte değerlendirelim."
};

export default function Page(){ return <ServiceDetailTemplate d={data}/>; }
