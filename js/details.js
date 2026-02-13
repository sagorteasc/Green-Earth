// show details of cards
const cardDetails = async (id) => {
    // console.log(id);
    try {
        const res = await fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        const data = await res.json()
        details = data.plants;
        const modalId = document.getElementById('details')
        const modalContainer = document.getElementById('detailContent');
        modalContainer.classList.add('space-y-2')
        modalContainer.innerHTML = `
            <h3 class="font-bold text-2xl mb-2">${details.name}</h3>
            <img class="rounded-xl h-64 w-full mb-2" src="${details.image}">
            <p><span class="font-semibold text-gray-600 mb-2">Category: </span>${details.category}</p>
            <p><span class="font-semibold text-gray-600 mb-2">Price: </span>৳${details.price}</p>
            <p><span class="font-semibold text-gray-600">Description: </span>${details.description}</p>
        `
        modalId.showModal();
    }
    catch (err) {
        console.error('Error', err);
    }
}