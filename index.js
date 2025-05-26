let idades = [];
let posicao = [];// variável para idades declarada.


for (i = 0; i < 4; i++) {
    let idade;
    do {
        idade = parseInt(prompt(`Digite a idade ${i+1}`))
        if (isNaN(idade) || idade < 0 ) {
            alert("Idade inválida, digite novamente");
        }
    } while (isNaN(idade) || idade < 0 );
    idades[i] = idade
}
let maiorIdade = idades[0];
let posicaoMaiorIdade = 0;

for (let i = 0; i < 4; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicaoMaiorIdade = i; // Aqui salva a posição do maior valor
    }
}
alert(`A maior idade é = ${maiorIdade}, posição ${posicaoMaiorIdade}° lugar`);
