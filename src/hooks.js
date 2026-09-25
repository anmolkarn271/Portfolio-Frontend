import { useEffect, useState } from 'react'

// solid: page scrolled past the top. hidden: scrolling down, so the navbar fades out.
export function useScrollState() {
  const [s, setS] = useState({ solid: false, hidden: false })
  useEffect(() => {
    let last = window.scrollY, hidden = false, tick = false
    const frame = () => {
      const y = window.scrollY, dy = y - last
      if (y <= 140) hidden = false
      else if (dy > 4) hidden = true
      else if (dy < -4) hidden = false
      last = y; tick = false
      const solid = y > 30
      setS(p => (p.solid === solid && p.hidden === hidden ? p : { solid, hidden }))
    }
    const onScroll = () => { if (!tick) { tick = true; requestAnimationFrame(frame) } }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return s
}

export function useActive(ids) {
  const [active, setActive] = useState('')
  useEffect(() => {
    const io = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])
  return active
}
