alert("Programa Potência Genérica")
base = parseInt(prompt("Digite a base: "))
expoente = parseInt(prompt("Digite o expoente: "))
resultado = 1
contador = 1
while (contador <= expoente) {
  resultado = resultado * base
  contador = contador + 1
}
alert("Resultado: " + resultado)
