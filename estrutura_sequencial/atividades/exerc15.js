const num1 = parseInt(prompt("Digite um número"));
const num2 = parseInt(prompt("Digite outro número"));

if(num1 > num2) {
    document.write(`${num1} é maior que ${num2}`)
} else {
    document.write(`${num2} é maior que ${num1}`)
}