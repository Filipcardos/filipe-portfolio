import { useState } from 'react'
import { PROFILE } from '../data'

const LINKS = [
  { label: 'Sobre',      href: '#about'    },
  { label: 'Trajetória', href: '#timeline' },
  { label: 'Processo',   href: '#process'  },
  { label: 'Projetos',   href: '#projects' },
  { label: 'Stack',      href: '#stack'    },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="brand" href="#home" aria-label={`${PROFILE.name}, voltar ao topo`}>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <rect x=".75" y=".75" width="30.5" height="30.5" rx="7" fill="#000" stroke="#292d30" strokeWidth="1.5" />
            <text x="16" y="21.6" textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontWeight="600" fontSize="15" letterSpacing="-.6" fill="#fff">FC</text>
          </svg>
        </a>

        <nav aria-label="Principal" className={`nav__links${open ? ' open' : ''}`}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>

        <div className="nav__end">
          <a className="btn" href="#contact">Contato</a>
          <button className="nav__toggle" type="button" aria-expanded={open} aria-label="Abrir menu" onClick={() => setOpen(o => !o)}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
