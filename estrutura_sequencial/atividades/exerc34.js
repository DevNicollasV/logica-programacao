let codigoCidade, numeroVeiculosPasseio, numeroVeiculosTransito

for(let i = 1; i <= 5; i++) {
    do {
        codigoCidade = parseInt(prompt("Digite o Código da Cidade"));
    
        if(isNaN(codigoCidade)) {
            alert("Digite um código válido")
        }
    
    } while (isNaN(codigoCidade));
    
    do {
        
        numeroVeiculosPasseio = parseInt(prompt("Digite o Número de Veículos de Passeio (2022)"))
    
        if(isNaN(numeroVeiculosPasseio)) {
            alert("Digite um valor válido")
        }
    
    } while (isNaN(numeroVeiculosPasseio));
    
    do {
        
        numeroVeiculosTransito = parseInt(prompt("Digite o Número de Veículos de Trânsito com Vítimas (2022)"))
    
        if(isNaN(numeroVeiculosTransito)) {
            alert("Digite um valor válido")
        }
    
                
    } while (isNaN(numeroVeiculosTransito));
}

if(numeroVeiculosPasseio > numeroVeiculosTransito) {
    document.write(`A cidade ${codigoCidade} possui maior acidentes em Veículos de Passeio, com ${numeroVeiculosPasseio} acidentes <br>`)
} else {
    document.write(`A cidade ${codigoCidade} possui maior acidentes em Veículos de Passeio, com ${numeroVeiculosPasseio} acidentes`)
}