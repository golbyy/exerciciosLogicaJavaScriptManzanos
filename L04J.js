alert("Programa Divisão Inteira")
dividendo = parseInt(prompt("Digite o dividendo: "))
divisor = parseInt(prompt("Digite o divisor: "))
quociente = 0
resto = dividendo
if (resto >= divisor) {
  do {
    resto = resto - divisor
    quociente = quociente + 1
  } while (resto >= divisor)
}
alert("O resultado da divisão é: " + quociente)
