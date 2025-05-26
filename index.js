let nomesAlturas = [];// arrawy para armazenar os nomes e alturas
let contador = 0;// contador para controlar a quantidade de nomes e alturas cadastrados
let opcao;
function adicionarnomealtura() {// Função para adicionar nome e altura, fica mais fácil de testes pois cada função fica separado em blocos

    let nome = prompt("Digite o nome:");
    let altura = parseFloat(prompt("Digite a altura em metros:"));

    if (isNaN(altura) || altura <= 0 || !(isNaN(nome)) || nome === "") {
        alert("Altura inválida! Por favor, digite um número positivo.");
        return;
    }

    nomesAlturas.push({ nome: nome, altura: altura }); // manda o nome e altura para o array nomesAlturas
    alert(`Nome e altura adicionados: ${nome}, ${altura}`);
    console.log(`Nome e altura adicionados: ${nome}, ${altura}`);
    nomesAlturas[contador] = { nome: nome, altura: altura };// coloca o nome e altura no array nomesAlturas na posição do contador
    contador++;// incrementa o contador para a próxima posição do array
    alert(`Total de nomes e alturas cadastrados: ${contador}`);
    menu()
}
function listarnomealtura() {// função para listagem os nomes e alturas cadastrados
    if (contador === 0) {
        alert("Nenhum nome e altura cadastrados ainda.");
        return;
    }

    let texto = "Lista de nomes e alturas:\n";// variável texto para armazenar a lista de nomes e alturas
    let maiorAltura = nomesAlturas[0].altura;// variável para armazenar a maior altura, inicia com o primeiro elemento do array
    let menorAltura = nomesAlturas[0].altura;// variável para armazenar a menor altura, inicia com o primeiro elemento do array
    let posMenor = 0;// variável para armazenar a posição da menor altura
    let posMaior = 0;

    for (let i = 0; i < contador; i++) {
        texto += (i + 1) + ". " + nomesAlturas[i].nome + " - " + nomesAlturas[i].altura + "m\n";
        if (nomesAlturas[i].altura > maiorAltura) {// verifica se a altura atual é maior que a maior altura
            maiorAltura = nomesAlturas[i].altura;
            posMaior = i;
        } else if (nomesAlturas[i].altura < menorAltura) {// verifica se a altura atual é menor que a menor altura
            menorAltura = nomesAlturas[i].altura;
            posMenor = i;
        }
    }
    texto += `\nMaior altura:   ${nomesAlturas[posMaior].nome},  ${maiorAltura} na posição ${posMaior + 1}\n Menor altura: ${nomesAlturas[posMenor].nome}, ${menorAltura} na posição ${posMenor + 1}`;// exibe as maiores e menores alturas com nomes e posições.
    alert(texto);
    console.log(texto);
    menu();
}

function menu() {// Função de menu para melhor organização e controle de opções
    do {
        opcao = parseInt(prompt("Bem-vindo ao sistema de armaxenamento de nomes e alturas!!\n 1. Adicionar nome e altura \n 2. Listar nome e altura. \nSair (0)"));
        if (isNaN(opcao) || opcao < 0 || opcao > 2) {
            alert("Opção inválida! Por favor, escolha uma opção válida.");
        }
        switch (opcao) {
            case 1:
                adicionarnomealtura();
                break;
            case 2:
                listarnomealtura();
                break;
            case 0:
                alert("Saindo...");
                return;

        }
    } while (isNaN(opcao) || opcao < 0 || opcao > 2);
}

menu();
