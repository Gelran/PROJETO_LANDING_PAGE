var setaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    samantha.style = "display:none"
    bruna.style = "display:flex"
    setaEsquerda.style = "display:flex; margin-top:55px "
    setaDireita.style = "display:none;"
}

function RolarParaEsquerda(){
    samantha.style = "display:flex; margin-left:55px"
    bruna.style = "display:none"
    setaDireita.style = "display:flex; margin-top:55px"
    setaEsquerda.style = "display:none"
}   



