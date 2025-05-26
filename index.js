let nomesAlturas = [];
let contador = 0;
let opcao;
function adicionarnomealtura() {

    let nome = prompt("Digite o nome:");
    let altura = parseFloat(prompt("Digite a altura em metros:"));

    if (isNaN(altura) || altura <= 0 || !(isNaN(nome)) || nome === "") {
        alert("Altura inválida! Por favor, digite um número positivo.");
        return;
    }

    nomesAlturas.push({ nome: nome, altura: altura });
    alert(`Nome e altura adicionados: ${nome}, ${altura}`);
    console.log(`Nome e altura adicionados: ${nome}, ${altura}`);
    nomesAlturas[contador] = { nome: nome, altura: altura };
    contador++;
    menu()
}
function listarnomealtura() {
    if (contador === 0) {
        alert("Nenhum nome e altura cadastrados ainda.");
        return;
    }

    let texto = "Lista de nomes e alturas:\n";
    let maiorAltura = nomesAlturas[0].altura;
    let posMaior = 0;

    for (let i = 0; i < contador; i++) {
        texto += (i + 1) + ". " + nomesAlturas[i].nome + " - " + nomesAlturas[i].altura + "m\n";
        if (nomesAlturas[i].altura > maiorAltura) {
            maiorAltura = nomesAlturas[i].altura;
            posMaior = i;
        }
    }
    texto += `\nMaior altura:  + ${nomesAlturas[posMaior].nome},  ${maiorAltura} na posição ${posMaior + 1}`;
    alert(texto);
    console.log(texto);
}

function menu() {
    do {
        opcao = parseInt(prompt("Bem-vindo ao sistema de armaxenamento de nomes e alturas!!\n 1. Adicionar nome e altura \n 2. Listar nome e altura- Sair (0)"));
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
