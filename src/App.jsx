import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Levels from './components/Levels'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/60">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Levels />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
