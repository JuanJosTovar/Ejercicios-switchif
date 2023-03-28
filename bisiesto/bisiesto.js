let año = parseInt(prompt("Ingrese un año"));

if (año % 4 == 0 && año % 100 != 0) {
    console.log("Es año bisiesto");
} else{
    console.log("No es año bisiesto")
}