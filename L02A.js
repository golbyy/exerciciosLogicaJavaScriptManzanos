alert("Programa Diferença Maior pelo Menor")
valor1 = parseInt(prompt("Digite o valor de A: "))
valor2 = parseInt(prompt("Digite o valor de B: "))
if (valor1 > valor2) {
  diferenca = valor1 - valor2
} else {
  diferenca = valor2 - valor1
}
alert("A diferença do maior pelo menor é: " + diferenca)
