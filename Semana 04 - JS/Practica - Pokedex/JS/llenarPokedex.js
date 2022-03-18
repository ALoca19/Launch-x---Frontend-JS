//Aqui capturas la url en una variable
var locacion = window.location.href
//En esta eliminas los datos que no nesesitas quedandote con la variable
var datos_capturados = locacion.replace('file:///C:/Users/anita/Desktop/Launch%20x%20-%20Frontend%20JS/Semana%2004%20-%20JS/Practica%20-%20Pokedex/Pages/pokemon.html?P_idProyecto=', '')
//console.log(datos_capturados)

conexionApp();

async function conexionApp()
{

    const url =`https://pokeapi.co/api/v2/pokemon/${datos_capturados}`;
    const res = await fetch(url);
    const pokemon = await res.json();

    //imprimirJson(pokemon);

    if(pokemon.status != "200")
    {
        llenarPoke(pokemon);
    }
}

function llenarPoke(pokemon)
{
    
    document.getElementById("pokemonId").value = pokemon.id;
    document.getElementById("name-display").innerHTML = pokemon.name;
    document.getElementById("imgPokemon").src = pokemon.sprites.front_default;
    mostrarHabilitades(pokemon);
    mostrarMovimientos(pokemon);
    mostrarTipos(pokemon);
 
}

function mostrarHabilitades(pokemon)
{
    var Ha ="<b>Habilidades:</b><p> ";
    for(var i=0; i< pokemon.abilities.length; i++)
    {
        Ha+=pokemon.abilities[i].ability.name+", "
        //console.log(pokemon.abilities[i].ability.name);
    }
    Ha+="</p>";

    document.getElementById("habilitad").innerHTML = Ha;
    
}

function mostrarMovimientos(pokemon)
{
    var Mo ="<b>Movimientos:</b><p> ";
    if(pokemon.moves.length>5)
    {
        for(var i=0; i< 5; i++)
        {
        Mo+=pokemon.moves[i].move.name+", "
        //console.log(pokemon.moves[i].move.name);
        }
    }
    else
    {
        for(var i=0; i< pokemon.moves.length; i++)
        {
            Mo+=pokemon.moves[i].move.name+", ";
            //console.log(pokemon.moves[i].move.name);
        }
    }
    
    Mo+="</p>";

    document.getElementById("movimiento").innerHTML = Mo;
    
}

function  mostrarTipos(pokemon)
{
    var Tipos="";
    var Ti ="<b>Tipo: </b><p> ";

    
    //Tipos+="<img src='../Img/poison.png' height=50>";

   
    
    for(var i=0; i< pokemon.types.length; i++)
    {
        Ti+=pokemon.types[i].type.name+", ";
        Tipos+=("<img src='../Img/"+pokemon.types[i].type.name+".png' height=50>");
        //console.log(pokemon.types[i].type.name);
    }
    document.getElementById("pokemonType").innerHTML=Tipos;
    Ti+="</p>";
    document.getElementById("tipos").innerHTML = Ti;
    

}

function next()
{
    
}
