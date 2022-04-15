type UserId = string | number;
let userId: UserId;

userId = 'string';
userId = 1;

console.log("hola " + userId);



//Cosita que vi en internet e hice aqui:
//El problema es que recibiendo una oracion contar cuantas palabras se repiten
//-------------------------------

const sentence: string = "Hola mi nombre es Andres, futuro Frontend developer que solo quiere ganar mas dinero y estar mucho mas tranquilo de lo que estoy ahora."

const normalize = (word: string) => {
  return word.toLowerCase().replace(",", "").replace(".", "").replace("!", "");

}
