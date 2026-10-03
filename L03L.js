alert("Programa Maior e Menor")
valor = parseFloat(prompt("Digite um valor (negativo para parar): "))
maior = valor
menor = valor
while (valor >= 0) {
  if (valor > maior) {
    maior = valor
  }
  if (valor < menor) {
    menor = valor
  }
  valor = parseFloat(prompt("Digite um valor (negativo para parar): "))
}
alert("Maior valor: " + maior + " | Menor valor: " + menor)
