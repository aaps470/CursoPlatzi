/*Este tipo de dato es la mejora de any, ya que nos da la flexibilidad que en ocasiones queremos pero sin apagar por completo el análisis de código estático. Unknown nos fuerza a hacer una verificación de tipo.*/

let anyVar: any;
anyVar = true;
anyVar = undefined;
anyVar = 1;

let isNew: boolean = anyVar;


let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = 1;

//Con unknow siempre hay que hacer verificacion de tipos para poder trabajr con el

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

const parse = (str: string) => {
  return JSON.parse(str);
}
