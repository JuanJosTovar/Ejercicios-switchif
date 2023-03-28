const peso = parseFloat(prompt("Ingresa tu peso en kilogramos: "));
const altura = parseFloat(prompt("Ingresa tu altura en metros: "));

const imc = peso / altura ** 2;

switch (true) {
  case (imc < 18.5):
    console.log("Su nivel de peso es Bajo peso");
    break;
  case (18.5 <= imc && imc <= 24.9):
    console.log("Su nivel de peso es Normal");
    break;
  case (25 <= imc && imc <= 29.9):
    console.log("Su nivel de peso es Sobrepeso");
    break;
  case (30 <= imc && imc <= 34.9):
    console.log("Su nivel de peso es Obesidad");
    break;

  default:
    console.log("Su nivel de peso es Obesidad extrema");;
}

if (!(18.5 <= imc && imc <= 24.9)){
    console.log("Su nivel de peso no se encuentra en un rango saludable, recomendacion: Visite el medico")
}