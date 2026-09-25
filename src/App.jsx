import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Pipeline from './components/Pipeline.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Timeline from './components/Timeline.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import fallback from './data.mjs'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />

      <main className="wrap">
        <Pipeline />
        <Projects projects={fallback} />
        <About />
        <Timeline />
        <Skills />
      </main>

      <div className="contact" id="contact">
        <div className="wrap">
          <Contact />
          <Footer />
        </div>
      </div>

      <BackToTop />
    </>
  )
}