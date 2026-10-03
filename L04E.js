alert("Programa Soma dos Fatoriais")
contadorLeitura = 0
somaFatoriais = 0
do {
  valor = parseInt(prompt("Digite o " + (contadorLeitura + 1) + "º valor: "))
  fatorial = 1
  indice = 1
  while (indice <= valor) {
    fatorial = fatorial * indice
    indice = indice + 1
  }
  somaFatoriais = somaFatoriais + fatorial
  contadorLeitura = contadorLeitura + 1
} while (contadorLeitura < 15)
alert("Soma dos fatoriais: " + somaFatoriais)
