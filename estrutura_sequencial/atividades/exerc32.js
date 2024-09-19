let qtdNumeros, numeroEscolhido
do {
    qtdNumeros = parseInt(prompt("Quantos números fatoriais você deseja saber?"))

    if(qtdNumeros <= 0 || isNaN(qtdNumeros)) {
        alert("Número inválido")
    }

} while (qtdNumeros <= 0 || isNaN(qtdNumeros));

for(let i = 1; i <= qtdNumeros; i++) {

    do {
        numeroEscolhido = parseInt(prompt(`Digite o ${i} número para saber o fatorial`))
    
        if(qtdNumeros <= 0 || isNaN(numeroEscolhido)) {
            alert("Número inválido")
        }
    
    } while (numeroEscolhido <= 0 || isNaN(numeroEscolhido));

    fatorial = 1
    for(let y = 1; y <= numeroEscolhido; y++) {
        fatorial = fatorial * y
    }

    document.write(`Fatorial de ${numeroEscolhido} é ${fatorial} <br>`)

}