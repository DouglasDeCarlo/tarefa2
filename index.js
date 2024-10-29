var listaDePessoas = [];

function ValoresForm(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    objetoPessoa = {
        nome,
        idade, 
        email,
        telefone,
    };

    console.log("Pessoa Cadastrada", objetoPessoa);
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";  
    document.getElementById("email").value = "";    
    document.getElementById("telefone").value = "";    
    
    listaDePessoas.push(objetoPessoa);

    alert(`Pessoa cadastrada com sucesso, Bem vindo ${objetoPessoa.nome}`);
}

function pessoasCadastradas() {
    console.log(`A lista tem ${listaDePessoas.length} pessoas.`);
    
    // listaDePessoas.map((pessoa, positionNalista) => {
    //     console.log(`A ${positionNalista + 1} pessoa se chama: ${pessoa.nome}`);
    //     console.log(`tem ${pessoa.idade} anos`); 
    //     console.log(`e seu Email é: ${pessoa.email}`);
    //     console.log(`e seu telefone é: ${pessoa.telefone}`);
    // });
    console.table(listaDePessoas);
}
