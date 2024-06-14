const numeroSenha = document.querySelector('.parametro-senha__texto'); // seleciona o elemento com o id "numero-senha"
let tamanhoSenha = 12; // define o tamanho inicial da senha
numeroSenha.textContent = tamanhoSenha;// define o conteúdo do elemento com o id "numero-senha" como o valor de tamanhoSen
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVXYWZ'; // define as letras maiúsculas
const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz'; // define as letras minúsculas
const numeros = '0123456789'; // define os números
const simbolos = '!@%*?'; // define os símbolos
const botoes = document.querySelectorAll('.parametro-senha__botao'); // seleciona todos os elementos com a classe "parametro-senha__botao"
const campoSenha = document.querySelector('#campo-senha'); // seleciona o elemento com o id "campo-senha"
const checkbox = document.querySelectorAll('.checkbox'); // seleciona todos os elementos com a classe "checkbox"
const forcaSenha = document.querySelector('.forca'); // seleciona o elemento com a classe "forca"

botoes[0].onclick = diminuiTamanho; // adiciona um evento de clique ao botão de diminuição
botoes[1].onclick = aumentaTamanho; // adiciona um evento de clique ao botão de aumento

function diminuiTamanho() { 
    if (tamanhoSenha > 1) {
        // tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        // tamanhoSenha = tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha; 
    geraSenha(); // chama a função geraSenha() para atualizar a senha
}

for (i = 0; i < checkbox.length; i++) {
    checkbox[i].onclick = geraSenha;
    // adiciona um evento de clique a cada checkbox
}

geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked) {
        alfabeto = alfabeto + letrasMaiusculas; // adiciona as letras maiúsculas ao alfabeto se o checkbox estiver marcado
    }
    if (checkbox[1].checked) {
        alfabeto = alfabeto + letrasMinusculas; // adiciona as letras minúsculas ao alfabeto se o checkbox estiver marcado
    }
    if (checkbox[2].checked) {
        alfabeto = alfabeto + numeros; // adiciona os números ao alfabeto se o checkbox estiver marcado
    }
    if (checkbox[3].checked) {
        alfabeto = alfabeto + simbolos; // adiciona os símbolos ao alfabeto se o checkbox estiver marcado
    }
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.random() * alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio]; // adiciona um caractere aleatório do alfabeto à senha
    }
    campoSenha.value = senha;
    classificaSenha(alfabeto.length);
//     console.log(senha);
}

function classificaSenha(tamanhoAlfabeto){
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    console.log(entropia);
    forcaSenha.classList.remove('fraca','media','forte');
    if (entropia > 57){
        forcaSenha.classList.add('forte'); // adiciona a classe "forte" ao elemento com a classe "forca" se a entropia for mai
    } else if (entropia > 35 && entropia < 57 ) {
        forcaSenha.classList.add('media'); // adiciona a classe "media" ao elemento com a classe "forca"
    } else if (entropia <= 35){
        forcaSenha.classList.add('fraca'); // adiciona a classe "fraca" ao elemento com a classe "forca"
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir essa senha.";
    // console.log(valorEntropia);
}





