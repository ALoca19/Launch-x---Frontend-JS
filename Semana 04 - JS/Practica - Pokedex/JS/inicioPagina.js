const poke_container = document.getElementById('poke_container');
const numeroPokemons = 898;

conseguirPokemons();

async function conseguirPokemons()
{
    
    for(var i=1; i<=numeroPokemons; i++)
    {
        await conseguirPokemon(i);
    }
}

async function  conseguirPokemon(iterador)
{
    const url =`https://pokeapi.co/api/v2/pokemon/${iterador}`;
    const res = await fetch(url);
    const pokemon = await res.json();

    //imprimirJson(pokemon);

    if(pokemon.status != "200")
    {
        crearTarjeta(pokemon);
    }
    
}

function imprimirJson(pokeInfo)
{
    //console.log(pokeInfo);
    console.log(pokeInfo.name);
}

function crearTarjeta(pokemon)
{
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  const { id, name, sprites, types } = pokemon;
  const type = types[0].type.name;
  const pokeInnerHTML = `
  <a onclick="pagPokemon('${name}')"><div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div></a>
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
	poke_container.appendChild(pokemonEl);
}

function pagPokemon(nombre)
{
    const nombrePokemon = nombre;
    
    window.location.href='./Pages/pokemon.html'+'?P_idProyecto='+nombre;
    //window.location="./Pages/pokemon.html";
    
    
}


