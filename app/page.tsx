import ContactTerminalForm from "./ContactTerminalForm";
import MotionSystem from "./MotionSystem";

const capabilities = [
  {
    no: "01",
    title: "Özel Yazılım",
    code: "build.for(yourBusiness)",
    text: "Hazır kalıplara bağlı kalmadan, ihtiyacınıza göre şekillenen yazılım sistemleri geliştiriyoruz. Fikrinizi anlatın; kapsamını, kullanım senaryolarını ve doğru teknik yaklaşımı birlikte değerlendirelim.",
  },
  {
    no: "02",
    title: "Android Uygulamaları",
    code: "android.create(nativeExperience)",
    text: "Android cihazlar için hızlı, akıcı ve güçlü kullanıcı deneyimleri tasarlıyor; arayüzden uygulama mimarisine kadar ürünün tamamını geliştiriyoruz.",
  },
  {
    no: "03",
    title: "Web Tasarım & Geliştirme",
    code: "web.launch(brandExperience)",
    text: "Markanızın dijital kimliğini yansıtan modern kurumsal siteler, ürün sayfaları ve özel web deneyimleri tasarlıyor; performans ve mobil uyumluluğu merkeze alıyoruz.",
  },
  {
    no: "04",
    title: "Yönetim Panelleri",
    code: "dashboard.control(business)",
    text: "Operasyonunuzu tek noktadan yönetebileceğiniz özel admin panelleri, kullanıcı yönetimi, raporlama ekranları ve işletmenize özel kontrol sistemleri geliştiriyoruz.",
  },
  {
    no: "05",
    title: "Bulut & Sistem Entegrasyonları",
    code: "systems.connect(securely)",
    text: "Uygulama, web ve yönetim katmanlarını güvenli bir altyapıda bir araya getiriyor; veri akışlarını ve servis entegrasyonlarını projenin ihtiyaçlarına göre kurguluyoruz.",
  },
  {
    no: "06",
    title: "Google SEO",
    code: "visibility.optimize(google)",
    text: "Teknik SEO, sayfa yapısı, içerik mimarisi ve performans çalışmalarını bütüncül ele alarak markanızın Google aramalarındaki görünürlüğünü sürdürülebilir biçimde güçlendirmeyi hedefliyoruz.",
  },
];

const projects = [
  { title: "AHC Location", video: "/ahc-location.mp4" },
  { title: "AHC Auth", video: "/ahc-auth.mp4" },
];

const processSteps = [
  {
    no: "01",
    title: "Keşif",
    code: "collect(requirements);",
    text: "İhtiyacı, hedefi ve gerçek kullanım senaryosunu netleştiriyoruz.",
  },
  {
    no: "02",
    title: "Mimari",
    code: "design(systemArchitecture);",
    text: "Doğru teknoloji yapısını, veri akışını ve ürün iskeletini kuruyoruz.",
  },
  {
    no: "03",
    title: "Geliştirme",
    code: "build(product);",
    text: "Ürünü gerçek kullanım için geliştiriyor, test ediyor ve iyileştiriyoruz.",
  },
  {
    no: "04",
    title: "Yayın",
    code: "deploy(production);",
    text: "Son kontrolleri tamamlıyor, ürünü yayına alıyor ve sürdürüyoruz.",
  },
];

export default function Home() {
  return <main><MotionSystem />
    <header className="navShell">
      <nav>
        <a href="#anasayfa">Anasayfa</a>
        <a href="#hizmetler">Hizmetler</a>
        <a href="#projeler">Projeler</a>
        <a href="#teknoloji">Teknoloji</a>
        <a href="#iletisim">İletişim</a>
      </nav>
      <a className="navCta" href="#iletisim">Projenizi Konuşalım <i>↗</i></a>
    </header>

    <section className="hero" id="anasayfa">
      <video autoPlay muted loop playsInline preload="auto" className="heroVideo">
        <source src="/ahc-hero.mp4" type="video/mp4" />
      </video>
      <div className="heroTopFade"/><div className="heroBottomFade"/><div className="heroEdge"/>
      <a className="scrollCue" href="#hizmetler"><small>KEŞFET</small><span>↓</span></a>
    </section>

    <section className="statement" id="teknoloji">
      <div className="orbit orb1"/><div className="orbit orb2"/>
      <p className="kicker"><span/> AHC DIGITAL SOLUTIONS</p>
      <h1>Fikirleri <em>çalışan teknolojiye</em><br/>dönüştürüyoruz.</h1>
      <p className="statementLead">Kod, tasarım ve sistem mühendisliğini tek bir deneyimde birleştiriyor; işletmeler için yalnızca görünen arayüzler değil, arkasında güçlü bir teknoloji çalışan dijital ürünler geliştiriyoruz.</p>
      <div className="techRail"><span>ANDROID</span><i/> <span>WEB</span><i/> <span>BULUT</span><i/> <span>SEO</span><i/> <span>ÖZEL YAZILIM</span></div>
    </section>

    <section className="aboutAHC" id="hizmetler">
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

      <div className="capabilityConsole">
        <div className="consoleBar">
          <div className="consoleDots"><i/><i/><i/></div>
          <span>ahc://capabilities/business_solutions</span>
          <b><i/> SİSTEM HAZIR</b>
        </div>

        <div className="capabilityGrid">
          {capabilities.map((item) =>
            <article className="capabilityItem" key={item.no}>
              <div className="capabilityTop">
                <code>{item.code}</code>
                <i/>
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          )}
        </div>

        <div className="customProject">
          <div className="customProjectCode">
            <small>PROJENİZ HAZIR BİR KATEGORİYE SIĞMIYORSA</small>
            <strong>fikriniz <i>→</i> analiz <i>→</i> mimari <i>→</i> çalışan ürün</strong>
          </div>
          <div>
            <h3>Fikrinizi anlatın.<br/><em>Birlikte şekillendirelim.</em></h3>
            <p>Standart bir hizmet başlığına sığmayan dijital fikirler için de çalışıyoruz. İhtiyacınızı paylaşın; size özel geliştirilebilecek çözümü birlikte değerlendirelim.</p>
            <a href="#iletisim">PROJENİZİ KONUŞALIM <span>↗</span></a>
          </div>
        </div>
      </div>
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

    <section className="process processV5">
      <div className="processIntro">
        <p className="kicker"><span/> NASIL ÇALIŞIYORUZ</p>
        <h2>Kod gibi.<br/><em>Net, izlenebilir, sistemli.</em></h2>
        <p>Dört aşamalı çalışma düzenimiz, projenin ilk görüşmeden canlı yayına kadar kontrollü ve takip edilebilir ilerlemesini sağlar.</p>
      </div>

      <div className="codeWorkspace">
        <div className="editorTop">
          <div className="traffic"><span/><span/><span/></div>
          <div className="editorPath">ahc://workflow/product_pipeline.ts</div>
          <div className="editorState"><span/> ÇALIŞIYOR</div>
        </div>

        <div className="editorBody">
          <div className="codeContent" aria-hidden="true">
            <p><b className="pink">const</b> <b className="cyan">AHCWorkflow</b> = <span>{"{"}</span></p>
            <p className="indent"><b className="blue">client</b>: <span className="string">"fikrinizi"</span>,</p>
            <p className="indent"><b className="blue">objective</b>: <span className="string">"çalışan dijital ürün"</span>,</p>
            <p className="indent"><b className="blue">pipeline</b>: [</p>
            <p className="indent2"><span className="function">discover</span>(),</p>
            <p className="indent2"><span className="function">architect</span>(),</p>
            <p className="indent2"><span className="function">develop</span>(),</p>
            <p className="indent2"><span className="function">deploy</span>()</p>
            <p className="indent">],</p>
            <p className="indent"><b className="blue">status</b>: <span className="string">"yayina_hazir"</span></p>
            <p><span>{"}"}</span>;</p>
            <p>&nbsp;</p>
            <p><span className="comment">// fikir → mimari → kod → canlı sistem</span></p>
            <p><span className="function">run</span>(<b className="cyan">AHCWorkflow</b>); <span className="caret">▌</span></p>
          </div>

          <div className="runtimePanel">
            <small>ÇALIŞMA DURUMU</small>
            <strong>AHC ÇEKİRDEK</strong>
            <div><span>DERLEME</span><b>HAZIR</b></div>
            <div><span>GÜVENLİK</span><b>AKTİF</b></div>
            <div><span>YAYIN</span><b>ÇEVRİMİÇİ</b></div>
          </div>
        </div>

        <div className="pipeline">
          <div className="pipelineLine"><i/></div>
          {processSteps.map((step, idx) =>
            <article className="pipelineStep" key={step.no}>
              <div className="pipelineNode">
                <i/>
              </div>
              <div className="pipelineCard">
                <small>{step.code}</small>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              {idx < processSteps.length - 1 && <div className="pipelinePulse"/>}
            </article>
          )}
        </div>
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

        <div className="contactTrust">
          <div>
            <strong>Fikrinizi anlatın</strong>
            <small>Kısa bir mesaj yeterli.</small>
          </div>
          <i/>
          <div>
            <strong>Doğrudan görüşelim</strong>
            <small>Mesajınız WhatsApp'a taşınır.</small>
          </div>
        </div>
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
          <a href="#hizmetler">AHC Kimdir?</a><a href="#projeler">Projeler</a><a href="#teknoloji">Teknoloji</a><a href="#iletisim">İletişim</a>
        </div>
        <a className="footerTop" href="#anasayfa">YUKARI DÖN <span>↑</span></a>
      </div>
      <div className="footerLine"/>
      <div className="footerBottom"><p>© 2026 AHC Digital Solutions. Tüm hakları saklıdır.</p><span>Türkiye · Dijital ürün ve yazılım geliştirme</span></div>
    </footer>
  </main>
}
