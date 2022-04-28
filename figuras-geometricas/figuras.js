// Código del cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

// Código del triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// PI
const PI = Math.PI;

// Diametro
const diametroCirculo = (radio) => radio * 2

// Circunferencia
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área
const areaCirculo = (radio) => (radio * radio) * PI;


// Interactuamos con el HTML
// Cuadrado
const ladoSquare = document.getElementById('lado');
const perimetroSquare = document.querySelector('.result-perimeter--square');
const areaSquare = document.querySelector('.result-area--square');
const calcularSquare = document.querySelector('.calcularSquare');

calcularSquare.addEventListener('click', () => {
    const valor = ladoSquare.value;
    perimetroSquare.innerHTML = `${perimetroCuadrado(valor)}cm2`
    areaSquare.innerHTML = `${areaCuadrado(valor)}cm2`;
})

// Triangulo
const ladoTriangle_1 = document.getElementById('lado1');
const ladoTriangle_2 = document.getElementById('lado2');
const baseTriangle = document.getElementById('base');
const alturaTriangle = document.getElementById('altura');
const perimeterTriangle = document.querySelector('.result-perimeter--triangle');
const areaTriangle = document.querySelector('.result-area--triangle');
const calcularTriangle = document.querySelector('.calcularTriangle');

calcularTriangle.addEventListener('click', () => {
    const lado1 = ladoTriangle_1.value;
    const lado2 = ladoTriangle_2.value;
    const base = baseTriangle.value;
    const altura = alturaTriangle.value;

    perimeterTriangle.innerHTML = `${perimetroTriangulo(lado1,lado2,base)}cm2`;
    areaTriangle.innerHTML = `${areaTriangulo(base,altura)}cm2`;
})

// Circulo
const ladoCircle = document.getElementById('radio');
const perimetroCircle = document.querySelector('.result-perimeter--circle');
const areaCircle = document.querySelector('.result-area--circle');
const calcularCircle = document.querySelector('.calcularCircle');

calcularCircle.addEventListener('click', () => {
    const radio = ladoCircle.value;

    perimetroCircle.innerHTML = `${perimetroCirculo(radio)}cm2`;
    areaCircle.innerHTML = `${areaCirculo(radio)}cm2`;
})

