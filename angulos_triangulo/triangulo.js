let an1 = parseFloat(prompt("Ingrese un angulo"));
let an2 = parseFloat(prompt("Ingrese un segundo angulo"));
let an3 = parseFloat(prompt("Ingrese un ultimo angulo"));

resultado = an1 + an2 + an3;

switch (resultado) {
    case 180:
        console.log(resultado);
        console.log("Los angulos corresponden a un triangulo");
        break;

    default:
        console.log(resultado);
        console.log("Los angulos no corresponden a un triangulo");
        break;
}