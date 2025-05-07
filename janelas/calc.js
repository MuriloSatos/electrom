

document.getElementById('botoes').addEventListener('click', buttonClick)

let calculo = ''


function buttonClick(evento) {

    let value = evento.target.value
    if (value == '=') {

     calculo = eval(calculo);
        console.log(calculo)
        atualizaDisplay()

        return

    }


    if (value == 'AC') {
        limparCalculo()
        atualizaDisplay()
        return
    }
    calculo += value;
 atualizaDisplay()

}

function limparCalculo() {
    calculo = ''
    

}

function atualizaDisplay() {
    let display = document.getElementById('display')
    display.textContent = calculo
    console.log(calculo)
}