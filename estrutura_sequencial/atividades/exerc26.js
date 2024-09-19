// isNaN ->> Verificar o que foi digitado é um texto

/*

numero1 = 'sdsd'

if(isNaN(numero1)) {
    console.log("Digite um número válido")
}
*/

let numero1, numero2

do{
    numero1 = parseInt(prompt("Digite um número"));
    if(isNaN(numero1) || numero1 < 0) {
        alert("Número é inválido, digite um valor positivo e maior que 0")
    }
} while(isNaN(numero1) || numero1 < 0);

do{
    numero2 = parseInt(prompt("Digite outro número"));
    if(isNaN(numero2) || numero2 < 0) {
        alert("Número é inválido, digite um valor positivo e maior que 0")
    }
} while(isNaN(numero2) || numero2 < 0);

console.log(numero1 + numero2)