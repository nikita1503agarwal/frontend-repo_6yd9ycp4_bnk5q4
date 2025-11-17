import { Menu, Globe2 } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 grid place-content-center text-white shadow-md shadow-indigo-500/20">
            <Globe2 className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">Kalbos Meistrė</p>
            <p className="text-xs text-gray-500">Lithuanian Language Coaching</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition-colors">Privalumai</a>
          <a href="#levels" className="hover:text-gray-900 transition-colors">Lygiai</a>
          <a href="#testimonials" className="hover:text-gray-900 transition-colors">Atsiliepimai</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Susisiekti</a>
        </nav>
        <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
          <Menu className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </header>
  )
}
