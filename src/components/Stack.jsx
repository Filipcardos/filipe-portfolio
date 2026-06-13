import { STACK } from '../data'
import '../styles/stack.css'

// ÍCONES
import {
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGithub,
  SiJavascript,
  SiHtml5,
  SiPostman,
  SiReact,
} from 'react-icons/si'

import { FaDatabase } from 'react-icons/fa'

// MAPA DE ÍCONES
const iconMap = {
  // Backend
  Python: <SiPython />,
  FastAPI: '⚡',
  Flask: '⚡', // fallback visual parecido
  'REST APIs': '🔗',
  'JWT Auth': '🔐',

  // Frontend
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  React: <SiReact />,

  // Banco de Dados
  PostgreSQL: <SiPostgresql />,
  SQL: <FaDatabase />,
  MySQL: <FaDatabase />,

  // Ferramentas
  'Git / GitHub': <SiGithub />,
  Docker: <SiDocker />,
  Linux: '🐧',
  Postman: <SiPostman />,
  'VS Code': '💻',
}

export default function Stack() {
  return (
    <section id="stack" className="section" aria-labelledby="stack-heading">
      <div className="container">

        {/* Cabeçalho */}
        <header className="section__header">
          <span className="section__num" aria-hidden="true">§ 04</span>
          <h2 id="stack-heading" className="section__title">
            Stack / <em>Ferramentas</em>
          </h2>
          <span className="section__line" aria-hidden="true" />
        </header>

        {/* Grid */}
        <div className="stack-grid">
          {STACK.map(({ group, items }) => (
            <div key={group} className="stack-block">
              <h3 className="stack-block__label">{group}</h3>

              <ul className="stack-block__chips" aria-label={group}>
                {items.map(({ name, highlight }) => (
                  <li
                    key={name}
                    className={`stack-chip${highlight ? ' stack-chip--hi' : ''}`}
                  >
                    {/* ÍCONE */}
                    <span className="stack-chip__icon">
                      {iconMap[name] || '⚙️'}
                    </span>

                    {/* TEXTO */}
                    <span>{name}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}