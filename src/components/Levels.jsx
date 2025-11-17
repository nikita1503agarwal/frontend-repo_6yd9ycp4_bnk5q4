const levels = [
  { level: 'A1', title: 'Pradedantiesiems', desc: 'Pagrindinės frazės, abėcėlė, kasdienės situacijos.' },
  { level: 'A2', title: 'Pagrindai', desc: 'Didesnis žodynas, paprastos istorijos ir laiškai.' },
  { level: 'B1', title: 'Tarpinis', desc: 'Laisvesnis bendravimas, supratimas įvairiomis temomis.' },
  { level: 'B2', title: 'Aukštesnis', desc: 'Įtikinamas argumentavimas, žiniasklaidos analizė.' },
  { level: 'C1', title: 'Pažengęs', desc: 'Akademinė kalba, profesionali komunikacija.' },
  { level: 'C2', title: 'Meistrystė', desc: 'Gimtakalbio lygis, subtilybės ir niuansai.' },
]

export default function Levels() {
  return (
    <section id="levels" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Lygiai pagal CEFR</h2>
          <p className="mt-3 text-gray-600">Aiškus mokymosi kelias nuo pirmų žingsnių iki meistrystės.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {levels.map((l) => (
            <div key={l.level} className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-baseline justify-between">
                <span className="text-3xl font-semibold text-gray-900">{l.level}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-900 text-white">CEFR</span>
              </div>
              <p className="mt-1 font-medium text-gray-800">{l.title}</p>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
