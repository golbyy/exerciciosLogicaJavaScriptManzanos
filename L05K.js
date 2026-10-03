alert("Programa Fatorial dos Ímpares")
for (contador = 1; contador <= 10; contador++) {
  if (contador % 2 != 0) {
    fatorial = 1
    for (indice = 1; indice <= contador; indice++) {
      fatorial = fatorial * indice
    }
    console.log("Fatorial de " + contador + " = " + fatorial)
  }
}
