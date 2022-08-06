// También debemos aprender a eliminar nodos dentro del HTML, si podemos agregarlos… ¿Por qué no podríamos eliminarlos? ¡Claro que se puede!, y para ello, JavaScript nos ofrece 3 formas:

// parentElement.removeChild(): Elimina un elemento hijo a partir del elemento padre:

// Nota: En la clase se hizo con $0, pero yo te lo dejo en cómo lo harías normalmente con JavaScript

// Selecciono el elemento que quiero eliminar
const nodoAEliminar = document.querySelector("selector")
// Selecciono a su padre directo
const padreElement = nodoAEliminar.parentElement
// Lo elimino
padreElement.removeChild(nodoAEliminar);

// --------------------------------------------------------------------------

// docuement.remove(): Es la evolución de removeChild Y… tampoco es soportado por Internet Explorer ¬¬!

// Selecciono el elemento que quiero eliminar
const nodoAEliminarV2 = document.querySelector("selector")

// Lo elimino uwu
nodoAEliminarV2.remove()

// --------------------------------------------------------------------------

// document.replaceChild(): Reemplaza un nodo (en pocas palabras lo elimina y mete otro)

// Selecciono un padre
const padre = document.querySelector("selector")

// Selecciono el elemento al que voy a reemplazar
const toReplace = document.querySelector("selector")

// Creo el nodo por el cual lo voy a reemplazar
const node = document.createElement("h1")
// Le pongo un texto
node.textContent = "Un texto cualquiera"

// Lo reemplazo >:D!!!
parent.replaceChild(node, toReplace)