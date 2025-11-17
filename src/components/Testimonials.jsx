import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mark, UK',
    text: 'Per kelis mėnesius pradėjau ramiai kalbėti kasdienėmis temomis. Pamokos aiškios ir labai praktiškos.',
    rating: 5
  },
  {
    name: 'Agnieszka, PL',
    text: 'Struktūra ir medžiaga puiki. Labiausiai patiko gyvas kalbėjimas ir individualus dėmesys.',
    rating: 5
  },
  {
    name: 'Jonas, LT',
    text: 'Pasiekiau C1 lygį ir sėkmingai išlaikiau egzaminą. Rekomenduoju visiems, kurie siekia rimtų rezultatų.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Mokinių atsiliepimai</h2>
          <p className="mt-3 text-gray-600">Realūs rezultatai ir istorijos iš įvairių šalių.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/5 bg-white/70 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-gray-700 leading-relaxed">“{t.text}”</p>
              <p className="mt-3 text-sm font-medium text-gray-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
