import Reveal from './Reveal.jsx'

export default function Projects({ projects }) {
  const [main, ...rest] = projects

  return (
    <section id="work">
      <Reveal as="h2">Selected projects</Reveal>

      {main && (
        <Reveal as="article" className="feature">
          <div>
            {main.tag && <span className="tag">{main.tag}</span>}
            <h3>{main.title}</h3>
            <p>{main.summary}</p>
            <ul className="chips">{main.stack?.map(s => <li key={s}>{s}</li>)}</ul>
            <ProjectLinks project={main} />
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
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 120} className={i % 2 ? 'panel b' : 'panel'}>
            {project.big && <div className="big">{project.big}</div>}
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            {project.stack?.length > 0 && (
              <ul className="chips">{project.stack.map(s => <li key={s}>{s}</li>)}</ul>
            )}
            <ProjectLinks project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className="project-actions">
      {project.github && (
        <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
          View source <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.live && (
        <a className="project-link" href={project.live} target="_blank" rel="noreferrer">
          Live demo <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  )
}
