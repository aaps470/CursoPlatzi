
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = Number(inputPrice.value);

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = Number(inputDiscount.value);

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El Precio con descuento son: $" + precioConDescuento;
}

