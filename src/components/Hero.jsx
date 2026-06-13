import { PROFILE } from '../data'
import '../styles/hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Apresentação">
      <div className="container hero__inner">

        {/* Coluna esquerda — texto */}
        <div className="hero__content">

          {/* Eyebrow */}
          <p className="hero__eyebrow">
            Portfólio · 2026
            <span className="hero__eyebrow-sep" aria-hidden="true" />
            Analista · Developer · Builder
          </p>

          {/* Nome / título principal */}
          <h1 className="hero__title">
            Filipe<br />
            <em className="hero__title-em">Cardoso</em>
          </h1>

          {/* Subtítulo de papéis */}
          <p className="hero__role">{PROFILE.role}</p>

          {/* Bio curta */}
          <p className="hero__bio">
            Discente de <strong>Análise e Desenvolvimento de Sistemas</strong>, focado em transformar 
            desafios complexos em <strong>APIs eficientes</strong> e processos automatizados. 
            Transformo tarefas manuais em fluxos inteligentes, integrando sistemas e extraindo 
            valor real dos dados. Busco oportunidades como <strong>Analista de Sistemas ou 
            Desenvolvedor Backend</strong> para aplicar soluções escaláveis e funcionais.
          </p>

          {/* CTAs */}
          <div className="hero__ctas">
            <a href="#projects" className="btn btn--primary">
              Ver projetos
            </a>
            <a href="#contact" className="btn btn--ghost">
              Vamos conversar
            </a>
          </div>

          {/* Linha de status inferior */}
          <div className="hero__status">
            <span className="hero__status-loc">📍 {PROFILE.location}</span>
            <span className="hero__status-sep" aria-hidden="true" />
            <span className="hero__status-info">Análise e Desenvolvimento de Sistemas · Bacharel em Administração</span>
          </div>

        </div>

        {/* Coluna direita — foto */}
        <div className="hero__photo-wrap" aria-hidden="true">
          <div className="hero__photo">
            {PROFILE.photo ? (
              <img
                src={PROFILE.photo}
                alt={`Foto de ${PROFILE.name}`}
                className="hero__photo-img"
              />
            ) : (
              /* Placeholder até adicionar a foto real */
              <div className="hero__photo-placeholder">
                <span className="hero__photo-initials">FC</span>
                <span className="hero__photo-hint">Adicione sua foto em src/data.js</span>
              </div>
            )}
          </div>

          {/* Badge de disponibilidade sobre a foto */}
          {PROFILE.available && (
            <div className="hero__photo-badge">
              <span className="hero__photo-badge-text">Online</span>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
