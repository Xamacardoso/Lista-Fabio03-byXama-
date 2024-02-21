// 41. O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.

import { question } from "readline-sync"

function main() {
console.log(" ----- VALOR CARRO AO CONSUMIDOR -----\n Valor dos Impostos: 45%\n Porcentagem do distribuidor: 28%\n\n")

// Entrada
const precofabrica = Number(question(" Qual o valor de fábrica do veículo?: R$ "))

// Processamento
const impostos = calc_impostos(precofabrica)
const distribuidor = calc_distrib(precofabrica)
const valorcliente = precofabrica + impostos + distribuidor
// Saída
console.log(` Impostos: R$ ${impostos.toFixed(2)}
 Distribuidor: R$ ${distribuidor.toFixed(2)}
 Valor para o Cliente: R$ ${valorcliente.toFixed(2)}`)
}

function calc_impostos(valor){
    const imposto = valor*0.45
    return imposto

}

function calc_distrib(valor){
    const distribuidor = valor*0.28
    return distribuidor
}

main()