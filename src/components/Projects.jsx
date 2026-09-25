import Reveal from './Reveal.jsx'

export default function Projects({ projects }) {
  const [main, ...rest] = projects
  return (
    <section id="work">
      <Reveal as="h2">Work</Reveal>
      {main && (
        <Reveal as="article" className="feature">
          <div>
            {main.tag && <span className="tag">{main.tag}</span>}
            <h3>{main.title}</h3>
            <p>{main.summary}</p>
            <ul className="chips">{main.stack?.map(s => <li key={s}>{s}</li>)}</ul>
          </div>
          <ul className="status">
            {main.status?.map(s => (
              <li key={s.label} className={s.state === 'built' ? '' : s.state}>
                <span><b>{s.label}</b>{s.text}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
      <div className="two">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 120} className={i % 2 ? 'panel b' : 'panel'}>
            {p.big && <div className="big">{p.big}</div>}
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
