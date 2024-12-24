let tentativas = 0;
let max = 10
let min = 1
let numEscolhido = Math.floor(Math.random()* (max - min + 1) + min);

function adivinheNumber(){
    tentativas ++;
    let num_escolhido = numEscolhido
    let number = parseInt(document.getElementById('entry_check_number').value);
       if (number === num_escolhido){
        document.getElementById('teste').innerHTML = '🎉Parabéns, acertou na tentativa: ' + tentativas + '!';
        tentativas = 0
        document.getElementById('entry_check_number').value = '';
        numEscolhido = Math.floor(Math.random()* (max - min + 1) + min)
        
    }
    else if (number < num_escolhido){
        document.getElementById('teste').innerHTML = '🔽Chutou baixo, tente novamente!';
    }
    else if (number > num_escolhido){
        document.getElementById('teste').innerHTML = '🔼Chutou alto, tente novamente!';
    }
    else{
        document.getElementById('teste').innerHTML = '❗Opção inválida, tente novamente...';
    }
}

function limparSaldo(){
    document.getElementById('teste').innerHTML = '';
}

