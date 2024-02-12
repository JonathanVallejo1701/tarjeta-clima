const btnSearch = document.getElementById('btnBuscar')
const inputCity = document.getElementById('searchCity')

btnSearch.addEventListener('click', () => {
    if (inputCity.value.trim().length > 0) {
        console.log('@@ input value =>', inputCity.value)
        buscarCiudad(inputCity.value)
    }
})

const buscarCiudad = async (ciudad) => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${ciudad}&language=es`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '704f69a6ccmsh61557f83a24a85ap1c6f59jsn1a2ad9c96277',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}