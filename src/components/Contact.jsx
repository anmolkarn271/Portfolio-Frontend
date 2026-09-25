import { useState } from 'react'
import Reveal from './Reveal.jsx'

export default function Contact() {
  const [f, setF] = useState({ name: '', email: '', message: '' })
  const [st, setSt] = useState({ kind: 'idle', text: '' })
  const set = k => e => setF({ ...f, [k]: e.target.value })

  async function submit(e) {
    e.preventDefault()
    setSt({ kind: 'sending', text: 'Sending...' })
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(f),
      })
      const d = await r.json().catch(() => ({}))
      if (!r.ok) throw new Error(d.error || 'Could not send.')
      setF({ name: '', email: '', message: '' })
      setSt({ kind: 'ok', text: 'Message sent. I will reply soon.' })
    } catch (err) {
      const why = err instanceof TypeError ? 'Could not reach the server.' : err.message
      setSt({ kind: 'err', text: `${why} You can also email anmolrajpoot98@gmail.com.` })
    }
  }

  return (
    <Reveal>
      <h2>Looking for a DevOps fresher? Let's talk.</h2>
      <p>B.Tech CSE at IPS College of Technology &amp; Management, 2023 to 2027. Send a message here or reach me on LinkedIn or GitHub.</p>
      <form className="form" onSubmit={submit}>
        <label>Name<input value={f.name} onChange={set('name')} required maxLength={100} /></label>
        <label>Email<input type="email" value={f.email} onChange={set('email')} required maxLength={200} /></label>
        <label>Message<textarea value={f.message} onChange={set('message')} required maxLength={2000} /></label>
        <button className="btn" disabled={st.kind === 'sending'}>Send message</button>
        <p className="msg" role="status">{st.text}</p>
      </form>
    </Reveal>
  )
}
