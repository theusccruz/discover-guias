const button = document.getElementById('openModal');
const modal = document.querySelector('#modal');

let modalIsInvisible = Array.from(modal.classList).includes('invisible');


button.addEventListener('click', e => {
   if (modalIsInvisible) {
       modal.classList.toggle('invisible');
       modalIsInvisible = !modalIsInvisible;
   }   
});

document.addEventListener('keypress', e => {    
    if (e.key == "d" && !modalIsInvisible) {
        modal.classList.toggle('invisible');
        modalIsInvisible = !modalIsInvisible;
    }
});