import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Features from './components/Features/Features'
import Courses from './components/Courses/Courses'
import VideoTestimonials from './components/VideoTestimonials/VideoTestimonials'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Features />
          <Courses />
          <VideoTestimonials />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  )
}

export default App
