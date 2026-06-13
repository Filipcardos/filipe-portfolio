import { useState, useEffect } from 'react'
import { PROFILE } from '../data'
import '../styles/navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Sobre',      href: '#about'    },
    { label: 'Trajetória', href: '#timeline' },
    { label: 'Projetos',   href: '#projects' },
    { label: 'Stack',      href: '#stack'    },
    { label: 'Contato',    href: '#contact'  },
  ]

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} aria-label="Navegação principal">
      <div className="container navbar__inner">

        {/* Logo / marca */}
        <a href="#home" className="navbar__logo" aria-label="Voltar ao topo">
          fc<span className="navbar__logo-dot">.</span>
        </a>

        {/* Links de navegação */}
        <ul className="navbar__links" role="list">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="navbar__link">{label}</a>
            </li>
          ))}
        </ul>

        {/* CTA disponibilidade */}
        {PROFILE.available && (
          <a href="#contact" className="navbar__cta">
            <span className="navbar__cta-dot" aria-hidden="true" />
            Disponível
          </a>
        )}

      </div>
    </nav>
  )
}
