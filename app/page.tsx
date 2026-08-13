import ContactTerminalForm from "./ContactTerminalForm";
import MotionSystem from "./MotionSystem";
import ServicesShowcase from "./ServicesShowcase";

const projects = [
  { title: "AHC Location", video: "/ahc-location.mp4" },
  { title: "AHC Auth", video: "/ahc-auth.mp4" },
];

export default function Home() {
  return <main><MotionSystem />
    <header className="navShell">
      <nav>
        <a href="#anasayfa">Anasayfa</a>
        <a href="#ahc-kimdir">AHC Kimdir?</a>
        <a href="#hizmetler">Hizmetler</a>
        <a href="#projeler">Tamamlanan Projeler</a>
        <a href="#iletisim">İletişim</a>
      </nav>
      <a className="navCta" href="#iletisim">Projenizi Konuşalım <i>↗</i></a>
    </header>

    <section className="hero" id="anasayfa">
      <video autoPlay muted loop playsInline preload="auto" className="heroVideo">
        <source src="/ahc-hero.mp4" type="video/mp4" />
      </video>
      <div className="heroTopFade"/><div className="heroBottomFade"/><div className="heroEdge"/>
      <a className="scrollCue" href="#ahc-kimdir"><small>KEŞFET</small><span>↓</span></a>
    </section>

    <section className="aboutAHC" id="ahc-kimdir">
      <div className="aboutAura aboutAuraOne"/><div className="aboutAura aboutAuraTwo"/>
      <div className="aboutHeader">
        <div>
          <p className="kicker"><span/> AHC DIGITAL SOLUTIONS</p>
          <h2>AHC <em>Kimdir?</em></h2>
        </div>
        <div className="aboutManifesto">
          <span className="manifestoCode">{"<"}AHC / DIGITAL SOLUTIONS{">"}</span>
          <p>AHC Digital Solutions; işletmeler ve markalar için özel yazılım, Android uygulamaları, web teknolojileri, yönetim sistemleri ve dijital görünürlük çözümleri geliştiren bir teknoloji markasıdır.</p>
          <p>Tek bir hizmet alanına bağlı kalmadan, dijital bir ürünün ihtiyaç duyduğu farklı teknoloji katmanlarını aynı çatı altında ele alıyoruz.</p>
        </div>
      </div>
    </section>

    <section className="servicesSection" id="hizmetler">
      <ServicesShowcase />
    </section>

    <section className="projects projectsV5" id="projeler">
      <div className="projectOnlyTitle">
        <h2>TAMAMLANAN PROJELER</h2>
        <i/>
      </div>

      <div className="projectShowcase">
        {projects.map((p) =>
          <article className="projectPortrait" key={p.title}>
            <div className="projectPortraitHead">
              <h3>{p.title}</h3>
              <i/>
            </div>

            <div className="portraitFrame">
              <div className="portraitGlow"/>
              <div className="portraitGrid"/>
              <div className="portraitScan"/>
              <video
                className="portraitVideo"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${p.title} proje videosu`}
              >
                <source src={p.video} type="video/mp4" />
              </video>
              <div className="portraitGlass"/>
            </div>
          </article>
        )}
      </div>
    </section>

    <section className="contact contactV7 contactV105" id="iletisim">
      <div className="contactGrid"/><div className="contactGlow"/>

      <div className="contactCopy contactCopyV105">
        <p className="kicker"><span/> İLETİŞİM</p>
        <h2>Aklınızdaki projeyi<br/><em>bize yazın.</em></h2>
        <p>
          Yeni bir ürün, mevcut sisteminiz için özel bir geliştirme ya da dijital tarafta
          çözmek istediğiniz bir ihtiyaç varsa birkaç cümleyle anlatın. Mesajınızı doğrudan
          WhatsApp görüşmesine aktaralım.
        </p>

      </div>

      <div className="contactTerminal contactTerminalV105">
        <div className="contactTerminalTop">
          <span>ahc://iletisim/yeni_proje</span>
          <i>● BAĞLANTI AÇIK</i>
        </div>

        <div className="contactTerminalIntro contactTerminalIntroV105">
          <span className="terminalPrompt">AHC&gt;</span>
          <strong>Yeni proje mesajı</strong>
          <small>// aşağıdaki alana projenizi birkaç cümleyle yazın</small>
        </div>

        <ContactTerminalForm />
      </div>
    </section>

    <footer className="footerV7">
      <div className="footerMain">
        <div className="footerBrand"><strong>AHC</strong><span>DIGITAL SOLUTIONS</span></div>
        <div className="footerNav">
          <a href="#ahc-kimdir">AHC Kimdir?</a><a href="#hizmetler">Hizmetler</a><a href="#projeler">Tamamlanan Projeler</a><a href="#iletisim">İletişim</a>
        </div>
        <a className="footerTop" href="#anasayfa">YUKARI DÖN <span>↑</span></a>
      </div>
      <div className="footerLine"/>
      <div className="footerBottom"><p>© 2026 AHC Digital Solutions. Tüm hakları saklıdır.</p><span>Türkiye · Dijital ürün ve yazılım geliştirme</span></div>
    </footer>
  </main>
}
