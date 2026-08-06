export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#05070d] px-6 text-white">
      {/* Arka plan ışıkları */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute bottom-[-220px] right-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70 backdrop-blur-xl">
          AHC Digital Solutions
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-8xl">
          Dijital geleceğinizi
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            birlikte inşa ediyoruz.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
          Modern web siteleri, mobil uygulamalar ve işletmelere özel dijital
          çözümler geliştiriyoruz.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-sm text-white/70 backdrop-blur-xl">
          Yeni web sitemiz hazırlanıyor.
        </div>

        <footer className="mt-20 text-sm text-white/35">
          © 2026 AHC Digital Solutions
        </footer>
      </section>
    </main>
  );
}