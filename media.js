function calcularMedia() {
    const n1 = Number(document.getElementById("nota1").value)
    const n2 = Number(document.getElementById("nota2").value)
    const n3 = Number(document.getElementById("nota3").value)
    const resultado = document.getElementById("resultado")

    if (n1 && n2 && n3) {
        const media = (n1 + n2 + n3) / 3;

        if (media >= 7) {
            resultado.innerHTML = `Média: ${media.toFixed(2)}<br>Status: Aprovado`;
        } else {
            resultado.innerHTML = `Média: ${media.toFixed(2)}<br>Status: Reprovado`;
        }
    } else {
        resultado.innerHTML = "Por favor, preencha todas as notas.";
    }
}