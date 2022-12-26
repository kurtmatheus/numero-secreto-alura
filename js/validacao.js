function verificacaoDeChute(chute) {
    const numero = +chute;

    if(chuteNaoNumerico(numero)){
        elementoChute.innerHTML += '<div>Valor Não númerico inválido!</div>';
        return
    }

    if(numeroMaiorOuMenorQueIntervalo(numero)){
        elementoChute.innerHTML += `<div>Valor Inválido. Fale um Número entre ${menorValor} e ${maiorValor}</div>`;
        return
    }

    if(numero === numeroAleatorio) {
        document.body.innerHTML = `
            <h2>Você Acertou</h2>
            <h3>O número secreto era ${numeroAleatorio}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroAleatorio) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-arrow-down-long"></i></div>`
    }  else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-arrow-up-long"></i></div>`
    }
}

function chuteNaoNumerico(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorQueIntervalo(chute) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if(e.target.id === 'jogar-novamente') {
        window.location.reload();
    }
})