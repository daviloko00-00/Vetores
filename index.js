let idades = [];

// Coleta as idades
for (let i = 0; i < 4; i++) {
    let idade;
    do {
        idade = parseInt(prompt(`Digite a idade ${i + 1}:`));
        if (isNaN(idade) || idade < 0) {
            alert("Idade inválida, digite novamente");
        }
    } while (isNaN(idade) || idade < 0);
    idades[i] = idade;
}

// Inicializa maiorIdade e sua posição
let maiorIdade = idades[0];
let posicaoMaiorIdade = 0;

// Procura a maior idade e sua posição
for (let i = 1; i < 4; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicaoMaiorIdade = i;
    }
}

alert(`A maior idade é = ${maiorIdade}, posição ${posicaoMaiorIdade + 1}° lugar`);