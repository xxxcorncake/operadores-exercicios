//a) Peça ao usuário que insira um número **par**
numeroPar = prompt("Insira um número para par")
//b) Imprima no console **o resto da divisão** desse número por 2.
resto = Number (numeroPar)%2
console.log (resto)
//c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
//teste

//d) O que acontece no console se o usuário inserir um número ímpar? Escreva em um comentário de código
if ( resto == 0) {
    alert("Esse numero é par!");
  } else {
    alert("Esse numero é impar!");
  }