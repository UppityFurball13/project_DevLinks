function toggleMode() {
  const html = document.documentElement
  // if (html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }
  // isso tudo (^^) pode ser resumido em(vv)
  html.classList.toggle('light')
  // pegar a tag img
  const img = document.querySelector('img')
  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.src = './image/assets/avatar-light.png'
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.src = './image/assets/avatar.png'
  }
}