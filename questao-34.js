// 34. Leia 3 números, calcule e escreva a média dos números.

import { question } from "readline-sync"

function main() {
console.log(" ----- MEDIA DE 3 NUMEROS -----\n")

// Entrada
const num1 = Number(question(" DIGITE O PRIMEIRO NUMERO: "))
const num2 = Number(question(" DIGITE O SEGUNDO NUMERO: "))
const num3 = Number(question(" DIGITE O TERCEIRO E ÚLTIMO NUMERO: "))

// Processamento
const resultado = media3numeros(num1, num2, num3)

// Saída
console.log(`\n A média desses números é: (${num1} + ${num2} + ${num3}) / 3  
 Média: ${resultado.toFixed(1)}`)

}

function media3numeros(n1,n2,n3){
    const media = (n1 + n2 + n3)/3
    return media
}

main()