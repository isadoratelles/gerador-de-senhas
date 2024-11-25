const numeroSenha=document.querySelector('.parametro-senha-texto');
let tamanhoSenha=12;
numeroSenha.textContent=tamanhoSenha;
const botoes=document.querySelectorAll('.parametro-senha-botao');
const campoSenha=document.querySelector('#campo-senha');
const letrasMaiusculas="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
botoes[0].onclick=diminuirTamanho;
botoes[1].onclick=aumentarTamanho;
geraSenha();
function diminuirTamanho(){
    if(tamanhoSenha>6){
        tamanhoSenha=tamanhoSenha-1;
        numeroSenha.textContent=tamanhoSenha; 
    }
}
function aumentarTamanho(){
    if(tamanhoSenha<12){
        tamanhoSenha=tamanhoSenha+1;
        numeroSenha.textContent=tamanhoSenha; 
    }
}
function geraSenha(){
    let senha=" ";
    for(let i=0; i<tamanhoSenha;i++){
    let numeroAleatorio=Math.random()*letrasMaiusculas.length;
    numeroAleatorio=Math.floor(numeroAleatorio);
    senha=senha+letrasMaiusculas[numeroAleatorio];
}
campoSenha.value=senha;
}