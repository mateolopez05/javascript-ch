

 function calcularImpuesto() {
  let amount = parseFloat(prompt('Ingrese el monto:'));

  while (isNaN(amount) || amount < 0) {
    alert('Por favor, ingrese un monto válido.');
    amount = parseFloat(prompt('Ingrese el monto:'));
  }

  const impuesto = amount * 0.75;
  const montoFinal = amount + impuesto;

  const resultadoElement = document.getElementById('resultado');
  resultadoElement.textContent = `El monto que vas a terminar pagando es de : $${montoFinal.toFixed(2)}`;
}

calcularImpuesto();
