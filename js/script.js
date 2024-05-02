const pokemonName = document.querySelector('.pokemon_name')
const pokemonNumber = document.querySelector('.pokemon_number')
const pokemonImage = document.querySelector('.pokemon_image')
const form = document.querySelector('.form')
const input = document.querySelector('.input_search')
const prev = document.querySelector('.btn_prev')
const next = document.querySelector('.btn_next')


let pokemonSearch = 1
const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    if (APIResponse.status === 200) {
        const data = await APIResponse.json()
        return data

    }
}

const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = "Buscando..."
    pokemonNumber.innerHTML = ""
    const data = await fetchPokemon(pokemon)
    if (data) {

        //    const pokemonSprite= data.sprites.front_default
        pokemonName.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_default']
        input.value = ''
        pokemonSearch = data.id
    }else{
        pokemonImage.style.display='none'
        pokemonName.innerHTML = "Not found"
        pokemonNumber.innerHTML = ""
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase())
})  

prev.addEventListener('click', () => {
    if(pokemonSearch > 1){
        pokemonSearch--
        renderPokemon(pokemonSearch)

    }
    


})  

next.addEventListener('click', () => {
    pokemonSearch++
    renderPokemon(pokemonSearch)
    
})  
renderPokemon(pokemonSearch)