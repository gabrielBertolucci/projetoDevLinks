function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver com o light mode ativo, add a imagem do light mode
    img.setAttribute("src", "./avatar-light.jpg")
    img.setAttribute(
      "alt",
      'Foto do Gabriel, do tronco para cima, de blusa branca, com a escrita "MIAMI" em vermelho ao peito, de óculos e com algumas árvores e um telhado ao fundo'
    )
  } else {
    img.setAttribute("src", "./avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Gabriel, do tronco para cima, de camisa azul de manga curta com um crachá preso ao peito, usando bigode e óculos. Ao fundo uma IHM WEG."
    )
  }
}
