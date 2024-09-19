let numero, contador = 0

do {
    numero = parseInt(prompt("Digite um número para saber se ele é primo"))
    if(numero <= 0 || isNaN(numero)) {
        alert("Digite um número inteiro ou maior que 0")
    }
} while(numero <= 0 || isNaN(numero))


// Essa estrutura vai repetir de 1 até o número que o usuário digitar
for(let i = 1; i <= numero; i++) {
    document.write(`${numero} % ${i} = ${numero % i} <br>`)
    //Número que o usuário digitou dividido pelo valor de 1
    if(numero % i === 0) {
        contador++ // Vai receber 1 a acda divisão com o resto 0
    }
}

// Fim da estrutura que vai repetir de 1 até o número que o usuário digitar

if(contador === 2) {
    document.write(`O número ${numero} é primo`)
} else {
    document.write(`O número ${numero} não é primo`)
}