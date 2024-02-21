// 32. Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

import { question } from "readline-sync"

function main() {
    console.log(" ----- DIFERENÇA INVERSO DE 3 DIGITOS -----\n")

    // Entrada
    const numero = Number(question(' Digite um número: '))

    // Processamento
    const inverso = inverso_numero(numero)
    const resultado = numero - inverso

    // Saída
    console.log(` -->  ${numero} - ${inverso} = ${resultado}`)
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