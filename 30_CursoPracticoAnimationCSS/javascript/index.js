const modal = document.querySelector('.modal');
const btnHero = document.querySelectorAll('.btn-superhero');
const close = document.querySelector('.modal__content--close');

btnHero.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('visible');  
    })
});

close.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('visible');
})
