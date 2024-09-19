let numero;

do {
    numero = parseInt(prompt("Digite um número"));

    if(isNaN(numero) || numero === 0) {
        alert("Digite um valor válido ou diferente de 0")
    } else if(numero % 2 === 0) {
        document.write(`É um número par e o dobro dele é: ${numero * 2}`)
    } else if(numero % 2 === 1) {
        document.write(`É um número ímpar e o triplo dele é: ${numero * 3}`)
    }
    
} while(isNaN(numero) || numero === 0)