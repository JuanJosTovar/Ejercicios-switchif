let figure = prompt("Ingrese una figura geometrica");

if (figure == "triangulo") {
    let number1 = parseFloat(prompt("Ingrese un numero"));
    let number2 = parseFloat(prompt("Ingrese otro numero"));
    op = number1 * number2 / 2;
    console.log("El area del triangulo es ",op);
} else if (figure == "rectangulo") {
    let number1 = parseFloat(prompt("Ingrese un numero"));
    let number2 = parseFloat(prompt("Ingrese otro numero"));
    op2 = number1 * number2;
    console.log("El area del rectangulo es ",op2);
} else if (figure == "circulo") {
    let number1 = parseFloat(prompt("Ingrese un numero"));
    op3 = 3.14 * number1 * number1;
    console.log("El area del circulo es ",op3);
} else {
    console.log("La figura no es valida");
}
