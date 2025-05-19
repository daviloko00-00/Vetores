let nomes = [];
let sexos = [];
let salarios = [];

for (let i = 0; i < 5; i++) {
    letnome = prompt("Digite o nome do funcionário:");
    let sexo;
    do {
        sexo = prompt("Digite o sexo do funcionário (M/F):").toUpperCase();
        if (sexo !== "M" && sexo !== "F") {
            alert("Sexo inválido. Digite M para masculino ou F para feminino.");
        }
    } while (sexo !== "M" && sexo !== "F");
    let salario;
    do {
        salario = parseFloat(prompt("Digite o salário do funcionário:"));
        if (isNaN(salario) || salario <= 0) {
            alert("Salário inválido. Digite um salário positivo.")
        }
    }while (isNaN(salario) || salario <= 0);
    //Armazenando os dados em arrays já declarados.
    nomes.push(nome);
    sexos.push(sexo);
    salarios.push(salario);
}