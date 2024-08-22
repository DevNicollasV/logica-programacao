const lado1 = Number(prompt("Digite o valor do Primeiro lado"));
const lado2 = Number(prompt("Digite o valor do Segundo lado"));
const lado3 = Number(prompt("Digite o valor do Terceiro Lado"));

const calcular = lado1 + lado2

if(calcular > lado3) {
    document.write("Você conseguiu montar um triângulo")
} else {
    document.write("Você não consegue formar um triângulo porque a soma dos dois primeiros lados é maior que o terceiro lado")
}