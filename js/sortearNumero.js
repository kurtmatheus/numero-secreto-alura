const menorValor = 1;
const maiorValor = 1000;
const numeroAleatorio = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Número Secreto:', numeroAleatorio)

document.getElementById('menor-valor').innerHTML = menorValor;
document.getElementById('maior-valor').innerHTML = maiorValor;