/**
 * Request fonts from Google Fonts, and add a `font-display: swap` while we're at it.
 *
 * https://github.com/google/fonts/issues/358
 */
export const loadGoogleFonts = fonts => {
  const family = Object.keys(fonts)
    .map(name => `${name.replace(' ', '+')}:${fonts[name].join(',')}`)
    .join('|')
  const id = `__fonts-${family}`

  if (document.getElementById(id)) {
    return
  }

  const url = `https://fonts.googleapis.com/css?family=${family}`

  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let css = xhr.responseText
      css = css.replace(/}/g, '  font-display: swap;\n}')

      const style = document.createElement('style')
      style.id = id
      style.appendChild(document.createTextNode(css))
      document.head.appendChild(style)
    }
  }

  xhr.send()
}
