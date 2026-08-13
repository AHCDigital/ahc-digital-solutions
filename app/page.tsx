import ContactTerminalForm from "./ContactTerminalForm";
import MotionSystem from "./MotionSystem";
import ServicesShowcase from "./ServicesShowcase";
import AutoPlayVideo from "./AutoPlayVideo";

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
        <a href="#ahc-kimdir">AHC Kimdir?</a>
        <a href="#hizmetler">Hizmetler</a>
        <a href="#projeler">Tamamlanan Projeler</a>
        <a href="#iletisim">İletişim</a>
      </nav>
      <a className="navCta" href="#iletisim">Projenizi Konuşalım <i>↗</i></a>
    </header>

    <section className="hero" id="anasayfa">
      <AutoPlayVideo src="/ahc-hero.mp4" className="heroVideo" aria-label="AHC Digital Solutions tanıtım videosu" />
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
              <AutoPlayVideo
                className="portraitVideo"
                src={p.video}
                aria-label={`${p.title} proje videosu`}
              />
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
            <p className="indent"><b className="blue">client</b>: <span className="string">"fikriniz"</span>,</p>
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
