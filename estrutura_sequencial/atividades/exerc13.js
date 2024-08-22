const titulo = prompt("Digite o titulo do Video");
const minutos = Number(prompt("Digite o tempo do filme em minutos"));

document.write(`<h1> O filme é: ${titulo} </h1><br>`);

const converter = (minutos) => {
    const horas = Math.floor(minutos / 60);
    const min = minutos % 60;
    const textoHoras = `0${horas}:00h:0${min}:00    `;

    return `${textoHoras}`
};

const funcaoCoverter = converter(minutos);
document.write(`<h1> A conversão é: ${funcaoCoverter} </h1>`);