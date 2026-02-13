// category buttons
const loadCategoryButtons = async () => {
    try {
        const res = await fetch('https://openapi.programming-hero.com/api/categories')
        const data = await res.json()
        // console.log(data.categories);
        displayCategoryBtns(data.categories);
    }
    catch (err) {
        console.error('Error', err);
    }
}

// display category
const displayCategoryBtns = (data) => {
    const categoryContainer = document.getElementById('categories');
    // console.log(data);
    data.forEach(item => {
        // console.log(item);

        // creating button
        const categorButtonContainer = document.createElement('div');
        categorButtonContainer.innerHTML = `
                <button id="btn-${item.id}" onclick="loadSpecificCategory(${item.id})" class="btn category-btn rounded-lg border-none shadow-none w-full font-normal text-sm p-4 mb-1">${item.category_name}</button>
        `
        categoryContainer.appendChild(categorButtonContainer);
    });
}

// show spinner
const showSpinner = () => {
    document.getElementById('plantSection').innerHTML = '';
    document.getElementById('spinner-desktop').classList.remove('hidden');
    document.getElementById('spinner-mobile').classList.remove('hidden');
}

// remove active button
const removeActiveBtn = () => {
    const nonActiveBtn = document.getElementsByClassName(`category-btn`);
    for (const btn of nonActiveBtn) {
        btn.classList.remove('text-white', 'bg-[#15803D]');
    }
}

loadCategoryButtons();