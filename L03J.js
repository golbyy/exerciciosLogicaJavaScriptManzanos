alert("Programa Soma e Média dos Pares")
contador = 50
soma = 0
quantidade = 0
while (contador <= 70) {
  soma = soma + contador
  quantidade = quantidade + 1
  contador = contador + 2
}
media = soma / quantidade
alert("Soma: " + soma + " | Média: " + media)
