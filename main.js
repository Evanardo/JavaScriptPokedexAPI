

let form = document.querySelector('#pokeForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let pokeData = event.path[0][0].value
    console.log(pokeData);
    loadPokemon(pokeData);
    form.reset();
})

let getPokemon = async (pokeData)=> {
    try {
        let response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeData}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}


let loadPokemon = async (pokeData)=> {
    let data = await getPokemon(pokeData);
    console.log(data);
    let new_rows = `<tr><td scope='row'>${data.forms[0].name}</td></tr><tr><td scope='row'><img src=${data.sprites.other["official-artwork"].front_default}></td></tr>`;
    document.getElementById('pokemonBody').insertAdjacentHTML('afterbegin', new_rows);
}

let clearData = () => {
    document.getElementById('pokemonBody').innerHTML = '';
}