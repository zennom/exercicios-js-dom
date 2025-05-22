function calcularDesconto() {
    const preco = Number(document.getElementById("preco").value);
    const desconto = Number(document.getElementById("desconto").value);
    const resultado = document.getElementById("resultado");

    if (preco > 0 && desconto >= 0) {
        const valorDesconto = preco * (desconto / 100);
        const precoFinal = preco - valorDesconto;

        resultado.innerHTML = `
            Valor do desconto: R$ ${valorDesconto.toFixed(2)} <br>
            Preço final com desconto: R$ ${precoFinal.toFixed(2)}
        `;
    } else {
        resultado.innerHTML = "Por favor, insira valores válidos.";
    }
}
