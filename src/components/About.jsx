import { PROFILE } from '../data'
import Reveal from './Reveal'

const Key = ({ v }) => <span className="k">{`"${v}"`}</span>
const Str = ({ v }) => <span className="s">{`"${v}"`}</span>

const LINES = [
  <>{'{'}</>,
  <>{'  '}<Key v="foco" />: [<Str v="backend python" />, <Str v="Software Engineer" />],</>,
  <>{'  '}<Key v="stack" />: [<Str v="python" />, <Str v="fastapi" />, <Str v="sql" />],</>,
  <>{'  '}<Key v="formação" />: [<Str v="Análise e Desenvolvimento de Sistemas" />, <Str v="Administração" />],</>,
  <>{'  '}<Key v="local" />: <Str v="Vitória da Conquista, BA" />,</>,
  <>{'  '}<Key v="modelo" />: <Str v="remoto" />,</>,
  <>{'  '}<Key v="status" />: <span className="g">{'"disponível"'}</span></>,
  <>{'}'}</>,
]

export default function About() {
  return (
    <section id="about" className="sec">
      <div className="wrap two">
        <Reveal>
          <h2>Código para resolver problema.</h2>
          {PROFILE.bio.map((t, i) => <p className="lead" key={i}>{t}</p>)}
        </Reveal>
        <Reveal className="win" role="img" aria-label="Resumo do perfil em formato de resposta de API" delay={120}>
          <div className="bar">
            <i style={{ background: '#ff6465' }} /><i style={{ background: '#ffca16' }} /><i style={{ background: '#3ad389' }} />
            <span style={{ marginLeft: 8 }}>GET /filipe</span>
            <b>200 OK</b>
          </div>
          <pre>
            {LINES.map((l, i) => (
              <span className="ln" key={i} style={{ animationDelay: `${0.2 + i * 0.2}s` }}>{l}</span>
            ))}
          </pre>
        </Reveal>
      </div>
    </section>
  )
}
