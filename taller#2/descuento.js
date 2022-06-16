

const calcularPDescuento = (precio, descuento) =>  {
    const PprecioDescuento = 100 - descuento;
    const PDescuento = (precio * PprecioDescuento) / 100
    return PDescuento;
}


const calcularPriceDiscount = document.getElementById('calcular')

calcularPriceDiscount.addEventListener('click', () => {
    const precio = document.getElementById('InputPrice').value;
    const descuento = document.getElementById('InputDiscount').value;
    const p = document.querySelector('.result');

    p.innerHTML = `El Precio con Descuento es de: ${calcularPDescuento(precio, descuento)}`;  

})


