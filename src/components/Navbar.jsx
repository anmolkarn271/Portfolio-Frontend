import { useState } from 'react'
import { NAV } from '../content.js'
import { useScrollState, useActive } from '../hooks.js'
import ThemeToggle from './ThemeToggle.jsx'

export default function Navbar() {
  const { solid, hidden } = useScrollState()
  const active = useActive(NAV.map(n => n[0]))
  const [open, setOpen] = useState(false)
  const cls = ['topbar', (solid || open) && 'solid', hidden && !open && 'hide'].filter(Boolean).join(' ')

  return (
    <header className={cls}>
      <div className="wrap tb">
        <a className="brand" href="#top">Anmol Karn</a>
        <nav aria-label="Main">
          <ul className="links-d">
            {NAV.map(([id, label]) => (
              <li key={id}><a href={`#${id}`} className={active === id ? 'on' : ''}>{label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="tb-actions">
          <ThemeToggle />
          <button className="icon-btn burger" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)}>
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      <div id="menu" className={open ? 'menu open' : 'menu'}>
        <div className="wrap">
          {NAV.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
      </div>
    </header>
  )
}
