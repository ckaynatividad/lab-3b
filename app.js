const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');
const dogImg = document.getElementById('dog');
const catImg = document.getElementById('cat');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');


horseImg.addEventListener('click', ()=>{
  horseSound.play();
});

dogImg.addEventListener('click', ()=>{
  dogSound.play();
});

catImg.addEventListener('click', ()=>{
  catSound.play();
});