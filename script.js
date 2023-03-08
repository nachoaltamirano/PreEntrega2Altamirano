
let numeros = [];


function obtenerNumeros() {
  let numero1 = parseInt(document.getElementById("numero1").value);
  let numero2 = parseInt(document.getElementById("numero2").value);

  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Ingrese dos números válidos.");
    return;
  }

  numeros[0] = numero1;
  numeros[1] = numero2;
}


function sumar() {
  if (numeros.length !== 2) {
    alert("Ingrese dos números primero.");
    return;
  }

  let resultado = numeros[0] + numeros[1];
  document.getElementById("resultado").textContent = resultado;
  console.log("La suma de " + numeros[0] + " y " + numeros[1] + " es: " + resultado);
}

function restar() {
  if (numeros.length !== 2) {
    alert("Ingrese dos números primero.");
    return;
  }

  let resultado = numeros[0] - numeros[1];
  document.getElementById("resultado").textContent = resultado;
  console.log("La resta de " + numeros[0] + " y " + numeros[1] + " es: " + resultado);
}

function multiplicar() {
  if (numeros.length !== 2) {
    alert("Ingrese dos números primero.");
    return;
  }

  let resultado = numeros[0] * numeros[1];
  document.getElementById("resultado").textContent = resultado;
  console.log("La multiplicación de " + numeros[0] + " y " + numeros[1] + " es: " + resultado);
}

function dividir() {
  if (numeros.length !== 2) {
    alert("Ingrese dos números primero.");
    return;
  }

  if (numeros[1] === 0) {
    alert("No se puede dividir por cero.");
    return;
  }

  let resultado = numeros[0] / numeros[1];
  document.getElementById("resultado").textContent = resultado;
  console.log("La división de " + numeros[0] + " y " + numeros[1] + " es: " + resultado);
}

function porcentaje() {
  if (numeros.length !== 2) {
    alert("Ingrese dos números primero.");
    return;
  }

  let resultado = (numeros[0] * numeros[1]) / 100;
  document.getElementById("resultado").textContent = resultado;
  console.log(numeros[1] + "% de " + numeros[0] + " es: " + resultado);
}