// 45. Um algoritmo para gerenciar os saques de um caixa eletrônico deve possuir algum mecanismo para decidir o numero de notas de cada valor que deve ser disponibilizado para o cliente que realizou o saque. Um possível critério seria o da "distribuição ótima" no sentido de que as notas de menor valor disponíveis fossem distribuídas em número mínimo possível. Por exemplo, se a maquina só dispõe de notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia solicitada de R$ 87,o algoritmo deveria indicar uma nota de R$ 50, três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva um algoritmo que receba o valor da quantia solicitada e retorne a distribuição das notas de acordo com o critério da distribuição ótima.

import { question } from "readline-sync"

function main() {
console.log(" ----- CAIXA ELETRONICO -----\n")

// Entrada
const dinheiro = Number(question(" Quantos reais deseja sacar: R$ "))

// Processamento
const notas = calcularnotas(dinheiro)

// Saída
console.log(`
Notas de 50: ${notas.n50}
Notas de 10: ${notas.n10}
Notas de 5: ${notas.n5}
Notas de 1: ${notas.n1}`)
}

function calcularnotas(valor){
    const n50 = Math.floor(valor/50)
    let resto = valor%50
    const n10 = Math.floor(resto/10)
    resto = resto %10
    const n5 = Math.floor(resto/5)
    const n1 = resto%5

    return {
        n50,
        n10,
        n5,
        n1
    }
}

main()