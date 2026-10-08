import { PROFILE } from '../data'
import Cube from './Cube'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Apresentação">
      <div className="wrap hero__grid">
        <div>
          {PROFILE.available && (
            <a className="pill fx" href="#contact" style={{ animationDelay: '.05s' }}>
              <i />Aberto a vagas remotas <span aria-hidden="true">›</span>
            </a>
          )}
          <h1 className="fx" style={{ animationDelay: '.15s' }}>{PROFILE.name}</h1>
          <p className="lead fx" style={{ animationDelay: '.3s' }}>
            Backend em Python, APIs e automação. Escrevo código para que ninguém precise repetir tarefa manual.
          </p>
          <div className="cta fx" style={{ animationDelay: '.45s' }}>
            <a className="btn" href="#projects">Ver projetos</a>
            <a className="tl" href="#contact">Falar comigo</a>
          </div>
        </div>
        <div className="fx" style={{ animationDelay: '.3s' }}>
          <Cube />
        </div>
      </div>
    </section>
  )
}
