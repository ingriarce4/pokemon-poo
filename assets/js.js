
  function Pokemon (nombre1, color1, poderDeAtaque1, vida1){
  this.nombre1 = nombre;
  this.color1 = color;
  this.nivelDeAmistad1 = 0;
  this.vida1 = 100;
  this.poderDeAtaque1 = poderDeAtaque;

  this.mostrarPokemon1 = function(){  //agrego un método aquí llamo al objeto con this y le agrego la propiedad mostrarpokemon
    return "Hola soy " + this.nombre1 + "y soy de color" + this.color1:
  };

  this.aumentarAmistad1 = function(valor){  // agrego otro método
		this.nivelDeAmistad += valor;  // llamo a la propiedad y le agrego un valor
	};
  this.atacar = function(pokemon1){ //agrego otra acción que es la de atacar
		pokemon1.vida1 -= this.poderDeAtaque1;
	}
}

  function principal () { // funcion principal donde mencionamos a cada uno de los pokemones
    var pikachu = new Pokemon("Pikachu", "amarillo", 50, 40); //características de cada pokemon
  	var newtwo = new Pokemon("newtow", "naranja", 40, 50);
  	var mew = new Pokemon("mew", "azul", 20, 50);
  	var blastoise = new Pokemon("blastoise", "verde", 20, 50 );
  	pokemon1.push(pikachu); // esta propiedad agrega a cada uno estos pokemones al html en select
  	pokemon1.push(newtwo);
  	pokemon1.push(mew);
  	pokemon1.push(blastoise);

  	llenarSelect("pokemon1.1", pokemon); //agrega al select
  	llenarSelect("pokemon2.1", pokemon);

  }

  function llenarSelect(idSelect, arrayPokemon){ //esta funcion agrega los atributos del select
  	var select = document.getElementById(idSelect);
  	var opAux;
  	arrayPokemon.forEach(function(elemento){
  		opAux = document.createElement("option");
  		opAux.innerHTML =  elemento.nombre;
  		select.appendChild(opAux);
  	});
  }

  function pelear(){ // funcion que hará pelear a los pokemones
  	var pok1 = document.getElementById("pokemon1.1").value;
  	var pok2 = document.getElementById("pokemon2.1").value;
  	var res = document.getElementById("resultados");

  	var pokemon1 = pokemon.filter(function(el){ //utiliza filter porque selceciona uno
  		return el.nombre1 == pok1; //retornamos en nombre y este es similar a la variable
  	})[0];
  	var pokemon2 = pokemon.filter(function(el){
  		return el.nombre1 == pok2;
  	})[0];

  	if(pokemon1 === pokemon2){
  		alert("Escoja dos pokemon diferentes");
  	}else if(pokemon2.vida <= 0){
  		alert(pokemon2.nombre + " no se puede atacar");
  	}else{
  		pokemon1.atacar(pokemon2);
  		res.innerHTML = pokemon1.nombre + " atacó a " + pokemon2.nombre + " y " + pokemon2.nombre + " tiene una vida de " + pokemon2.vida;
  	}
  }
  principal();
