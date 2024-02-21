// 33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

import { question } from "readline-sync"

function main() {
console.log(" ----- SOMA INVERSO -----\n")

// Entrada
const numero = Number(question(" Digite um número de 3 dígitos: "))

// Processamento
const inverso = inverso_numero(numero)
const resultado = numero + inverso

// Saída
console.log(`\n --->  ${numero} + ${inverso} = ${resultado}`)

}

function inverso_numero(num){

    const centena = Math.floor(num/100)
    const resto = num%100
    const dezena = Math.floor(resto/10)
    const unidade = resto%10

    const reverso = unidade*100 + dezena *10 + centena
    return reverso
}

main()