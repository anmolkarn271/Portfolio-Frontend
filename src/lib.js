export const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
export const wait = ms => new Promise(r => setTimeout(r, reduce ? 0 : ms))
