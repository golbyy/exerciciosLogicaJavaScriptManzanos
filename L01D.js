alert("Programa Combustível em Viagem")
tempo = parseFloat(prompt("Digite o tempo gasto (horas): "))
velocidade = parseFloat(prompt("Digite a velocidade média: "))
distancia = tempo * velocidade
litrosUsados = distancia / 12
alert("Distância: " + distancia + " | Litros usados: " + litrosUsados)
