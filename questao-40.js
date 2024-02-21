// 40. Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o no de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

import { question } from "readline-sync"

function main() {
console.log(" ----- FUMANTE -----\n")

// Entrada
const anos_fumando = Number(question(" A quantos anos você fuma?  "))
const cigarrosdia_fumando = Number(question(" Quantos cigarros, em média, você fuma por dia?  "))
const preco_fumando = Number(question(" Qual o preço da carteira de cigarros? R$  "))

// Processamento
const cigarros_fumados = cigstotal(anos_fumando, cigarrosdia_fumando)
const dinheirogasto = dincigs(cigarros_fumados, preco_fumando)

// Saída
console.log(`A quantidade de dinheiro que você gastou com cigarros até agora é de R$ ${dinheirogasto.toFixed(2)} `)
}

function cigstotal(anos, cigsdia){
    const dias = anos * 365
    const cigarrostotal = dias * cigsdia
    
    return cigarrostotal
}
function dincigs(cigarros,precocartela){
    const dinheiro = precocartela*((cigarros/20).toFixed(2))
    return dinheiro
}

main()