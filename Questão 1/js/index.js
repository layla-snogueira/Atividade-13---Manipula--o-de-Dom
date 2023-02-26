document.getElementById("botao").addEventListener("click" , function(){
    const nomeusuario = prompt('Digite seu nome aqui:')
    document.getElementById("paragrafo").innerHTML = `E aí ${nomeusuario}!Você está deixando o seu site
    dinâmico.`
})