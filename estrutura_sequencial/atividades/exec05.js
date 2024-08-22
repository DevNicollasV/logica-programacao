let nota1, nota2, nota3
let nome 
let media

nome = prompt("Digite seu Nome")
nota1 = parseFloat(prompt("Digite a nota: ")); 
nota2 = parseFloat(prompt("Digite a nota: ")); 
nota3 = parseFloat(prompt("Digite a nota: ")); 

media = (nota1 + nota2 + nota3) / 3;
document.write(` Olá ${nome}, a sua média é: ${media}`);