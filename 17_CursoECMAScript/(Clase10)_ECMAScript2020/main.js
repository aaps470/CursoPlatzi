const button = document.getElementById("btn");

button.addEventListener('click', async function(){
    const module = await import('./file.js');
        module.hello();
});

//La implementacion de ES11 es el import dinamico, ahora puedo llamar un import desde un closure interno y no solo desde el inicio del codigo