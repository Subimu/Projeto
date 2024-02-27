function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /* Tudo isso pode ser substituido pela tag toggle
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else{
    html.classList.add('light')
  }
*/

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    //se tiver sem light mode, manter a imagem
    img.setAttribute("src", "./assets/avatar.png")
  }

  //com a tag alt
  /*
  const alt = document.querySelector("#profile img")

  if(html.classList.contains("light")) {
    img.setAttribute('alt', 'descrição da foto light')
  } else {
    img.setAttribute("alt", "descrição da foto")
  }
  */
}

