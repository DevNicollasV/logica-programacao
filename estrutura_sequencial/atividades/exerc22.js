const ano = parseInt(prompt("Digite o Ano"));

if(ano % 4 == 0) {
    document.write(`O ano ${ano} é bissexto`)
} else {
    document.write(`O ano ${ano} não é bissexto`)
}