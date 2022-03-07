//El alcance (scope) de una variable puede ser:
//1- Global:
var miNombre = "Diego";

//2- Local:
function nombre(){
    var miApellido = "De Granda";
    console.log(miNombre + " " + miApellido);
}

nombre(); //Devuelve "Diego De Granda"

//En todo el código podemos utilizar la variable global.
//Las variables locales sólo pueden ser accedidas 
//dentro de la función en la que fueron declaradas.