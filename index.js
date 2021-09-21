function calcularParaDolar() {

    var valorEmReais = parseFloat(document.getElementById("valor").value)
    var resultado = document.getElementById("valoresConvertidos")
    var valorConvertido = valorEmReais / 5
    var valorEmDolar = valorConvertido.toFixed(2)

    var resultado = document.getElementById("valoresConvertidos")
    var valorJaConvertido = "O valor em Dolar é " + valorEmDolar + "$" 
    resultado.innerHTML = valorJaConvertido

}

function calcularParaEuro() {

    var valorEmReais = parseFloat(document.getElementById("valor").value)
    var resultado = document.getElementById("valoresConvertidos")
    var valorConvertido = valorEmReais / 6.5
    var valorEmEuro = valorConvertido.toFixed(2)

    var resultado = document.getElementById("valoresConvertidos")
    var valorJaConvertido = "O valor em Euro é " + valorEmEuro + "€" 
    resultado.innerHTML = valorJaConvertido

}

function calcularParaBitcoin() {

    var valorEmReais = parseFloat(document.getElementById("valor").value)
    var resultado = document.getElementById("valoresConvertidos")
    var valorConvertido = valorEmReais / 233322
    var valorEmBitcoin = valorConvertido.toFixed(2)

    var resultado = document.getElementById("valoresConvertidos")
    var valorJaConvertido = "O valor em Bitcoin é " + valorEmBitcoin + "₿" 
    resultado.innerHTML = valorJaConvertido

}