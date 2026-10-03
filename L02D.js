alert("Programa Exame de Segunda Chamada")
nota1 = parseFloat(prompt("Digite a nota 1: "))
nota2 = parseFloat(prompt("Digite a nota 2: "))
nota3 = parseFloat(prompt("Digite a nota 3: "))
nota4 = parseFloat(prompt("Digite a nota 4: "))
media = (nota1 + nota2 + nota3 + nota4) / 4
if (media >= 7) {
  alert("Aluno aprovado! Média: " + media)
} else {
  notaExame = parseFloat(prompt("Digite a nota do exame: "))
  novaMedia = (media + notaExame) / 2
  if (novaMedia >= 5) {
    alert("Aluno aprovado em exame! Média: " + novaMedia)
  } else {
    alert("Aluno reprovado! Média: " + novaMedia)
  }
}
