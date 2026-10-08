import { PROFILE } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <Reveal as="h2">Vamos conversar</Reveal>
        <Reveal className="contact" delay={80}>
          <div>
            <img src={PROFILE.photo} alt={`Foto de ${PROFILE.name}`} />
            <p className="lead lead--flush">Busco uma vaga de Analista de Sistemas ou Desenvolvedor Backend, em regime remoto.</p>
            <a className="mail" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          </div>
          <div className="row">
            <a className="btn" href={`mailto:${PROFILE.email}`}>Enviar e-mail</a>
            <a className="tl" href={PROFILE.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="tl" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="tl" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
