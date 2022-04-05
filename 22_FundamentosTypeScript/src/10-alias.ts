/*Alias y tipos literales: Creando nuestros propios tipos */

(() => {
  //Con los Alias type puedo crear mi propio tipo de dato diciendole que tipos de datos soporta
  type UserID = string | number | boolean;
  let userId: UserID;


  //Literal Types

  let shirtSize: 'S' | 'M' | 'L' | 'XL';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  //shirtSize = 'XXl'; //Error porque no entra dentro del cojunto ya definido

  //Ejemplo 2 de Literal types

  type Sizes = 7 | 8 | 9 | 10;
  let shoesSize: Sizes;
  shoesSize = 7;
  shoesSize = 10;
  //shoesSize = 12 //Error porque no entra del del conjunto definido

  const greeting = (userId: UserID, size: Sizes) => {
    if(typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting('Andres', 10);
  greeting(1212, 7);

})();
