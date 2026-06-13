import { PROFILE } from '../data'
import '../styles/contact.css'

export default function Contact() {
  const links = [
    {
      icon:     '✉',
      platform: 'Email',
      handle:   PROFILE.email,
      href:     `mailto:${PROFILE.email}`,
    },
    {
      icon:     '💬',
      platform: 'WhatsApp',
      handle:   '+55 (77) 99830-6756',
      href:     PROFILE.whatsapp,
    },
    {
      icon:     'in',
      platform: 'LinkedIn',
      handle:   '/in/filipe-cardoso-919532205',
      href:     PROFILE.linkedin,
    },
    {
      icon:     '⌥',
      platform: 'GitHub',
      handle:   'github.com/Filipcardos',
      href:     PROFILE.github,
    },
  ]

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__inner">

          {/* Esquerda — chamada */}
          <div className="contact__left">

            {/* Badge de disponibilidade */}
            {PROFILE.available && (
              <div className="contact__avail" aria-label="Disponível para oportunidades">
                <span className="contact__avail-dot" aria-hidden="true" />
                Disponível para oportunidades
              </div>
            )}

            <h2 id="contact-heading" className="contact__title">
              Vamos conversar sobre<br />
              <em>soluções?</em>
            </h2>

            <p className="contact__sub">
              Aberto a vagas de Backend Python, Analista de Sistemas,
              Engenharia de Dados ou projetos freelance.
              Respondo em poucas horas.
            </p>

            <div className="contact__ctas">
              <a href={`mailto:${PROFILE.email}`} className="btn btn--primary">
                Enviar e-mail
              </a>
              <a
                href={PROFILE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                WhatsApp
              </a>
            </div>

          </div>

          {/* Direita — links de contato */}
          <ul className="contact__links" role="list" aria-label="Formas de contato">
            {links.map(({ icon, platform, handle, href }) => (
              <li key={platform}>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label={`${platform}: ${handle}`}
                >
                  <span className="contact-link__icon" aria-hidden="true">{icon}</span>
                  <span className="contact-link__info">
                    <span className="contact-link__platform">{platform}</span>
                    <span className="contact-link__handle">{handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  )
}
