alert("Programa Soma e Média de 10 Valores")
contador = 1
soma = 0
while (contador <= 10) {
  valor = parseFloat(prompt("Digite o " + contador + "º valor: "))
  soma = soma + valor
  contador = contador + 1
}
media = soma / 10
alert("Soma: " + soma + " | Média: " + media)
