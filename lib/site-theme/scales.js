const scale = require('modular-scale')

const s = scale({
  ratio: scale.ratios.majorThird,
  base: '16px',
})

export const base = s(0, true)

export const h1 = s(4, true)
export const h2 = s(3, true)
export const h3 = s(2, true)
export const h4 = s(1, true)
export const h5 = s(0, true)
export const h6 = s(-1, true)
