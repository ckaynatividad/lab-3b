const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');
const dogImg = document.getElementById('dog');
const catImg = document.getElementById('cat');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');


horseImg.addEventListener('click', ()=>{
    horseSound.play();
    horseImg.classList.add('selected');
});

dogImg.addEventListener('click', ()=>{
    dogImg.classList.add('selected');
    dogSound.play();
    
});

catImg.addEventListener('click', ()=>{
    catSound.play();
    catImg.classList.add('selected');
});

document.addEventListener('keypress', event =>{
    if (event.key === 'h') {
        horseSound.play();
        horseImg.classList.add('selected');
    } else if
    (event.key === 'd') {
        dogSound.play();
        dogImg.classList.add('selected');
    } else if
    (event.key === 'c') {
        catSound.play();
        catImg.classList.add('selected');
    }

});