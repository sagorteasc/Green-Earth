// load categories
const loadCategory = async () => {
    try {
        showSpinner();
        setTimeout(async () => {
            const res = await fetch('https://openapi.programming-hero.com/api/plants')
            const data = await res.json()
            // console.log(data.plants);
            displayPlants(data.plants);
            document.getElementById('spinner-desktop').classList.add('hidden');
            document.getElementById('spinner-mobile').classList.add('hidden');
        }, 2000);
    }
    catch (err) {
        console.error('Error', err);
    }
}

// display plants
const displayPlants = (plants) => {
    // console.log(plants)
    const plantsContainer = document.getElementById('plantSection');
    plantsContainer.innerHTML = '';
    plants.forEach(plant => {
        // console.log(plant);
        const plantCard = document.createElement('div');
        plantCard.className = 'card bg-base-100 shadow-sm border-1 border-slate-100'
        plantCard.innerHTML = `
            <figure class="p-5 pb-0">
                <img src="${plant.image}" class="rounded-xl h-44 w-full" />
            </figure>
            <div class="card-body">
                <h2 onclick="cardDetails(${plant.id})" class="card-title">${plant.name}</h2>
                <p>${plant.description}</p>
                <div class="flex items-center justify-between my-2">
                    <p class="text-[#15803D] bg-[#DCFCE7] rounded-[400px] px-3 py-1 grow-0">${plant.category}</p>
                    <p class="grow-0 font-semibold text-sm text-[#1F2937]">৳${plant.price}</p>
                </div>
                <button onclick="specificPlant(${plant.id})" class="btn w-full bg-[#15803D] text-white rounded-[999px]">Add to Cart</button>
            </div>
        `
        plantsContainer.appendChild(plantCard);
    });
}


loadCategory()