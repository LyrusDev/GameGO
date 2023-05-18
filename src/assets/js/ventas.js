// Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

// Abrir
cartIcon.onclick = () => {
    cart.classList.add('active');
};
// Cerrar
closeCart.onclick = () => {
    cart.classList.remove('active');
};


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    var removeCartBtn = document.getElementsByClassName('cart-remove')
    console.log(removeCartBtn);

    for (var i = 0; i < removeCartBtn.length; i++) {
        var button = removeCartBtn[i]
        button.addEventListener('click', removeCartItem)
    }

    // Cantidad
    var quantityInputs = document.getElementsByClassName('cart-quantity');

    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    // Agregar a carrito
    var addCart = document.getElementsByClassName('add-cart');

    for (var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked);
    }

    // Boton de comprar
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}

// Buy button
function buyButtonClicked() {
    alert('Tu compra se ha realizado con exito!')
    var cartContent = document.getElementsByClassName('cart-content')[0];

    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }

    updateTotal();
}

// Eliminar items
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();

    updateTotal();
}

// Cambios de cantidad
function quantityChanged(event) {
    var input = event.target;

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }

    updateTotal();
}

// Agregar al carrito
function addCartClicked(event) {
    var button = event.target;
    var shopProdcuts = button.parentElement;
    var title = shopProdcuts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProdcuts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProdcuts.getElementsByClassName('product-img')[0].innerText;

    addProductToCart(title, price, productImg);
    updateTotal();
}


function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box')
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')

    for (var i = 0; i < cartItemsNames.length; i++) {
        alert('Ya has agregado este juego al carrito de compras')
        return;
    }
}

var cartBoxContent = `
                <img src="${productImg}" alt="" class="cart-img">

                <div class="detail-box">
                  <div class="cart-product-title">${title}</div>
                  <div class="cart-price">${price}</div>
                  <input type="number" value="1" class="cart-quantity">
                </div>
                <!-- Eliminar -->
                <mat-icon color="accent" class="cart-remove">delete</mat-icon>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);


// Sumar total
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;

    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value;

        total = total + (price * quantity);
    }

    // Precio con centimos
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName('total-price')[0].innerText = '$' + total;
}
