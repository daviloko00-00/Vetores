let idades = [];// variável para idades declarada.


for (i = 0; i < 3; i++) {
    let idade;
    do {
        idade = parseFloat(prompt(`Digite a idade ${i+1}`))
        if (isNaN(idade) || idade < 0 || idade > 100) {
            alert("Idade inválida, digite novamente");
        }
    } while (isNaN(idade) || idade < 0 || idade > 100);
}


