import Reveal from './Reveal.jsx'
import { TIMELINE } from '../content.js'

export default function Timeline() {
  return (
    <section id="journey">
      <Reveal as="h2">Journey</Reveal>
      <ol className="tl">
        {TIMELINE.map((t, i) => (
          <Reveal as="li" key={t.title} delay={i * 90}>
            <time>{t.when}</time>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
