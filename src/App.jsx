import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import About    from './components/About'
import Timeline from './components/Timeline'
import Process  from './components/Process'
import Projects from './components/Projects'
import Stack    from './components/Stack'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Timeline />
        <Process />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
