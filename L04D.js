alert("Programa Grãos de Trigo")
quadro = 1
graosAtual = 1
totalGraos = graosAtual
do {
  quadro = quadro + 1
  graosAtual = graosAtual * 2
  totalGraos = totalGraos + graosAtual
} while (quadro < 64)
alert("Total de grãos de trigo: " + totalGraos)
