"use client";

import { useMemo, useState } from "react";

type Category = "all" | "software" | "web" | "infra" | "seo" | "service";
type ServiceCategory = Exclude<Category, "all">;

type Service = {
  title: string;
  short: string;
  category: ServiceCategory;
  variant: string;
  image: string;
  slug: string;
  features: string[];
};

const services: Service[] = [
  {
    title: "Özel Yazılım Geliştirme",
    short: "İhtiyacınıza özel, ölçeklenebilir ve güvenli yazılım çözümleri.",
    category: "software",
    variant: "software",
    image: "/service-master-exact/software-master.jpg",
    slug: "ozel-yazilim-gelistirme",
    features: ["Analiz & Keşif", "Mimari Tasarım", "Geliştirme", "Test & Yayın"],
  },
  {
    title: "Mobil Uygulama Geliştirme",
    short: "iOS ve Android için modern, hızlı ve kullanıcı odaklı mobil deneyimler.",
    category: "software",
    variant: "mobile",
    image: "/service-master-exact/mobile-master.jpg",
    slug: "mobil-uygulama-gelistirme",
    features: ["UI/UX Tasarım", "Native Geliştirme", "Performans", "Yayın & Destek"],
  },
  {
    title: "Web Yazılım Geliştirme",
    short: "Modern teknolojilerle güçlü, hızlı ve ölçeklenebilir web uygulamaları.",
    category: "software",
    variant: "webcode",
    image: "/service-master-exact/webcode-master.jpg",
    slug: "web-yazilim-gelistirme",
    features: ["Frontend", "Backend", "API", "Güvenlik"],
  },
  {
    title: "Yönetim Paneli Geliştirme",
    short: "İş süreçlerinizi kolaylaştıran, kapsamlı ve güvenli yönetim panelleri.",
    category: "software",
    variant: "dashboard",
    image: "/service-master-exact/dashboard-master.jpg",
    slug: "yonetim-paneli-gelistirme",
    features: ["Canlı Veriler", "Analiz", "Yetkilendirme", "İzleme"],
  },
  {
    title: "İş Süreçleri Otomasyonu",
    short: "Tekrarlayan işleri otomatikleştirerek zaman ve operasyon maliyeti kazandırın.",
    category: "software",
    variant: "automation",
    image: "/service-master-exact/automation-approved.png",
    slug: "is-surecleri-otomasyonu",
    features: ["Akıllı İş Akışları", "Zaman Tasarrufu", "Veri Senkronizasyonu", "Otomatik Bildirimler"],
  },
  {
    title: "Platform Danışmanlığı",
    short: "Doğru teknoloji, altyapı ve platform kararları için teknik yol haritası.",
    category: "infra",
    variant: "platform",
    image: "/service-master-exact/platform-approved.png",
    slug: "platform-danismanligi",
    features: ["Teknoloji Seçimi", "Altyapı Planlama", "Ölçeklenebilirlik", "Güvenlik & Uyumluluk"],
  },
  {
    title: "Veri Kalitesi Yönetimi",
    short: "Verilerinizin doğruluğunu, tutarlılığını ve kullanılabilirliğini artırın.",
    category: "infra",
    variant: "data",
    image: "/service-master-exact/data-approved.png",
    slug: "veri-kalitesi-yonetimi",
    features: ["Veri Doğrulama", "Tutarlılık Kontrolü", "Kalite İzleme", "Raporlama"],
  },
  {
    title: "Kurumsal Web Sitesi",
    short: "Markanızı dijitalde güçlü temsil eden modern kurumsal web deneyimi.",
    category: "web",
    variant: "corporate",
    image: "/service-master-exact/corporate-approved.png",
    slug: "kurumsal-web-sitesi",
    features: ["Kurumsal Tasarım", "Responsive Yapı", "SEO Uyumlu Altyapı", "Teknik Destek"],
  },
  {
    title: "Web Sitesi Tasarımı",
    short: "Markanıza özgü, kullanıcı odaklı ve dönüşüm hedefli arayüz tasarımı.",
    category: "web",
    variant: "design",
    image: "/service-master-exact/design-approved.png",
    slug: "web-sitesi-tasarimi",
    features: ["Özgün Tasarım", "Kullanıcı Odaklı", "Görsel Hikâye", "Dönüşüm Odaklı"],
  },
  {
    title: "UI / UX Tasarımı",
    short: "Kullanıcı davranışına göre şekillenen modern ürün ve arayüz deneyimleri.",
    category: "web",
    variant: "uiux",
    image: "/service-master-exact/uiux-approved.png",
    slug: "ui-ux-tasarimi",
    features: ["Kullanıcı Araştırması", "Wireframe", "Prototipleme", "Arayüz Tasarımı"],
  },
  {
    title: "Web Sitesi Performans Optimizasyonu",
    short: "Daha hızlı yüklenen, daha akıcı ve Core Web Vitals odaklı yapı.",
    category: "web",
    variant: "speed",
    image: "/service-master-exact/speed-approved.png",
    slug: "web-sitesi-performans-optimizasyonu",
    features: ["Hız Analizi", "Core Web Vitals", "Önbellekleme", "Sürekli İzleme"],
  },
  {
    title: "Firebase Entegrasyonu",
    short: "Kimlik doğrulama, veri, depolama ve bulut servislerini tek altyapıda birleştirin.",
    category: "infra",
    variant: "firebase",
    image: "/service-master-exact/firebase-approved.png",
    slug: "firebase-entegrasyonu",
    features: ["Authentication", "Firestore", "Storage", "Cloud Functions"],
  },
  {
    title: "API Entegrasyonu",
    short: "Farklı sistemleri güvenli ve ölçeklenebilir veri akışlarıyla birbirine bağlayın.",
    category: "infra",
    variant: "api",
    image: "/service-master-exact/api-approved.png",
    slug: "api-entegrasyonu",
    features: ["Sistem Entegrasyonu", "Veri Senkronizasyonu", "Güvenli İletişim", "İzleme & Kontrol"],
  },
  {
    title: "SEO Çalışmaları",
    short: "Teknik, içerik ve performans odaklı çalışmalarla organik görünürlüğünüzü büyütün.",
    category: "seo",
    variant: "seo",
    image: "/service-master-exact/seo-approved.png",
    slug: "seo-calismalari",
    features: ["Anahtar Kelime", "İçerik SEO", "Rakip Analizi", "Raporlama"],
  },
  {
    title: "Teknik SEO",
    short: "Tarama, indeksleme, yapı, hız ve teknik sinyalleri arama motorları için güçlendirin.",
    category: "seo",
    variant: "techseo",
    image: "/service-master-exact/techseo-approved.png",
    slug: "teknik-seo",
    features: ["Teknik Analiz", "Site Hızı", "Mobil Uyumluluk", "Yapısal Optimizasyon"],
  },
  {
    title: "Elektronik, Telefon, Tablet ve Bilgisayar Tamiri",
    short: "Telefon, tablet, bilgisayar ve elektronik cihazlar için profesyonel teknik servis.",
    category: "service",
    variant: "repair",
    image: "/service-master-exact/repair-approved.png",
    slug: "elektronik-telefon-tablet-bilgisayar-tamiri",
    features: ["Arıza Tespiti", "Profesyonel Onarım", "Parça Kontrolü", "Test & Teslim"],
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "software", label: "Yazılım & Uygulama" },
  { key: "web", label: "Web & Deneyim" },
  { key: "infra", label: "Altyapı & Teknoloji" },
  { key: "seo", label: "SEO" },
  { key: "service", label: "Teknik Servis" },
];

export default function ServicesShowcase() {
  const [active, setActive] = useState<Category>("all");
  const visible = useMemo(
    () => (active === "all" ? services : services.filter((service) => service.category === active)),
    [active],
  );

  return (
    <div className="servicesShowcase servicesMasterFinal">
      <div className="servicesHeroRow">
        <div>
          <span className="servicesEyebrow">AHC DIGITAL / SERVICES</span>
          <h3><strong>Fikrinizi</strong><br/><em>Dijital Bir Ürüne Dönüştürüyoruz.</em></h3>
          <p>Özel yazılımdan mobil uygulamalara, web teknolojilerinden SEO ve teknik çözümlere kadar ihtiyacınız olan dijital altyapıyı tasarlıyor, geliştiriyor ve sürdürüyoruz.</p>
        </div>
        <div className="servicesHeroArt servicesCodeRain" aria-hidden="true">
          <div className="codeRainColumn colOne">
            <span>const product = build(idea);</span><span>{'interface Future { scalable: true }'}</span><span>await deploy.production();</span><span>data.connect(api);</span><span>security.verify();</span>
          </div>
          <div className="codeRainColumn colTwo">
            <span>{'function createExperience() {'}</span><span>return design + code;</span><span>{'}'}</span><span>cloud.sync(realtime);</span><span>optimize(performance);</span>
          </div>
          <div className="codeRainColumn colThree">
            <span>{'while (business.grows) {'}</span><span>system.scale();</span><span>{'}'}</span><span>release.next();</span><span>status: production_ready</span>
          </div>
          <div className="codeRainGlow"/>
        </div>
      </div>

      <div className="serviceFilters" role="tablist" aria-label="Hizmet kategorileri">
        {filters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            className={active === filter.key ? "isActive" : ""}
            onClick={() => setActive(filter.key)}
            role="tab"
            aria-selected={active === filter.key}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="serviceBento" data-filter={active}>
        {visible.map((service, index) => (
          <article
            className={`masterServiceCard masterServiceCard--${service.variant}`}
            key={service.title}
            style={{ "--card-index": index } as React.CSSProperties}
          >
            <div className="masterServiceVisual" aria-hidden="true">
              <img src={service.image} alt="" className="masterReferenceImage" loading="lazy" decoding="async" />
              <div className="masterReferenceGlow" />
              <div className="masterReferenceScan" />
              <span className="masterReferenceSpark sparkOne" />
              <span className="masterReferenceSpark sparkTwo" />
              <span className="masterReferenceSpark sparkThree" />
              <span className="masterReferenceSpark sparkFour" />
            </div>

            <div className="masterServiceCopy">
              <h4>{service.title}</h4>
              <p>{service.short}</p>
              <div className="masterFeatureList">
                {service.features.map((feature) => <span key={feature}><i />{feature}</span>)}
              </div>
              <a href={`/hizmetler/${service.slug}`} className="serviceExplore">
                Hemen İncele <b>→</b>
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="servicesFooterCta">
        <div>
          <small>PROJENİZ HAZIR BİR KATEGORİYE SIĞMIYORSA</small>
          <h4>Fikrinizi anlatın. <em>Birlikte şekillendirelim.</em></h4>
          <p>İhtiyacınızı paylaşın; size özel geliştirilebilecek çözümü birlikte değerlendirelim.</p>
        </div>
        <a href="#iletisim">PROJENİZİ KONUŞALIM <span>↗</span></a>
      </div>
    </div>
  );
}
