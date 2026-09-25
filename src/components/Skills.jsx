import Reveal from './Reveal.jsx'
import { SKILLS } from '../content.js'

export default function Skills() {
  return (
    <section id="skills">
      <Reveal as="h2">Skills</Reveal>
      <Reveal className="skills">
        {Object.entries(SKILLS).map(([group, items]) => (
          <SkillRow key={group} group={group} items={items} />
        ))}
      </Reveal>
    </section>
  )
}

function SkillRow({ group, items }) {
  return (
    <>
      <h3>{group}</h3>
      <ul className="chips">{items.map(s => <li key={s}>{s}</li>)}</ul>
    </>
  )
}
