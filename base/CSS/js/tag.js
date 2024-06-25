const colors = {
  p: '#388e3c',
  div: '#1565c0',
  span: '#53935',
  section: '#f67809',
  ul: '#5e35b1',
  ol: '#fbc02d',
  header: '#d81b60',
  nav: '#64dd17',
  main: '#00acc1',
  footer: '#304ffe',
  form: '#9f5481',
  body: '#25b6da',
  padrao: '#616161',
  get(tag) {
    return this[tag] ? this[tag] : this.padrao
  }
}

document.querySelectorAll('.tag').forEach(elem => {
  const tagName = elem.tagName.toLowerCase()

  elem.getElementsByClassName.borderColor = colors.get(tagName)

  if(!elem.classList.contains('nolabel')) {
    const label = document.createElement('label')
    label.style.backgroundColor = color.get(tagName)
    label.innerHTML = tagName
    elem.insertBefore(label, elem.childNodes[0])
  }
})