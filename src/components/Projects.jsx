import { PROJECTS } from '../data'
import '../styles/projects.css'

function ProjectCard({ project }) {
  const { type, name, desc, metric, tags, github, live, featured, status } = project

  return (
    <article className={`proj-card${featured ? ' proj-card--featured' : ''}`}>

      {/* Topo: tipo e status */}
      <div className="proj-card__top">
        <span className="proj-card__type">{type}</span>
        {status === 'público' && (
          <span className="proj-card__status">
            <span className="proj-card__status-dot" aria-hidden="true" />
            {status}
          </span>
        )}
      </div>

      {/* Nome */}
      <h3 className="proj-card__name">{name}</h3>

      {/* Descrição */}
      <p className="proj-card__desc">{desc}</p>

      {/* Métrica em destaque (monoespaçado) */}
      <p className="proj-card__metric">{metric}</p>

      {/* Tags de tecnologia */}
      <ul className="proj-card__tags" aria-label="Tecnologias utilizadas">
        {tags.map(tag => (
          <li key={tag} className="proj-card__tag">{tag}</li>
        ))}
      </ul>

      {/* Links */}
      <div className="proj-card__links">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link proj-link--primary"
            aria-label={`Ver ${name} no GitHub`}
          >
            → GitHub
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-link"
            aria-label={`Ver ${name} ao vivo`}
          >
            Demo ao vivo
          </a>
        )}
      </div>

    </article>
  )
}

export default function Projects() {
  const featured    = PROJECTS.filter(p =>  p.featured)
  const secondary   = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container">

        {/* Cabeçalho */}
        <header className="section__header">
          <span className="section__num" aria-hidden="true">§ 03</span>
          <h2 id="projects-heading" className="section__title">
            Projetos / <em>O que construo</em>
          </h2>
          <span className="section__line" aria-hidden="true" />
        </header>

        {/* Grid de projetos */}
        <div className="projects-grid">

          {/* Projetos em destaque — largura total */}
          {featured.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}

          {/* Projetos secundários — grid de 2 colunas */}
          {secondary.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}

        </div>

        {/* Link para o GitHub completo */}
        <div className="projects-footer">
          <a
            href="https://github.com/Filipcardos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Ver todos os repositórios →
          </a>
        </div>

      </div>
    </section>
  )
}
