const obj1 = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd',
        e: 'e',
    },
    editA() {
        this.a = 'Abcd'
    }
};


/*JSON.stringify

El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena JSON, reemplazando opcionalmente valores si se especifica una función de reemplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo.

JSON.stringify () convierte un valor en notación JSON que lo representa:*/

const stringifiedComplexObj = JSON.stringify(obj1);
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"


/* JSON.parse

El método JSON.parse() analiza una cadena de texto (string) como JSON, transformando opcionalmente el valor producido por el análisis.*/

const obj2 = JSON.parse(stringifiedComplexObj); 
// {a: "a", b: "b", c: {d: "d", e: "e"}}

/* ### [Why JSON.parse(JSON.stringify()) is a bad practice to clone an object in JavaScript]

- Puedes perder tipos de datos.

- JavaScript no te avisara cuando pierdas algún tipo de dato al usar JSON.stringify(), asi que GG mi rey

- Convierte tipos de datos no soportados en soportados, como **`infinity`** y **`NaN`** en **`null`**

- Los tipos de datos **`Date`** serán parseados como **`strings`,** no como **`Date`**

- No es tan rápido y eficiente.*/