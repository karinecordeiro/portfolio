const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')
const imagem = window.document.getElementById('imagem')

$checkbox.addEventListener ('change', function(){
    $html.classList.toggle('dark-mode')
    imagem.src = 'assets/imagem/fotoroxa.png'

})