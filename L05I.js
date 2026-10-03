alert("Programa Fibonacci")
anterior = 1
atual = 1
for (contador = 1; contador <= 15; contador++) {
  console.log(atual)
  proximo = anterior + atual
  anterior = atual
  atual = proximo
}
