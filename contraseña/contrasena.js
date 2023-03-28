let contrasena = prompt ("Ingrese una contraseña");

if (contrasena.length >=8 && contrasena.length <=15 && contrasena.includes(" ")) {
    console.log("La contraseña es valida");
} else {
    console.log("La contraseña no cumple los requisitos")
}