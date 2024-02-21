// 35. Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.:número = 9534 ; soma = 9+5+3+4 = 21.
import { question } from "readline-sync"

function main() {
console.log(" ----- SOMA DE 4 DIGITOS -----\n")

// Entrada
const numero = Number(question(" Digite um número de 4 dígitos: "))

// Processamento
const milhar = Math.floor(numero/1000)
let resto = numero%1000
const centena = Math.floor(resto/100)
resto = resto%100
const dezena = Math.floor(resto/10)
const unidade = resto %10

const resultado = milhar + centena + dezena + unidade

// Saída
console.log(`\n Soma: ${milhar} + ${centena} + ${dezena} + ${unidade} = ${resultado}`)
}




main()