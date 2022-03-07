const buildCount = (i)=>{
    let count = i;
    const displayCount = () =>{
        console.log(count++);
    }
    return displayCount;
};

/*Podemos notar que el console.log() está de de la siguiente manera*/

//console.log(count++);

/*Y como ves, aparece count++, lo que quiere decir que estamos incrementando en 1 el valor de count, pero de la manera que está escrita, primero va a imprimir el count con el valor antes de incrementarlo
Esto se debe a que count++ es lo equivalente a decir count = count + 1 pero el momento en el que se hará ese incremento, está dado por la posición del ++, en éste caso, se hará después.
Si quisieramos que se muestre el valor de count después de hacerle el incremento, podríamos hacer ésto:*/

//count++;
//console.log(count);

/*O, de una manera más elegante, y aprendiendo como funciona el ++, así:*/

//console.log(++count);