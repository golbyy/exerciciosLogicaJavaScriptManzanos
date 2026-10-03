alert("Programa Maior e Menor entre 5 Valores")
numero1 = parseInt(prompt("Digite o 1º valor: "))
numero2 = parseInt(prompt("Digite o 2º valor: "))
numero3 = parseInt(prompt("Digite o 3º valor: "))
numero4 = parseInt(prompt("Digite o 4º valor: "))
numero5 = parseInt(prompt("Digite o 5º valor: "))
maior = numero1
menor = numero1
if (numero2 > maior) {
  maior = numero2
}
if (numero2 < menor) {
  menor = numero2
}
if (numero3 > maior) {
  maior = numero3
}
if (numero3 < menor) {
  menor = numero3
}
if (numero4 > maior) {
  maior = numero4
}
if (numero4 < menor) {
  menor = numero4
}
if (numero5 > maior) {
  maior = numero5
}
if (numero5 < menor) {
  menor = numero5
}
alert("Maior valor: " + maior + " | Menor valor: " + menor)
