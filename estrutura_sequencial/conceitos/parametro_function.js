// arguments -> Que sustenta todos os argumentos enviados
/*
function funcao(a, b, c) {
    let total = 0;
    for(let argumento of arguments) {
        total += argumento
    }

    console.log(total, a, b, c)
};

funcao(1, 2, 3, 4, 5, 6, 7);
*/

function funcao(a, b = 0) {
    console.log(a + b);
};

funcao(10);