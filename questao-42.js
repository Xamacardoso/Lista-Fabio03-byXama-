// 42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.

import { question } from "readline-sync"

function main() {
console.log(" ----- DISTANCIA ENTRE DOIS PONTOS -----\n")

// Entrada
const x1 = Number(question(" Posição x do ponto 1: "))
const y1 = Number(question(" Posição y do ponto 1: "))
const x2 = Number(question(" Posição x do ponto 2: "))
const y2 = Number(question(" Posição y do ponto 2: "))


// Processamento
const distancia = calcular_dist(x1,y1,x2,y2)

// Saída
console.log(`\n Ponto 1: (${x1},${y1})
 Ponto 2: (${x2},${y2})
 Distancia: ${distancia} unidades`)
}

function calcular_dist(x1,y1,x2,y2){
    const d = Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2)
    return d
}

main()