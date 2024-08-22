// Declaração de Função (function hosting)
// First-class objects (Objetos de primeira Classe)

function falaOi() {
    console.log("Oi")
}

falaOi()

// Function expression
const souUmDado = function() {
    console.log("Sou um dado")
};

souUmDado()

function executaFuncao(funcao) {
    console.log("Vou executar sua função abaixo")
    funcao();
}

executaFuncao(souUmDado)

// Arrow Function

const arrowFunction = () => {
    console.log("Sou uma Arrow Function")
};

arrowFunction()

//Dentro de um objeto
const obj = {
    falar() {
        console.log("Estou falando")
    }
}

obj.falar()