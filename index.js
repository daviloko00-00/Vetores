let nomes = [];
let sexos = [];
let salarios = [];

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o nome do funcionário ${i + 1}:`);
    let sexo;
    do {
        sexo = prompt(`Digite o sexo do funcionário ${i + 1} (M/F):`).toUpperCase();
        if (sexo !== "M" && sexo !== "F") {
            alert("Sexo inválido! Digite 'M' para masculino ou 'F' para feminino.");
        }
    } while (sexo !== "M" && sexo !== "F");
    let salario;
    do {
        salario = parseFloat(prompt(`Digite o salário do funcionário ${i + 1}:`));
        if (isNaN(salario) || salario < 0) {
            alert("Salário inválido! Digite um valor numérico positivo.");
        }
    } while (isNaN(salario) || salario < 0);
    // Armazenar os dados nos arraws
   nomes[i] = nome;
    sexos[i] = sexo;
    salarios[i] = salario;

}
// Filtrar e exibir funcionárias mulheres com salário maior que R$5.000
let resultado = "Funcionárias com salário acima de R$5.000:\n";
let encontrou = false;
for (let i = 0; i < 5; i++) {
    if (sexos[i] === "F" && salarios[i] > 5000) {
        resultado += 
        `Nome: ${nomes[i]},\n Sexo: ${sexos[i]},\n Salário: R$${salarios[i].toFixed(2)}\n`;
        encontrou = true;
    }
}

if (!encontrou) {
    resultado = "Nenhuma funcionária atende aos critérios.";
}

alert(resultado);