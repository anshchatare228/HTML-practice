// Render cart page from localStorage `cartItems`
const container = document.querySelector('.js-cart-list');

function readItems(){
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function saveItems(items){
    localStorage.setItem('cartItems', JSON.stringify(items));
}

function renderCart(){
    const items = readItems();
    if(!container) return;
    if(items.length === 0){
        container.innerHTML = `
            <div class="p-8 text-white">
                <h1 class="text-2xl">Your cart is empty</h1>
                <p class="mt-4 text-white/70">Add items from the store to see them here.</p>
            </div>`;
        updateHeaderBadge(items);
        return;
    }

    const itemsHtml = items.map((it, idx) => `
        <div class="flex items-center gap-4 mb-6">
            <img src="${it.image || 'media/hoodie.png'}" class="h-20 w-20 object-cover rounded" />
            <div>
                <h3 class="text-white text-lg">${it.name}</h3>
                <div class="text-white/80">Price: ₹${Number(it.price).toFixed(2)}</div>
                <div class="flex items-center gap-2 mt-2">
                    <button data-action="decrease" data-index="${idx}" class="px-2 bg-white/20 text-white rounded">-</button>
                    <span class="text-white">${it.quantity || 1}</span>
                    <button data-action="increase" data-index="${idx}" class="px-2 bg-white/20 text-white rounded">+</button>
                    <button data-action="remove" data-index="${idx}" class="ml-4 px-2 bg-red-500 text-white rounded">Remove</button>
                </div>
            </div>
        </div>
    `).join('');

    const subtotal = items.reduce((s, it) => s + (Number(it.price) * (it.quantity || 1)), 0);

    function shippingCost(shipping){
        return subtotal>5000 ? 0 : 149;
    }

    const gst = 0.18*subtotal;
    const shipping = shippingCost();
    const total = subtotal + gst + shipping;

    container.innerHTML = `
        <div class="ml-4 p-6">
            <h1 class="text-white text-2xl mb-6">Your cart</h1>
            <div class="grid grid-cols-2 gap-8">
                <div class="flex-col ml-2 mt-2">
                    ${itemsHtml}
                </div>
                <div class="p-4 bg-white/00 rounded-lg">
                    <h2 class="text-[1.5rem] font-semibold mb-4 text-white">Order Summary</h2>
                    <div class="flex justify-between mb-2 text-white"><span>Subtotal :</span><span>₹${subtotal.toFixed(2)}</span></div>
                    <div class="flex justify-between my-2 text-white"><span>GST(18%) :</span><span>₹${gst.toFixed(2)}</span></div>
                    <div class="flex justify-between mb-4 text-white"><span>Shipping :</span><span>₹${shipping.toFixed(2)}</span></div>
                    <div class="flex justify-between font-bold text-[1.2rem] border-t pt-4 text-white"><span>Total:</span><span>₹${total.toFixed(2)}</span></div>
                    <button id="checkout-btn" class="w-full mt-4 bg-white/30 text-white p-3 rounded-lg hover:bg-white/50">Checkout</button>
                </div>  
            </div>
        </div>
    `;

    updateHeaderBadge(items);
}

// Handle button clicks (increase/decrease/remove) using event delegation
container?.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-action]');
    if(!btn) return;
    const action = btn.getAttribute('data-action');
    const index = Number(btn.getAttribute('data-index'));
    const items = readItems();
    if(!items[index]) return;

    if(action === 'increase') items[index].quantity = (items[index].quantity || 1) + 1;
    else if(action === 'decrease') items[index].quantity = Math.max(1, (items[index].quantity || 1) - 1);
    else if(action === 'remove') items.splice(index, 1);

    saveItems(items);
    renderCart();
});

renderCart();