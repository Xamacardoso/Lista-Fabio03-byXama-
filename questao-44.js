// 44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.

import { question } from "readline-sync"

function main() {
console.log(" ----- LATAO QUANTIDADES -----\n")

// Entrada
const latao = (question(" Quantos kg de latão você deseja obter? "))

// Processamento
const cobre = latao*0.7
const zinco = latao*0.3

// Saída
console.log(`\n Para obter ${latao}kg de latão, são necessários:
 Cobre: ${cobre}kgs de Cobre
 Zinco: ${zinco}kgs de Zinco`)
}

main()