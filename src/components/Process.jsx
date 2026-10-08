import Reveal from './Reveal'

const STEPS = [
  { n: '01', t: 'Entender o processo', p: 'Converso com quem executa a tarefa antes de escrever código. A formação em Administração ajuda a achar o gargalo.' },
  { n: '02', t: 'Modelar os dados',    p: 'Desenho tabelas e consultas em SQL para que os dados respondam às perguntas certas.' },
  { n: '03', t: 'Construir a API',     p: 'Backend em Python, com endpoints claros, ligando sistemas que hoje não conversam.' },
  { n: '04', t: 'Automatizar e medir', p: 'Coloco a rotina para rodar sozinha e acompanho quanto trabalho manual ela tira do caminho.' },
]

export default function Process() {
  return (
    <section id="process" className="sec">
      <div className="wrap">
        <Reveal as="h2">Como eu trabalho</Reveal>
        <div className="grid g4">
          {STEPS.map((s, i) => (
            <Reveal as="article" className="card" key={s.n} delay={i * 70}>
              <span className="num">{s.n}</span>
              <h3 className="h3-sm">{s.t}</h3>
              <p className="sm">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
