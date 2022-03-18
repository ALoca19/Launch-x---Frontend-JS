function fetchPokemon(pokeInput)
{
    let pokeI= pokeInput;
    const url="${pokeI}";
    fetch(url).then((rest) => {

        if(rest.status != "200")
        {
            console.log(rest);
            pokeI("insertar Otra imagen");
        }
        else{
            //console.log(rest);
            return rest.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprite.front_default;
        console.log(pokeImg);
        pokeImagen(pokeImg);
    })
}

//fetchPokemon();

function pokeImagen(url){
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src=url;
}

function imprimir(){
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase(); //tolowcase para poner todo en minuscula
    console.log("mensaje");
    fetchPokemon(pokeInput);
}