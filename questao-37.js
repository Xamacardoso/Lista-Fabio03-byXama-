// 37. Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

import { question } from "readline-sync"

function main() {
console.log(" ----- DIAS PARA ANOS, MESES, DIAS -----\n")

// Entrada
const idadedias = Number(question(" Digite sua idade, em dias: ")) 

// Processamento
const idade = dias_para_amd(idadedias)

// Saída
console.log(`\n A sua idade é de ${idade.anos} anos, ${idade.meses} meses e ${idade.dias} dias`)

}

function dias_para_amd(idadedias){
    const anos = Math.floor(idadedias/365)
    let resto = idadedias%365
    const meses = Math.floor(resto/30)
    const dias = resto%30

    return {
        anos,
        meses,
        dias
    }
}

main()