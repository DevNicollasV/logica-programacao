let numero, numPerfeito = 0

do {
    numero = parseInt(prompt("Digite um número para saber se ele é Perfeito"))
    if(numero <= 0 || isNaN(numero)) {
        alert("Número digitado inválido")
    }
} while(numero <= 0 || isNaN(numero))

for(let i = 1; i < numero; i++) {
    if(numero % i === 0) {
        numPerfeito = numPerfeito + i
    }
}

if(numPerfeito === numero) {
    document.write(`O número ${numero} é um número Perfeito`)
} else {
    document.write(`O número ${numero} não é um número Perfeito`)
}