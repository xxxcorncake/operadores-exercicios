/* Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

```
O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true

divisível = com resto zero

Obs: O true ou false vai depender dos números inseridos e do resultado das operações.
``` */

primeiroNumero = prompt("Insira um número qualquer")
segundoNumero = prompt("Insira um outro número qualquer")

// verificação letra a 
if  (Number(primeiroNumero) > Number(segundoNumero)) {
    alert("seu prmeiro é maior que o segundo")
} else  {
  alert("seu segundo número é maior que o primeiro ");
}

// verificação letra b 
if (Number(primeiroNumero) == Number(segundoNumero)) {
    alert("O primeiro numero é igual ao segundo")
} else  {
  alert("Seus números são diferentes");
}

// verificação letra c

resto = Number (primeiroNumero)% Number (segundoNumero)

if (resto == 0) {
    alert("O primeiro numero é divisível pelo segundo")
} else  {
 
}

// verificação letra c

restoDenovo = Number (segundoNumero)% Number (primeiroNumero)

if (restoDenovo == 0) {
    alert(" O segundo numero é divisível pelo primeiro")
} else  {
}