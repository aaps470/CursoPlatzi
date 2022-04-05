/*Any: Como nos podemos ayudar del Any */

(() => {
  //any significa cualquiero, es decir, recibe cualquier tipo de dato
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};

  myDynamicVar = 'HOLA';

  //any a pesar de que puede ser cualquier tipo de dato eso nos trae problemas
  //por ejemplo no podemos usar los atajos para los diferentes tipos de datos
  //porque eso solo funciona si un elemento tiene un tipo de dato unico

  /*En este casi uso es 'as' que basicamente dice "Mira este elemento (myDinamicVar)"
  es any pero quiero que lo trates COMO string, y al ya tratarlo como string puedo usar
  los atajos de los tipos strings */
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);


  /*Esta es otra forma de usar el tratamiento de anys, pongo el tipo de dato que quiero que sea tratado
  entre <> y luego el elemento "quiero que (myDinamicVar sea tratado como number)"
  y como la vez anterior puedo usar los atajos que tiene number */
  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();
