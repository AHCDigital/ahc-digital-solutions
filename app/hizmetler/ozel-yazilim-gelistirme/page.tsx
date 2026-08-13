const capabilities = [
  ["Yönetim Sistemleri", "Operasyonunuzu tek merkezden yöneten özel paneller ve iş akışları."],
  ["CRM Sistemleri", "Müşteri, teklif, takip ve iletişim süreçlerini size göre şekillendiren yapılar."],
  ["Operasyon Yazılımları", "Günlük işlerinizi hızlandıran, hataları azaltan ve kontrolü artıran sistemler."],
  ["Rezervasyon Sistemleri", "Takvim, müsaitlik, rezervasyon ve bildirim süreçlerini birlikte yöneten çözümler."],
  ["Sipariş Sistemleri", "Siparişten teslimata kadar süreci izlenebilir ve yönetilebilir hale getiren altyapılar."],
  ["Personel & Saha Yönetimi", "Ekip, görev, lokasyon ve saha operasyonlarını tek sistemde buluşturan araçlar."],
  ["Raporlama & Analiz", "Dağınık veriyi anlaşılır raporlara ve karar destek ekranlarına dönüştüren yapılar."],
  ["Otomasyon Çözümleri", "Tekrarlayan işleri otomatikleştirerek zaman ve operasyon maliyeti kazandıran akışlar."],
  ["API Entegrasyonları", "Farklı yazılımları ve servisleri güvenli veri akışlarıyla birbirine bağlayan çözümler."],
  ["Şirket İçi Platformlar", "İşletmenizin yalnızca kendi ekibine ve süreçlerine özel dijital çalışma alanları."],
];

const gains = [
  ["Zaman Kazandırır", "Tekrarlayan işlemleri otomatikleştirerek ekibinizin zamanını daha değerli işlere ayırır."],
  ["Hata Oranını Azaltır", "Manuel adımları azaltır, süreçleri standartlaştırır ve kontrol noktaları oluşturur."],
  ["Kontrolü Artırır", "Farklı süreçleri tek sistemde toplar; ne olduğunu ve ne beklediğini görünür kılar."],
  ["Veriyi Anlamlı Kılar", "Raporlama ve analizlerle ham veriyi işletmeniz için kullanılabilir bilgiye dönüştürür."],
  ["Büyümeye Uyum Sağlar", "İhtiyacınız değiştikçe yeni modüller, kullanıcılar ve entegrasyonlarla genişleyebilir."],
];

const process = [
  ["İhtiyacı Anlıyoruz", "İş modelinizi, mevcut süreci, kullanıcıları ve asıl problemi netleştiriyoruz."],
  ["Sistemi Planlıyoruz", "Doğru mimariyi, veri akışını, modülleri ve geliştirme yol haritasını çıkarıyoruz."],
  ["Deneyimi Tasarlıyoruz", "Kullanıcının işi en az adımla yapabilmesi için ekran ve akışları tasarlıyoruz."],
  ["Geliştiriyoruz", "Planlanan sistemi güvenli, sürdürülebilir ve geliştirilebilir bir yapıda hayata geçiriyoruz."],
  ["Test Ediyoruz", "Fonksiyon, kullanım, performans ve kritik akışları yayından önce kontrol ediyoruz."],
  ["Yayına Alıyoruz", "Sistemi gerçek kullanım ortamına taşıyor, son kontrolleri tamamlıyoruz."],
  ["Destekliyoruz", "Teslim sonrası ihtiyaçlara göre sistemi sürdürüyor, geliştiriyor ve yeni özellikler ekliyoruz."],
];

export default function CustomSoftwarePage() {
  const wa = "https://wa.me/905416653499?text=Merhaba%2C%20%C3%96zel%20Yaz%C4%B1l%C4%B1m%20Geli%C5%9Ftirme%20hizmetiniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

  return (
    <main className="serviceDetailPage serviceDetailRefined">
      <header className="detailNav">
        <nav>
          <a href="/#anasayfa">Anasayfa</a>
          <a href="/#ahc-kimdir">AHC Kimdir?</a>
          <a href="/#hizmetler">Hizmetler</a>
          <a href="/#projeler">Tamamlanan Projeler</a>
          <a href="/#iletisim">İletişim</a>
        </nav>
      </header>

      <section className="detailHero detailHeroTextOnly">
        <div className="detailHeroGlow detailHeroGlowA" />
        <div className="detailHeroGlow detailHeroGlowB" />
        <div className="detailHeroCode" aria-hidden="true">
          <span>const solution = design(requirements);</span>
          <span>architecture.scale(&quot;with-your-business&quot;);</span>
          <span>secure.connect(api, data, users);</span>
          <span>{'deploy({ quality: "production" });'}</span>
          <span>while (needs.change) product.evolve();</span>
        </div>
        <div className="detailHeroCopy">
          <span className="detailEyebrow">ÖZEL YAZILIM GELİŞTİRME</span>
          <h1>İşletmenize özel.<br/><em>Gerçek ihtiyaca göre.</em></h1>
          <p>Hazır kalıplara uymak yerine, işinizin nasıl çalıştığını anlayıp size göre şekillenen yazılım sistemleri geliştiriyoruz.</p>
          <div className="detailHeroPrinciples">
            <span><i/> Size özel yapı</span>
            <span><i/> Güvenli altyapı</span>
            <span><i/> Ölçeklenebilir mimari</span>
            <span><i/> Sürdürülebilir geliştirme</span>
          </div>
        </div>
      </section>

      <section className="detailIntro detailSection">
        <div className="detailSectionTitle">
          <span>ÖZEL YAZILIMIN TEMELİ</span>
          <h2>Özel yazılım<br/><em>nedir?</em></h2>
        </div>
        <div className="detailReadingCard">
          <p className="detailLead">Özel yazılım, işletmenizin mevcut işleyişine ve hedeflerine göre sıfırdan tasarlanan bir dijital sistemdir.</p>
          <p>Hazır yazılımlarda işinizi mevcut kalıba uydurmanız gerekir. Özel yazılımda ise sistem; kullanıcılarınız, süreçleriniz, veri yapınız, güvenlik ihtiyacınız ve büyüme planınız dikkate alınarak şekillenir.</p>
          <p>Sonuç yalnızca “bir program” değil; işinizi daha düzenli, izlenebilir ve geliştirilebilir hale getiren size ait bir çalışma altyapısıdır.</p>
          <div className="detailMiniFacts">
            <span>İşinize tam uyum</span><span>Gereksiz özellik yok</span><span>İhtiyaca göre genişler</span><span>Mevcut sistemlere bağlanır</span>
          </div>
        </div>
      </section>

      <section className="detailCapabilities detailSection detailSectionStacked">
        <div className="detailCenteredTitle">
          <span>HİZMET KAPSAMI</span>
          <h2>Neler geliştirebiliriz?</h2>
          <p>Tek bir ürün türüne bağlı değiliz. İhtiyacın gerektirdiği dijital sistemi, doğru parçaları bir araya getirerek oluşturuyoruz.</p>
        </div>
        <div className="capabilityGrid capabilityGridClean">
          {capabilities.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detailGains detailSection detailSectionStacked">
        <div className="detailCenteredTitle">
          <span>İŞLETMEYE KATKISI</span>
          <h2>İşletmenize ne kazandırır?</h2>
          <p>Teknik özelliklerden önce, yazılımın günlük işinize ne değiştirdiğine bakıyoruz.</p>
        </div>
        <div className="gainRail gainRailClean">
          {gains.map(([title, text]) => (
            <article key={title}>
              <div className="gainGlyph" aria-hidden="true"><i/></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detailProcess detailSection detailSectionStacked">
        <div className="detailCenteredTitle">
          <span>ÇALIŞMA SÜRECİ</span>
          <h2>Bir yazılımı nasıl hayata geçiriyoruz?</h2>
          <p>Süreci gereksiz teknik ayrıntıya boğmadan, her aşamada ne yaptığımızı görünür tutuyoruz.</p>
        </div>
        <div className="detailTimeline detailTimelineClean">
          <div className="detailTimelineLine" />
          {process.map(([title, text]) => (
            <article key={title}>
              <div className="detailTimelineNode"><span /></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="detailSystem detailSection detailSystemRefined">
        <div className="detailSectionTitle systemCopy">
          <span>BÜTÜNSEL MİMARİ</span>
          <h2>Sadece yazılım değil.<br/><em>Bir sistem kuruyoruz.</em></h2>
          <p>İyi bir dijital ürün tek bir ekrandan oluşmaz. Kullanıcı deneyiminden veri güvenliğine kadar bütün parçaların birlikte çalışması gerekir.</p>
        </div>
        <div className="systemVisualLive" aria-label="Özel yazılım sistem mimarisi görseli">
          <img src="/software-system-visual.png" alt="Özel yazılım sistem mimarisi ve geliştirme ortamı" />
          <div className="systemVisualGlow" aria-hidden="true" />
          <div className="systemVisualScan" aria-hidden="true" />
          <span className="systemVisualSpark sparkOne" aria-hidden="true" />
          <span className="systemVisualSpark sparkTwo" aria-hidden="true" />
          <span className="systemVisualSpark sparkThree" aria-hidden="true" />
        </div>
      </section>

      <section className="detailTrust detailSection detailSectionStacked">
        <div className="detailCenteredTitle compactTitle">
          <span>SÜREKLİLİK</span>
          <h2>Teslimden sonra da geliştirilebilir.</h2>
          <p>Projenizi kısa vadeli bir teslim işi olarak değil, ihtiyaç oldukça büyüyebilecek bir ürün olarak ele alıyoruz.</p>
        </div>
        <div className="trustStrip">
          <article><h3>Güvenlik</h3><p>Yetkilendirme, veri erişimi ve kritik akışlar sistem mimarisinin parçası olarak ele alınır.</p></article>
          <article><h3>Entegrasyon</h3><p>Mevcut servisleriniz, API’leriniz ve üçüncü taraf sistemlerle kontrollü bağlantılar kurulabilir.</p></article>
          <article><h3>Ölçeklenebilirlik</h3><p>Kullanıcı, veri veya iş yükü büyüdüğünde sistemi genişletebilecek bir yapı hedeflenir.</p></article>
          <article><h3>Bakım & Geliştirme</h3><p>Yeni ihtiyaçlarda sistemi sıfırdan değiştirmek yerine mevcut yapıyı kontrollü biçimde geliştirebiliriz.</p></article>
        </div>
      </section>

      <section className="detailFinalCta">
        <div>
          <span>İLETİŞİM</span>
          <h2>Bir fikriniz veya çözmek istediğiniz bir süreç mi var?</h2>
          <p>Sorularınız, projeniz hakkında görüşmek, teklif almak veya fiyat bilgisi için aşağıdaki butondan WhatsApp üzerinden bizimle iletişime geçebilirsiniz.</p>
        </div>
        <a href={wa} target="_blank" rel="noreferrer" className="detailWhatsapp">
          <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3.2A12.4 12.4 0 0 0 5.4 22l-1.7 6.3 6.4-1.7A12.4 12.4 0 1 0 16 3.2Zm0 22.4c-2 0-3.9-.6-5.5-1.6l-.4-.2-3.8 1 1-3.7-.3-.4A10 10 0 1 1 16 25.6Zm5.5-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.7-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.3 3.4 1.5 3.6c.2.2 2.5 3.8 6 5.3 2.2.9 3.1 1 4.2.9 1.3-.2 1.8-.9 2.1-1.7.3-.8.3-1.5.2-1.7-.1-.3-.3-.4-.6-.5Z"/></svg>
          WhatsApp’tan İletişime Geç <b>→</b>
        </a>
      </section>
    </main>
  );
}
