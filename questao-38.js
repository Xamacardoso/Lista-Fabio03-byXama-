// 38. Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.

import { question } from "readline-sync"

function main() {
console.log(" ----- SOMA DE 2 FRAÇÕES -----\n")

// Entrada
const num1 = Number(question(" Digite o numerador da primeira fração: "))
const den1 = Number(question(" Digite o denominador da primeira fração: "))
const num2 = Number(question(" Digite o numerador da segunda fração: "))
const den2 = Number(question(" Digite o denominador da segunda fração: "))
// Processamento
const fracao = somar_fracao(num1,den1,num2,den2)

// Saída
console.log(`\n
  ${num1}     ${num2}     ${fracao.numerador}
 --- + --- = ---
  ${den1}     ${den2}     ${fracao.denominador}`)
}

function somar_fracao(n1,d1,n2,d2) {
   const numerador = n1*d2 + n2*d1
   const denominador = d1*d2

    return {
        numerador,
        denominador
    }
}

main()