alert("Programa Média e Aprovação")
nota1 = parseFloat(prompt("Digite a nota 1: "))
nota2 = parseFloat(prompt("Digite a nota 2: "))
nota3 = parseFloat(prompt("Digite a nota 3: "))
nota4 = parseFloat(prompt("Digite a nota 4: "))
media = (nota1 + nota2 + nota3 + nota4) / 4
if (media >= 5) {
  alert("Aluno aprovado! Média: " + media)
} else {
  alert("Aluno reprovado! Média: " + media)
}
