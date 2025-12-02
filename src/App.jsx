import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import Courses from './components/Courses/Courses'
import VideoTestimonials from './components/VideoTestimonials/VideoTestimonials'
import Testimonials from './components/Testimonials/Testimonials'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Features />
          <Courses />
          <VideoTestimonials />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
