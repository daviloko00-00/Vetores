let notas = [];
let quantidade;

do {
    quantidade = parseInt(prompt("Digite a quantidade de notas que deseja armazenar."));
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Valor inválido, digite um número maior que zero.");
    }
} while (isNaN(quantidade) || quantidade <= 0);

for (let i = 0; i < quantidade; i++) {
    let nota;
    do {
        nota = parseFloat(prompt(`Digite a nota ${i + 1} (de 0 a 10):`));
        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota inválida! Digite um número de 0 a 10.");
        }
    } while (isNaN(nota) || nota < 0 || nota > 10);
    notas[i] = nota;
}

let soma = 0;localStorage
let maiorNota = notas[0];
let menorNota = notas[0];

for (let i = 0; i < quantidade; i++) {
    soma += notas[i];
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }
    if (notas[i] < menorNota) {
        menorNota = notas[i];
    }
}

let media = soma / quantidade;

console.log(notas);
alert(`A média das notas é = ${media}`);
alert(`A maior nota é = ${maiorNota}`);
alert(`A menor nota é = ${menorNota}`);