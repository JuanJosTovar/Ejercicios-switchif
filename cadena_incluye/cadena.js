let cadena = prompt("Ingrese una cadena de texto");
switch (cadena.includes("ADSO") && cadena.includes("desarrolladores")) {
    case true:
        console.log("La cadena tiene ADSO y desarrolladores");
        break;

    default:
        console.log("La cadena no tiene ADSO y desarrolladores")
        break;
}