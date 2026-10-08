import { STACK } from '../data'
import Reveal from './Reveal'

export default function Stack() {
  return (
    <section id="stack" className="sec">
      <div className="wrap">
        <Reveal as="h2">Stack</Reveal>
        <div className="grid g4">
          {STACK.map((g, i) => (
            <Reveal as="article" className="card" key={g.group} delay={i * 70}>
              <span className="num num--mute">{g.group}</span>
              <div className="tags tags--flat">
                {g.items.map(it => (
                  <span className={`badge${it.highlight ? ' hl' : ''}`} key={it.name}>{it.name}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
