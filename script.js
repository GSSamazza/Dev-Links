function toggleMode() {
  const html = document.body

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Giovane de camiseta branca no forte de Copacabana."
    )
  } else {
    img.setAttribute("src", "./assets/avatar2.png")
    img.setAttribute(
      "alt",
      "Foto de Giovane de Terno verde, gravara marrom no dia do seu casamento."
    )
  }
}
