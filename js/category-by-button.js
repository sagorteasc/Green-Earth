// load category by button
const loadSpecificCategory = async (id) => {
    // alert(id)
    try {
        showSpinner();
        removeActiveBtn();
        const activeBtn = document.getElementById(`btn-${id}`);
        activeBtn.classList.add('bg-[#15803D]', 'text-white');
        setTimeout(async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/category/${id}`)
            const data = await res.json()
            // console.log(data.plants);
            displayPlants(data.plants);
            document.getElementById('spinner-desktop').classList.add('hidden');
            document.getElementById('spinner-mobile').classList.add('hidden');
        }, 2000);
    }
    catch (err) {
        console.error('Error', err)
    }
}