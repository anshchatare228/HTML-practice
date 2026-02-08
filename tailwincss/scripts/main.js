let itemsArr = [];
let cartCount = 0;

function addItems(Productimage,productName, productPrice){
    const product ={
        id: Date.now(),
        image: Productimage,
        name: productName,
        price: productPrice,
        quantity: 1
    };

    itemsArr.push(product);

    localStorage.setItem('cartItems',JSON.stringify(itemsArr));

    cartCount++;
    updateCartDisplay();
    console.log('Added 1 items. Total items:', cartCount);
}

function updateCartDisplay(){
    const cartCountBadge = document.getElementById('cart-count');
    if(cartCountBadge){
        cartCountBadge.textContent = cartCount;
        if(cartCount > 0){
            cartCountBadge.classList.remove('hidden');
        } else {
            cartCountBadge.classList.add('hidden');
        }
    }
}

