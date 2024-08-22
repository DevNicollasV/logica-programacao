const hora = Number(prompt("Digite o Horário do Brasil"));

const validarHorario = () => {
    if(hora >= 0 && hora <= 23.59) {
        const calcular = hora + 5
        document.write(`O horário da França é ${calcular}h`)
    } else {
        const calcular = hora + 5
        document.write(`O horário da França é ${calcular}h`)
    }
};

validarHorario()