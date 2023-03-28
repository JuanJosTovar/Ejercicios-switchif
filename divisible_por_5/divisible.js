let number = parseInt(prompt("Ingrese un numero"));

operacion = number % 5 == 0;

switch (operacion) {
    case true:
        console.log("Este numero es divisible por 5");
        break;
    default:
        console.log("Este numero no es divisible por 5");
        break;
}