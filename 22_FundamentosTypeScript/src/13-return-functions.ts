(() => {
  const  calcTotal = (prices: number[]): string => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  }

  const rta = calcTotal([1,2,1,1,1]);
  console.log(rta);

  //Cosas interesantes con TS, con los tipos de datos inferidos y explicitos ocurren ciertas cosas.

  //en calcTotal si dejara el tipo de dato inferido regresaria un number pero en este caso lo puse explicito como un string, al principio daba error porque el return es un number, luego coloque el toString() y ya alli quita el error porque esta returnando un string y asi cumplo la condicion

  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
    //return(rta); //error
  }

  printTotal([1,2,11,1,1]);

  //En este caso ocurre algo parecido, cuando creas una funcion que no retorna nada se considera como una funcion de tipo void de manera inferida, aqui se puso de manera explicita pero si de casualidad pongo un return me daria error porque se supone que es void y void no retorna nada.
})();
