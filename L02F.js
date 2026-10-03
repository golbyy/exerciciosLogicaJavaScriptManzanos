alert("Programa Ordem Crescente")
valor1 = parseFloat(prompt("Digite o valor de A: "))
valor2 = parseFloat(prompt("Digite o valor de B: "))
valor3 = parseFloat(prompt("Digite o valor de C: "))
if (valor1 <= valor2 && valor1 <= valor3) {
  menor = valor1
  if (valor2 <= valor3) {
    meio = valor2
    maior = valor3
  } else {
    meio = valor3
    maior = valor2
  }
} else if (valor2 <= valor1 && valor2 <= valor3) {
  menor = valor2
  if (valor1 <= valor3) {
    meio = valor1
    maior = valor3
  } else {
    meio = valor3
    maior = valor1
  }
} else {
  menor = valor3
  if (valor1 <= valor2) {
    meio = valor1
    maior = valor2
  } else {
    meio = valor2
    maior = valor1
  }
}
alert("Ordem crescente: " + menor + ", " + meio + ", " + maior)
