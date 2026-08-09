const botoes = document.querySelectorAll('.botao')
const caixaRes = document.getElementById('res')

function operacao() {
    let res = ''
    if (oper == '+') {
        res = Number(valorAnt) + Number(valorAtual)
        return res
    } else if (oper == '-') {
        res = Number(valorAnt) - Number(valorAtual)
        return res
    } else if (oper == 'X') {
        res = Number(valorAnt) * Number(valorAtual)
        return res
    } else {
        res = Number(valorAnt) / Number(valorAtual)
        return res
    }
}

let oper = ''
let valorAtual = ''
let valorAnt = ''
let vez = ''
let vezPonto = 0


botoes.forEach((el) => {
    el.addEventListener('click', (evt) => {
        let valor = el.innerText
        if (valor === 'Limpar') {
            caixaRes.innerHTML = ''
            valorAtual = ''
            valorAnt = ''
            vez = 0
            vezPonto = 0
        } else if (!Number.isNaN(Number(valor)) || valor == '.') {
            if (caixaRes.innerText[0] == '0' && valor == '0' && caixaRes.innerText.length < 2) {
                valorAtual = '0'
                caixaRes.innerHTML = valorAtual
            } else if (valor == '.') {
                if (caixaRes.innerText.length !== 0 && vezPonto <= 0) {
                    valorAtual += valor
                    caixaRes.innerHTML = valorAtual
                    vezPonto++
                }
            } else { 
                valorAtual += valor
                caixaRes.innerHTML = valorAtual
            }
        } else if (valor !== '=') {
            vezPonto = 0
            caixaRes.innerHTML = ''     
            oper = valor
            if (vez <= 0) {
                valorAnt = valorAtual
                valorAtual = ''
                vez++
            } else {
                valorAnt = operacao()
                valorAtual = ''
                caixaRes.innerHTML = valorAnt
            }

        } else {
            vezPonto = 0
            vez = 0
            caixaRes.innerHTML = operacao()
            valorAtual = caixaRes.innerText
        }


    })
})

