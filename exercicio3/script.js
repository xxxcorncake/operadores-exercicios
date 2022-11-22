/* Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:

a) Auxílio creche por filho:  R$45,50

b) Comissão de 10% sobre o total de vendas mensal *0,10

c) Total de vendas dos meses de janeiro a junho:

    - Janeiro: R$ 5.784,50
    - Fevereiro: R$ 3.418,41
    - Março: R$ 4.124,10
    - Abril: R$ 1.874,00
    - Maio: R$ 7.000,00
    - Junho: R$ 9.450,00

d)  Desconto do INSS 5% do salário 5/100 ou *0,05

Calcule:

1) O salário fixo mais o auxílio creche

2) Quanto Fulano de Silva receberá de comissão em janeiro ( dica: para calcular 20% de algum valor fazemos o cálculo: valor*0.2)

3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio. 
  ( Dica: a média aritmética é calculada somando um grupo de números e dividindo pela quantidade de elementos  somados. Por exemplo, a soma de 2, 3, 3, 5, 7 e 10 é 30 dividido por 6, dará média 5.)

*/

// O salário fixo mais o auxílio creche
numeroDeFilhos=2
beneficio=45.50*numeroDeFilhos
salarioBruto=2000
inss=0.05 
comissao=0.10

salarioFixoJ =  ((5784.50*comissao)+ salarioBruto)-((5784.50*comissao)+ salarioBruto)*inss+beneficio
console.log("O salário de Janeiro é R$", salarioFixoJ.toFixed(2)) 
salarioFixoF = ((3418.41*comissao)+ salarioBruto)-((3418.41*comissao)+ salarioBruto)*inss+beneficio
console.log("O salário de Fevereiro é R$", salarioFixoF.toFixed(2)) 
salarioFixoM = ((4124.10*comissao)+ salarioBruto)-((4124.10*comissao)+ salarioBruto)*inss+beneficio
console.log("O salário de Março é R$", salarioFixoM.toFixed(2)) 
salarioFixoA = ((1874.00*comissao)+ salarioBruto)-((1874.00*comissao)+ salarioBruto)*inss+beneficio
console.log("O salário de Abril é R$", salarioFixoA.toFixed(2)) 
salarioFixoMa = ((7000.00*comissao)+ salarioBruto)-((7000.00*comissao)+ salarioBruto)*inss+beneficio
console.log("O salário de Maio é R$", salarioFixoMa.toFixed(2)) 
salarioFixoJu = ((9450.00*comissao)+ salarioBruto)-((9450.00*comissao)+ salarioBruto)*inss+beneficio
console.log("O salário de Junho é R$", salarioFixoJu.toFixed(2)) 

mediaDosSalarios =(salarioFixoA+salarioFixoF+salarioFixoJ+salarioFixoJu+salarioFixoM+salarioFixoMa)/6
console.log("A média do salário em  seis meses (de janeiro a junho) R$",mediaDosSalarios.toFixed(2))





