import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const ref = useRef(null)
  useEffect(() => {
    const f = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      ref.current.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`
    }
    f()
    window.addEventListener('scroll', f, { passive: true })
    window.addEventListener('resize', f)
    return () => { window.removeEventListener('scroll', f); window.removeEventListener('resize', f) }
  }, [])
  return <div className="progress" ref={ref} aria-hidden="true" />
}
