const $html = document.querySelector('html')
const $checkbox = document.querySelector('#switch')
let imagem = window.document.getElementById('imagem')

$checkbox.addEventListener ('change', function(){
    $html.classList.toggle('dark-mode')
    // imagem.src = 'assets/imagem/fotoroxa.png' 

    // if(imagem.checked){
    //     imagem.src = 'assets/imagem/foto.png'
    // }
    
})