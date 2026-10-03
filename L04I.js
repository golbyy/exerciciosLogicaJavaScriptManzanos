alert("Programa Maior e Menor")
contadorLeituras = 0
do {
  valor = parseFloat(prompt("Digite um valor (negativo para parar): "))
  if (valor >= 0) {
    if (contadorLeituras == 0) {
      maior = valor
      menor = valor
    } else {
      if (valor > maior) {
        maior = valor
      }
      if (valor < menor) {
        menor = valor
      }
    }
    contadorLeituras = contadorLeituras + 1
  }
} while (valor >= 0)
alert("Maior valor: " + maior + " | Menor valor: " + menor)
