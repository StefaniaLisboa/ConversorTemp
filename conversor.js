function converter() {
    var valorTemperatura = document.getElementById("temperatura");
    var temperatura = valorTemperatura.value;
    var valorEmC = parseFloat(temperatura);
    var valorEmK = valorEmC + 273.15;
    console.log(valorEmK);
  
    var elementoValorConvertidoEmK = document.getElementById("valorConvertido");
    var valorConvertido = "A temperatura é " + valorEmK + " K";
    elementoValorConvertidoEmK.innerHTML = valorConvertido;
  }