var jugador;
var computador;

if (jugador == "tijeras" && computador == "papel") {
    console.log("Ganaste");
}

else if (jugador == "piedra"  && computador == "tijeras") {
    console.log("Ganaste");
}

else if (jugador == "papel" && computador == "piedra") {
    console.log("Ganaste");
}

else if (jugador == computador) {
    console.log("Empate");
}

else {
    console.log ("Perdiste");
}