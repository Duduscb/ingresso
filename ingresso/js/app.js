function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    let quantidadeIngresso = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);

    if (quantidade < 0 ) {
        alert('Insira uma quantidade válida.');
    } else if (quantidade > quantidadeIngresso) {
        alert('Quantidade indisponível');
        document.getElementById('qtd').value = '';
    } else {
        quantidadeIngresso = quantidadeIngresso - quantidade;
        document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeIngresso;
        document.getElementById('qtd').value = '';
    }
}