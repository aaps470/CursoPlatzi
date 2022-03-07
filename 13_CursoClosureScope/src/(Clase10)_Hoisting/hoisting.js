/*El ‘levantamiento’ del que hablan es mas a fines didácticos y está bien, pero no es tan así, no es que FISICAMENTE levanta las declaraciones y las pone al principio como muchos explican. Lo que se hace en realidad es tomar ‘registros’ en memoria de donde está cada declaración(todo esto previo a que se ejecute el código en sí) y depende si es var, let, const o una función, JS va a asignarle referencias a cada una.
Si es:

var : asigna la referencia undefined (si de acá viene el famoso undefined)

let/const: asigna la referencia uninitialized(declarado pero no inicializado)

función: guarda un registro con la función entera(por eso la podemos llamar antes de que este creada) */