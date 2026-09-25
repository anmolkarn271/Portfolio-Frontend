import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try { const s = localStorage.getItem('theme'); if (s) return s === 'dark' } catch { /* storage blocked */ }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch { /* storage blocked */ }
  }, [dark])
  return (
    <button className="icon-btn" onClick={() => setDark(d => !d)} aria-label="Toggle color theme">
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}
