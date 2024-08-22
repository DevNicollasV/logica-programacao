const modelo = prompt("Digite o Modelo do carro");
const preco = Number(prompt("Digite o preço do carro"));

const calcular = preco / 2;
const dividir = (preco / 12).toFixed(2);
document.write(`O modelo é ${modelo}, o valor desse carro é R$${preco} e você tem que dar entrada de 50%, que é R$${calcular} e em 12x fica R$${dividir} `)