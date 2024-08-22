const nota1 = Number(prompt("Digite sua Primeira Nota"));
const nota2 = Number(prompt("Digite sua Segunda Nota"));
const nota3 = Number(prompt("Digite sua Terceira Nota"));

const calcular = ((nota1 + nota2 + nota3) / 3).toFixed(2);

if(calcular >= 7) {
    document.write(`Você está aprovado, tirou ${calcular}`);
} else {
    document.write(`Reprovado, você tirou ${calcular}`);
}