alert("Programa Bhaskara")
coeficienteA = parseFloat(prompt("Digite o valor de A (diferente de zero): "))
coeficienteB = parseFloat(prompt("Digite o valor de B: "))
coeficienteC = parseFloat(prompt("Digite o valor de C: "))
if (coeficienteA == 0) {
  alert("Não é uma equação de 2º grau (coeficiente A não pode ser zero)")
} else {
  delta = coeficienteB * coeficienteB - 4 * coeficienteA * coeficienteC
  if (delta >= 0) {
    raiz1 = (-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA)
    raiz2 = (-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA)
    alert("Raiz 1: " + raiz1 + " | Raiz 2: " + raiz2)
  } else {
    alert("A equação não possui raízes reais")
  }
}
