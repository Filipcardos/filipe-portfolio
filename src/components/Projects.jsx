import { PROJECTS } from '../data'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects" className="sec">
      <div className="wrap">
        <Reveal as="h2">Projetos</Reveal>
        <div className="grid g2">
          {PROJECTS.map((p, i) => (
            <Reveal as="article" className="card" key={p.id} delay={(i % 2) * 70}>
              <div className="meta"><span>{p.type}</span><span className="st">{p.status}</span></div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="tags">{p.tags.map(t => <span className="badge" key={t}>{t}</span>)}</div>
              <div className="links">
                <a className="tl" href={p.github} target="_blank" rel="noreferrer">GitHub</a>
                {p.live && <a className="tl" href={p.live} target="_blank" rel="noreferrer">Online</a>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
