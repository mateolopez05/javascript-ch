// recomendable para declarar variables
 //let edad = 10;
 //let nombnre = "andres";

// no recomendable para declarar variables, ya no es buena practica
 //var cantidad = 6;
 
 // constantes
 //const NUMERO = 5;
 
 // camelCase let nombreBonitoGrande (primera palabra minuscula y segunda mayuscula, sin espacios)
 
 //let numeroUno = 5;
 //let numeroDos = 6;
 
 //let resultadoSuma = numeroUno + numeroDos;
 //let resultadoResta = numeroUno - numeroDos;
 //let resultadoMultiplicacion = numeroUno * numeroDos;
 //let resultadoDivision = numeroUno / numeroDos;
 
 
 //console.log("resultado suma",resultadoSuma);
 //console.log("resultado resta",resultadoResta);
 //console.log("resultado multiplicacion",resultadoMultiplicacion);
 //console.log("resultado division",resultadoDivision);

 //let nombre = " mat";

    //let mensajeCompleto = saludo + nombre;

    //console.log(mensajeCompleto);


 //prompt

 function calcularImpuesto() {
   const amountInput = document.getElementById('amount');
   const amount = parseFloat(amountInput.value);
 
   if (isNaN(amount) || amount < 0) {
     alert('Por favor, ingrese un monto válido.');
     return;
   }
   const impuesto = amount * 0.75;
   const montoFinal = amount + impuesto;
 
   const resultadoElement = document.getElementById('resultado');
   resultadoElement.textContent = `El monto a pagar es: $${montoFinal.toFixed(2)}`;
 }
 