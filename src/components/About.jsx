import Reveal from './Reveal.jsx'
import Terminal from './Terminal.jsx'
import { STATS } from '../content.js'

export default function About() {
  return (
    <section id="about">
      <Reveal as="h2">About</Reveal>
      <div className="about">
        <Reveal>
          <p>I'm learning DevOps by building. Code2Cloud is where I'm putting Linux, Docker and AWS into practice, and leading Technoparv taught me how to run a team.</p>
          <div className="stats">
            {STATS.map(([n, label]) => <div className="stat" key={label}><b>{n}</b><span>{label}</span></div>)}
          </div>
        </Reveal>
        <Reveal delay={120}><Terminal /></Reveal>
      </div>
    </section>
  )
}
