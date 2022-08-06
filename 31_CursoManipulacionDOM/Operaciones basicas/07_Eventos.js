// La función addEventListener() nos permite añadir eventos a nuestros elementos, la podemos usar de la siguiente manera:

miElemento.addEventListener("evento", manejador);

//En este caso, el manejador debe ser una función callback que se ejecutará cuando el evento sea disparado. Es muy común verlo como una función anónima:

button.addEventListener("click", () => {
	alert("Me has clickado 😄");
});




// Sin embargo, la mejor práctica es crear funciones por separado, así siempre tendremos una referencia a dicha función (con una función anónima no tenemos nada que la identifique, de ahí su nombre


const miFuncionManejadora = () => {
    alert("Me has clickado 😄");
};

button.addEventListener("click", miFuncionManejadora) ;
// Presta atención como la estamos mandando sin paréntesis, porque de esa forma solo le pasamos la referencia de la función, si le pusieramos paréntesis entonces la estaríamos ejecutando.




//Y esto tiene la ventaja de que podemos remover los eventos cuando queramos ya que tenemos la referencia de la función manejadora 😄

const miFuncionManejadoraV2 = () => {
    alert("Me has clickado 😄")
};

// Agrego el evento
button.addEventListener("click", miFuncionManejadoraV2);

// Quito el evento
button.removeEventListener("click", miFuncionManejadoraV2);