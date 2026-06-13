import { PROFILE } from '../data'
import '../styles/contact.css'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} · Filipe Cardoso · BA — Brasil
        </p>
        <nav className="footer__nav" aria-label="Links rodapé">
          <a href={PROFILE.github}   target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={`mailto:${PROFILE.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  )
}
