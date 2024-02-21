// 43. Um sistema de equações lineares do tipo , pode ser resolvido segundo mostrado abaixo Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.

import { question } from "readline-sync"

function main() {
console.log(" ----- EQUACAO LINEAR -----\n")
console.log(`AX + BY = C
DX + EY = F

Esse programa calculará o valor de x e y com base nos outros coeficientes`)

// Entrada
const a = Number(question(" A: "))
const b = Number(question(" B: "))
const c = Number(question(" C: "))
const d = Number(question(" D: "))
const e = Number(question(" E: "))
const f = Number(question(" F: "))
// Processamento
const x = calcularx(a,b,c,d,e,f)
const y = calculary(a,b,c,d,e,f)

// Saída
console.log(`\n O valor de X é: ${x}
 E o valor de Y é: ${y}`)
}

function calcularx(a,b,c,d,e,f){
    const x =  (c*e - b*f) / (a*e - b*d)
    return x
}

function calculary(a,b,c,d,e,f){
    const y = (a*f - c*d) / (a*e - b*d)
    return y
}
main()