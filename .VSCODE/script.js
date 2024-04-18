function toggleMode() {
  const html = document.documentElement
  /*if(html.classList.contains("light")) {
       html.classList.remove('light')
     } else {
       html.classList.add('light')
     } esse codigo significa que o JS está buscando com o comando if la em html se contem a lista "light" e após achal se ela estiver la pode desliga-la ou liga-la.
     esse é o codigo inteiro, porem existe o comando simplificado para que é:*/
     html.classList.toggle('light')

     /* função para substituir ou adicionar uma nova imagem*/
     //pegar a tag img
     const img = document.querySelector("#profile img")

     // substituir a imagem
     if(html.classList.contains("light")) {
      // se tiver light mode, adicionar a imagem light
      img.setAttribute('src', './assets/profile-light.png') 
     } else {
       // se tiver sem light mode, manter a imagem normal
      img.setAttribute('src', './assets/profile.png')
    }
      
}
