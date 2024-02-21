// 36. Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

import { question } from "readline-sync"

function main() {
console.log(" ----- ANOS, MESES E DIAS PARA DIAS -----\n")

// Entrada
const anos = Number(question(" Digite sua idade, em anos: "))
const meses = Number(question(" E quantos meses?: "))
const dias = Number(question(" E quantos dias?: "))

// Processamento
const somadias = dias + meses*30 + anos*365

// Saída
console.log(`\n Você viveu um total de ${somadias} dias`)
}

main()