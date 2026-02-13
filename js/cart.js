let totalPrice = 0;

// plant by id 
const specificPlant = async (id) => {
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        const data = await res.json()
        detail = data.plants;
        const cartModalId = document.getElementById('cart-details')
        const cartModalContainer = document.getElementById('cart-detail-content');
        cartModalContainer.innerHTML = `
            <h3 class="font-bold text-2xl mb-2">${detail.name} has been added to the cart</h3>
        `
        cartModalId.showModal();
        cartAdded(data.plants);
    }
    catch (err) {
        console.error('Error', err);
    }
}

// cart section
const cartAdded = (plant) => {
    // console.log(plant);
    const productPrice = parseInt(plant.price);
    // console.log(productPrice);
    priceIncrement(productPrice);
    const cartContainer = document.getElementById('cartData');
    const cartDiv = document.createElement('div');
    cartDiv.innerHTML = `
        <div id="cart-${plant.id}" class="flex items-center justify-between bg-[#F0FDF4] rounded-lg px-3 py-2 mb-2">
            <div>
                <h3 class="font-bold text-sm">${plant.name}</h3>
                <p class="opacity-50">৳${plant.price}</p>
            </div>
            <div>
                <button onclick="removeCartItem(${plant.id}, ${plant.price})" class="btn border-none bg-transparent"><i class="fa-solid fa-xmark" style="color: #b2bed2;"></i></button>
            </div>
        </div>
    `
    cartContainer.appendChild(cartDiv);
}

// cart remove section
const removeCartItem = (id, price) => {
    // console.log(id)
    document.getElementById(`cart-${id}`).remove();
    const productPrice = parseInt(price);
    totalPrice -= productPrice;
    // console.log(totalPrice)
    const priceContainer = document.getElementById('price');
    priceContainer.innerText = '৳' + totalPrice;
}

// price update
const priceIncrement = (price) => {
    // console.log(price);
    totalPrice += price;
    // console.log(totalPrice);
    const priceContainer = document.getElementById('price');
    priceContainer.innerText = '৳' + totalPrice;
}