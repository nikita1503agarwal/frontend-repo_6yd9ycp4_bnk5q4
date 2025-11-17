export default function Footer() {
  return (
    <footer className="relative mt-20 py-10 border-t border-black/5 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© 2025 Kalbos Meistrė. Visos teisės saugomos.</p>
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition-colors">Privalumai</a>
          <a href="#levels" className="hover:text-gray-900 transition-colors">Lygiai</a>
          <a href="#testimonials" className="hover:text-gray-900 transition-colors">Atsiliepimai</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Kontaktai</a>
        </nav>
      </div>
    </footer>
  )
}
