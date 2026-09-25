import { useEffect, useRef, useState } from 'react'
import { SCRIPT } from '../content.js'
import { reduce } from '../lib.js'

export default function Terminal() {
  const ref = useRef(null)
  const [go, setGo] = useState(false)
  const [n, setN] = useState(reduce ? SCRIPT.length : 0)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setGo(true))
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!go || reduce) return
    const t = setInterval(() => setN(v => Math.min(v + 1, SCRIPT.length)), 28)
    return () => clearInterval(t)
  }, [go])

  const lines = SCRIPT.slice(0, n).split('\n')
  return (
    <div className="term" ref={ref}>
      <div className="term-bar"><i /><i /><i /></div>
      <pre>
        {lines.map((l, i) => (
          <span key={i} className={l.startsWith('$') ? 'cmd' : ''}>
            {l}{i < lines.length - 1 ? '\n' : <b className="cur" />}
          </span>
        ))}
      </pre>
    </div>
  )
}
