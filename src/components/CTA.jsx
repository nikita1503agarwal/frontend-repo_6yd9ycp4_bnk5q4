export default function CTA() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-black/5 bg-gradient-to-tr from-indigo-600 via-violet-600 to-fuchsia-600 p-8 sm:p-12 text-white shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Pradėkime Jūsų kelionę</h3>
              <p className="mt-3 text-white/80">
                Užpildykite trumpą formą ir per 24 val. susisieksime dėl nemokamos konsultacijos.
              </p>
            </div>
            <form className="grid sm:grid-cols-2 gap-3">
              <input type="text" placeholder="Vardas" className="w-full rounded-xl bg-white/10 placeholder-white/60 border border-white/20 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
              <input type="email" placeholder="El. paštas" className="w-full rounded-xl bg-white/10 placeholder-white/60 border border-white/20 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
              <input type="text" placeholder="Lygis (pvz., A2)" className="w-full rounded-xl bg-white/10 placeholder-white/60 border border-white/20 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30" />
              <button type="button" className="w-full rounded-xl bg-white text-gray-900 font-semibold px-4 py-3 hover:bg-white/90 transition-colors">
                Siųsti užklausą
              </button>
              <p className="sm:col-span-2 text-xs text-white/70">Pateikdami duomenis sutinkate su privatumo politika.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
