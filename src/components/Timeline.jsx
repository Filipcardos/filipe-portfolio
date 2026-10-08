import { TIMELINE } from '../data'
import Reveal from './Reveal'

export default function Timeline() {
  return (
    <section id="timeline" className="sec">
      <div className="wrap">
        <Reveal as="h2">Trajetória</Reveal>
        <div className="grid g3">
          {TIMELINE.map((t, i) => (
            <Reveal as="article" className="card" key={t.role} delay={i * 70}>
              <div className="meta"><span>{t.period}</span>{t.current && <span className="st">atual</span>}</div>
              <h3>{t.role}</h3>
              <p className="where">{t.where}</p>
              <p>{t.desc}</p>
              <div className="tags">{t.tags.map(g => <span className="badge" key={g}>{g}</span>)}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
