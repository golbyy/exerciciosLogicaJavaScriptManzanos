alert("Programa Área da Residência")
totalArea = 0
resposta = "SIM"
while (resposta != "NAO") {
  nomeComodo = prompt("Digite o nome do cômodo: ")
  largura = parseFloat(prompt("Digite a largura: "))
  comprimento = parseFloat(prompt("Digite o comprimento: "))
  area = largura * comprimento
  totalArea = totalArea + area
  console.log("Área de " + nomeComodo + ": " + area)
  resposta = prompt("Deseja continuar calculando novos cômodos (SIM/NAO)? ")
}
alert("Área total da residência: " + totalArea)
