import { useEffect, useRef, useState } from 'react'

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect() }
    }, { threshold: 0.12 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <Tag ref={ref} className={`rv ${on ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}
