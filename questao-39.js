// 39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:

import { question } from "readline-sync"

function main() {
console.log(" ----- EXPRESSAO R S D -----\n")

// Entrada
const a = Number(question(" A: "))
const b = Number(question(" B: "))
const c = Number(question(" C: "))
// Processamento
const r = Math.pow((a+b),2 )
const s = Math.pow((b+c),2)
const d = (r + s)/2

// Saída
console.log(`
 D = (${a} + ${b})² + (${b} + ${c})² = ${r} + ${s} = ${d}
    -----------------      ---------
            2                 2
      `)
}

main()