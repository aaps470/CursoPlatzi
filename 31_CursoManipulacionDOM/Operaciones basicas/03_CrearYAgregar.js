// Al decir “crear nodos” nos referimos a crear elementos dentro de nuestro DOM. Para ello podemos hacer uso de:

// Solo se ha creado, aún no se agrega al DOM
const etiquetaH1 = document.createElement("h1");

// Solo se ha creado, aún no se agrega al DOM
const exampleText = document.createTextNode("¡Hola, Mundo!");


//Ejemplo:


// Obtengo el elemento padre
const parentElement = document.querySelector("selector")

// Creo el nodo a insertar
const h3 = document.createElement("h3")

// Creo el texto del nodo
const texto = document.createTextNode("Hola!")

// Inserto el texto al nodo
h3.appendChild(texto);

// Inserto el nodo al padre
parentElement.appendChild(h3)

// ---------------------------------------------------------------------------

// parentElement.append(): Es la evolución de appendChild, podemos agregar más de un nodo, puedes agregar texto y… no es soportado por Internet Explorer.

// Obtengo el elemento padre
const parentElementV2 = document.querySelector("selector")
// Agrego al elemento padre
parentElementV2.append("agrego un texto", document.createElement("div"))

// ---------------------------------------------------------------------------

// parentElement.insertBefore(): Inserta nodos antes del elemento que le pasemos como referencia, este nodo de referencia tiene que ser un hijo DIRECTO del padre

// Obtengo el elemento padre
const parentElementV3 = document.querySelector("selector")
// Creo un elemento
const titulo = document.createElement("h1")
// Obtengo la referencia del elemento del que quiero insertar antes:
const referencia = document.querySelector("selector")
// ¡Lo insertamos!
parentElementV3.insertBefore(titulo, referencia)

// ---------------------------------------------------------------------------

// parentElement.insertAdjacentElement(): Inserta nodos según las opciones que le pasemos:
// beforebegin: Lo inserta antes del nodo
// afterbegin: Lo inserta despues del nodo
// beforeend: Lo inserta antes de donde finaliza el nodo
// afterend: Lo inserta después de donde finaliza el nodo

// Obtengo el elemento padre
const parentElementV4 = document.querySelector("selector")
// Creo un elemento
const nodo = document.createElement("span")
parentElementV4.insertAdjacentElement("beforebegin", nodo)
