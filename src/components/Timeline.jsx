import { TIMELINE } from '../data'
import '../styles/timeline.css'

export default function Timeline() {
  return (
    <section id="timeline" className="section" aria-labelledby="timeline-heading">
      <div className="container">

        {/* Cabeçalho da seção */}
        <header className="section__header">
          <span className="section__num" aria-hidden="true">§ 02</span>
          <h2 id="timeline-heading" className="section__title">
            Carreira / <em>Trajetória</em>
          </h2>
          <span className="section__line" aria-hidden="true" />
        </header>

        {/* Lista de entradas */}
        <ol className="timeline" aria-label="Histórico de carreira">
          {TIMELINE.map((item, i) => (
            <li key={i} className={`timeline__item${item.current ? ' timeline__item--current' : ''}`}>

              {/* Coluna de período */}
              <div className="timeline__period">
                <time className="timeline__date">{item.period}</time>
                <span className="timeline__dot" aria-hidden="true" />
              </div>

              {/* Coluna de conteúdo */}
              <div className="timeline__body">
                <h3 className="timeline__role">{item.role}</h3>
                <p  className="timeline__where">{item.where}</p>
                <p  className="timeline__desc">{item.desc}</p>
                <ul className="timeline__tags" aria-label="Tecnologias">
                  {item.tags.map(tag => (
                    <li key={tag} className="timeline__tag">{tag}</li>
                  ))}
                </ul>
              </div>

            </li>
          ))}
        </ol>

      </div>
    </section>
  )
}
