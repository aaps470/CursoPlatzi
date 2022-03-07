// Codigo del cuadrado

console.group ("Cuadrados");


function perimetroCuadrado(lado) {
    return  lado * 4;
}
 

function areaCuadrado(lado) {
    return  lado * lado;
}


console.groupEnd();


// Codigo del Triangulo

console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;

}

console.groupEnd();


//Codigo del Circulo

console.group("Circulos");


function diametroCirculo(radio) {
    return radio + radio;
}

// PI
const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return PI * (radio * radio);
}

console.groupEnd();


//Aqui interactuamos con el HTML

//Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = Number(input.value);

    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es " + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = Number(input.value);

    const area = areaCuadrado(value);
    alert("El area del cuadrado es " + area);
}

//Triangulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputLado1Triangulo");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("InputLado2Triangulo");
    const lado2 = Number(input2.value);

    const input3 = document.getElementById("InputBaseTriangulo");
    const base = Number(input3.value);

    const perimetro = perimetroTriangulo(lado1,lado2,base);
    alert("El perimetro del triangulo es " + perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputBaseTriangulo");
    const base = Number(input1.value);

    const input2 = document.getElementById("InputAlturaTriangulo");
    const altura = Number(input2.value);

    const area = areaTriangulo(base, altura);
    alert("El area del triangulo es " + area);
}

//Circulo

function calcularDiametroCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = Number(input.value);

    const diametro = diametroCirculo(radio);
    alert("El diametro del circulo es " + diametro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = Number(input.value);

    const area = areaCirculo(radio);
    alert("El area del circulo es " + area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const radio = Number(input.value);

    const perimetro = perimetroCirculo(radio);
    alert("El perimetro del circulo es " + perimetro);
}