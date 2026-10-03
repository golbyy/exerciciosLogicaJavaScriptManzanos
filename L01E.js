alert("Programa Prestação com Juros")
valor = parseFloat(prompt("Digite o valor: "))
taxa = parseFloat(prompt("Digite a taxa (%): "))
tempo = parseFloat(prompt("Digite o tempo: "))
prestacao = valor + ((valor * taxa) / 100) * tempo
alert("Valor da prestação: " + prestacao)
