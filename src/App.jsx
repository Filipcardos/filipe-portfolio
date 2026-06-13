import { motion } from 'framer-motion'

import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Stack    from './components/Stack'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

// animação padrão para seções
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: 'easeOut'
    }
  })
}

export default function App() {
  return (
    <>
      <Navbar />

      <main id="main-content">

        {/* HERO */}
        <motion.section
          initial="hidden"
          animate="visible"
          custom={0}
          variants={sectionVariant}
        >
          <Hero />
        </motion.section>

        {/* TRAJETÓRIA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={1}
          variants={sectionVariant}
        >
          <Timeline />
        </motion.section>

        {/* PROJETOS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={2}
          variants={sectionVariant}
        >
          <Projects />
        </motion.section>

        {/* STACK */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={3}
          variants={sectionVariant}
        >
          <Stack />
        </motion.section>

        {/* CONTATO */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          custom={4}
          variants={sectionVariant}
        >
          <Contact />
        </motion.section>

      </main>

      <Footer />
    </>
  )
}