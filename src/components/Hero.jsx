import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full bg-gradient-to-b from-indigo-200/60 via-blue-100/40 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/70 border border-black/5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Lengva. Modernu. Įkvepia.
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            Išmok lietuvių kalbą su pasitikėjimu
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Asmeninės pamokos, aiški struktūra ir praktika, kurią pritaikysite iš karto. Aukšto lygio žinios ir lengvas mokymosi kelias – be streso.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 font-medium shadow-sm hover:bg-gray-800 transition-colors">
              Registruotis į konsultaciją
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl bg-white text-gray-900 px-5 py-3 font-medium shadow-sm border border-black/5 hover:bg-gray-50 transition-colors">
              Kaip tai veikia
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-900">500+ mokinių</p>
              <p>iš 30+ šalių</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">CEFR metodika</p>
              <p>A1—C2 lygiai</p>
            </div>
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] lg:h-[640px] rounded-2xl overflow-hidden bg-white/40 border border-black/5 shadow-inner">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
