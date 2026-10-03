alert("Programa Fibonacci")
anterior = 1
atual = 1
contador = 1
while (contador <= 15) {
  console.log(atual)
  proximo = anterior + atual
  anterior = atual
  atual = proximo
  contador = contador + 1
}
