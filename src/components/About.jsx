import Reveal from './Reveal.jsx'
import Terminal from './Terminal.jsx'
import { STATS } from '../content.js'

export default function About() {
  return (
    <section id="about">
      <Reveal as="h2">About me</Reveal>
      <div className="about">
        <Reveal>
          <p>
            I'm a B.Tech Computer Science student focused on becoming a DevOps engineer.
            I learn by building and troubleshooting practical workflows with Linux, Bash,
            Docker, GitHub Actions, and AWS. My current portfolio covers application
            deployment, CI/CD automation, and Linux system monitoring.
          </p>
          <div className="stats">
            {STATS.map(([n, label]) => (
              <div className="stat" key={label}><b>{n}</b><span>{label}</span></div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120}><Terminal /></Reveal>
      </div>
    </section>
  )
}
