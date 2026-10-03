alert("Programa Potência Genérica")
base = parseInt(prompt("Digite a base: "))
expoente = parseInt(prompt("Digite o expoente: "))
resultado = 1
for (contador = 1; contador <= expoente; contador++) {
  resultado = resultado * base
}
alert("Resultado: " + resultado)
