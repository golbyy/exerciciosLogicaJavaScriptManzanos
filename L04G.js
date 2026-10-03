alert("Programa Fatorial dos Ímpares")
contador = 1
do {
  if (contador % 2 != 0) {
    fatorial = 1
    indice = 1
    while (indice <= contador) {
      fatorial = fatorial * indice
      indice = indice + 1
    }
    console.log("Fatorial de " + contador + " = " + fatorial)
  }
  contador = contador + 1
} while (contador <= 10)
