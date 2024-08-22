const numero = parseInt(prompt("Digite um número"));

if(numero % 3 == 0) {
    document.write("O número é multiplo de 3")
} else if(numero % 5 == 0) {
    document.write("O número é multiplo de  5")
} else {
    document.write("O numero que você digitou é multiplo de nenhum número")
}