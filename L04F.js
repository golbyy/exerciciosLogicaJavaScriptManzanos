alert("Programa Soma, Média e Contagem")
soma = 0
contador = 0
do {
  valor = parseFloat(prompt("Digite um valor (negativo para parar): "))
  if (valor >= 0) {
    soma = soma + valor
    contador = contador + 1
  }
} while (valor >= 0)
if (contador > 0) {
  media = soma / contador
} else {
  media = 0
}
alert("Soma: " + soma + " | Média: " + media + " | Total: " + contador)
