function converter(){
    const dolar = Number(document.getElementById("valorDolar").value)
    const resultado = document.getElementById("resultado")

    if(dolar !== 0){
        const conversaoDolar = dolar * 5.70
        resultado.innerHTML = `<p>US$ ${dolar.toFixed(2)} = R$ ${conversaoDolar.toFixed(2)}</p>`
        resultado.style.color = "green"
        resultado.style.fontWeight = "bold"
    } else{
        resultado.innerHTML = `<p> Digite um valor válido</p>`
        resultado.style.color = "red"
        resultado.style.fontWeight = "bold"
    }
}