let nomes = [];
let alturas = [];
let maiorposicao = 0;
let menorposicao = 0;
let opcao = [];
let i = 0;
let quantidade = 0;
do {
    nomes[i] = prompt(`Digite o ${i + 1}° nome`)

    do {
        alturas[i] = parseInt(prompt(`Digite a altura de ${nomes[i]} :`));
    } while (isNaN(alturas[i]) || alturas <= 0 || alturas > 3)
    do {
        opcao = prompt(`Digite 0 para continuar ou 1 para finalizar`);
    } while (opcao == "")
    if (opcao != 1) {
        i++
        quantidade ++
    }

} while (opcao != 1)// variáveia para a o maior e menor nome e altura
let maiornome = nomes[0];
let maioraltura = alturas[0];
let menornome = nomes[0];
let menoraltura = alturas[0];
for (let i = 0; i < quantidade; i++) {
    
    if (alturas[i] > maioraltura){
           maioraltura = alturas[i];
           maiornome = nomes[i];
           maiorposicao = i;
       }
    
    if (alturas[i] < menoraltura) {
           menoraltura = alturas[i];
           menornome = nomes[i];
           menorposicao = i
       }
}
alert(`O nome com maior altura é ${maiornome}, ${maioraltura} metros, na ${maiorposicao}° posição`)

alert(`O nome com menor altura é ${menornome}, ${menoraltura} metros, na ${menorposicao}° posição`)

console.log(nomes, maioraltura, maiornome, maiorposicao, menoraltura, menornome, menorposicao)