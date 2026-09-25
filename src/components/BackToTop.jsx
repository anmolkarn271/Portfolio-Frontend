import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const f = () => setShow(window.scrollY > 700)
    f()
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return <a className={`btn totop ${show ? 'show' : ''}`} href="#top" aria-label="Back to top">Top</a>
}
