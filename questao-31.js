// 31. Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import { question } from "readline-sync"

function main() {
console.log(" ----- BINARIO PARA DECIMAL -----\n")

// Entrada
const binario = Number(question(" Digite um número binário(4 dígitos): "))

// Processamento
const decimal = bin2dec(binario)

// Saída
console.log(`\n Na forma binária: ${binario}
 Na forma decimal: ${decimal}`)
}

function bin2dec(bin) {
    const milhar = Math.floor(bin/1000)
    let resto = bin % 1000
    const centena = Math.floor(resto / 100)
    resto = resto % 100
    const dezena = Math.floor(resto / 10) 
    const unidade = resto % 10

    const numero = milhar*8 + centena*4 + dezena*2 + unidade*1
    return numero
}
main()