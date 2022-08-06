document.getElementById('id');
//nos permite obtener un elemento a través de su id. 

document.getElementsByClassName('class');
// obtiene un array con todos los elementos hijos que tengan esa clase, ojo “getElementByClassName” no existe, es decir no podremos obtener solo 1 elemento con esa clase.

document.getElementsByTagName('div');
// con este método obtenemos una lista o “array list” con todos los elementos que tengan esa etiqueta, ejemplo todos los divs. Al igual que con el método anterior no hay posibilidad de usarlo en singular, siempre tendremos que usar getElements

document.querySelector();
// nos permite buscar de 3 formas, con id, clase o tagName. A diferencia de los 2 anteriores este nos devuelve 1 solo elemento, el primero que contenga el valor que se le paso. Id => (’#id’), class => (’.class’), tagName (‘div’)

document.querySelectorAll();
// este método retorna una array list con todos los elementos que tengan ese selector (id, class o tagName)