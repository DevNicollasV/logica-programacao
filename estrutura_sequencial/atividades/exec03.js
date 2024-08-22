let numero1, numero2, soma, subtracao, multiplicacao, divisao

numero1 = parseInt(prompt("Digite um número: "));
numero2 = parseInt(prompt("Digite um número: "));

soma = `A soma desses números é: ${numero1 + numero2} <br>`;
subtracao = `A subtração dos numeros é: ${numero1 - numero2} <br>`;
multiplicacao = `A multiplicação desses números deu: ${numero1 * numero2} <br>`;
divisao = `A divisão desses números deu: ${numero1 / numero2}`;

document.write(soma);
document.write(subtracao);
document.write(multiplicacao);
document.write(divisao);