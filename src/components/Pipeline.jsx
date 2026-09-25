import { useEffect, useRef, useState } from 'react'
import { STAGES } from '../content.js'
import { reduce, wait } from '../lib.js'

export default function Pipeline() {
  const [state, setState] = useState(STAGES.map(() => 'idle'))
  const [logs, setLogs] = useState([])
  const [phase, setPhase] = useState('idle')
  const busy = useRef(false)

  async function run() {
    if (busy.current) return
    busy.current = true
    setPhase('running'); setLogs([]); setState(STAGES.map(() => 'idle'))
    for (let i = 0; i < STAGES.length; i++) {
      setState(s => s.map((v, k) => (k === i ? 'run' : v)))
      await wait(750)
      setState(s => s.map((v, k) => (k === i ? 'ok' : v)))
      setLogs(l => [...l, STAGES[i][2]])
    }
    setLogs(l => [...l, `Live. Deployed in ${STAGES.length} stages.`])
    setPhase('done'); busy.current = false
  }

  useEffect(() => {
    if (reduce) return
    const t = setTimeout(run, 1500)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="pipe">
      <div className="pipe-top">
        <p>Code2Cloud pipeline<small>A demo of the stages I'm building</small></p>
        <button className="btn" onClick={run} disabled={phase === 'running'}>
          {phase === 'running' ? 'Running' : phase === 'done' ? 'Run again' : 'Push to main'}
        </button>
      </div>
      <ol className="stages">
        {STAGES.map((s, i) => (
          <li key={s[0]} className="stage" data-s={state[i]}>
            <i className="node" />{s[0]}<span>{s[1]}</span>
          </li>
        ))}
      </ol>
      <div className="log" role="log" aria-live="polite">
        {logs.length
          ? logs.map((l, i) => <div key={i} className={i === STAGES.length ? 'done' : ''}>{l}</div>)
          : <div>Waiting for a push.</div>}
      </div>
    </div>
  )
}
