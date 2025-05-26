let nomes = [];// vetor para nomes
let alturas = [];// vetor para alturas
let maiorposicao = 0;
let menorposicao = 0;
let opcao = [];
let i = 0;

do {
    nomes[i] = prompt(`Digite o ${i + 1}° nome`)

    do {
        alturas[i] = parseFloat(prompt(`Digite a altura de ${nomes[i]} :`));
    } while (isNaN(alturas[i]) || alturas <= 0 || alturas > 3)
    do {
        opcao = prompt(`Digite 0 para continuar ou 1 para finalizar`);
    } while (opcao == "")
    if (opcao != 1) {
        i++;
    }

} while (opcao != 1)// variáveia para a o maior e menor nome e altura
let maiornome = nomes[0];// declaração de variáves para saber o maior e menor nome e altura
let maioraltura = alturas[0];
let menornome = nomes[0];
let menoraltura = alturas[0];
for (let j = 0; j <= i; j++) {

    if (alturas[j] > maioraltura) {
        maioraltura = alturas[j];
        maiornome = nomes[j];
        maiorposicao = j;
      
    }

    if (alturas[j] < menoraltura) {
        menoraltura = alturas[j];
        menornome = nomes[j];
        menorposicao = j;

    }
}
alert(`O nome com maior altura é ${maiornome}, ${maioraltura} metros, na ${maiorposicao}° posição`)

alert(`O nome com menor altura é ${menornome}, ${menoraltura} metros, na ${menorposicao}° posição`)