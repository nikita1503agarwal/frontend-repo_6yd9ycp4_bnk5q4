import { BookOpenCheck, Sparkles, Headphones, Trophy } from 'lucide-react'

const features = [
  {
    icon: BookOpenCheck,
    title: 'Struktūruotos pamokos',
    desc: 'Aiškūs paaiškinimai, užduotys ir medžiaga kiekvienam lygiui nuo A1 iki C2.'
  },
  {
    icon: Headphones,
    title: 'Gyva praktika',
    desc: 'Kalbėjimo, klausymo ir rašymo pratimai su nuolatiniu grįžtamuoju ryšiu.'
  },
  {
    icon: Sparkles,
    title: 'Modernūs įrankiai',
    desc: 'Interaktyvūs testai, įrašai ir skaitmeninės kortelės lengvam įsisavinimui.'
  },
  {
    icon: Trophy,
    title: 'Matomi rezultatai',
    desc: 'Progresas matuojamas CEFR metodika – aiškūs tikslai ir pasiekimai.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 -z-0">
        <div className="absolute right-[-20%] top-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-fuchsia-200/40 via-indigo-100/30 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Mokymosi privalumai</h2>
          <p className="mt-3 text-gray-600">Kruopščiai sukurta programa, kuri padeda greitai ir užtikrintai progresuoti.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl grid place-content-center bg-gradient-to-tr from-indigo-500/10 to-fuchsia-500/10 text-indigo-600">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
