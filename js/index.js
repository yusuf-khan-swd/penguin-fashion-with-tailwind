
const h1 = document.querySelector('h1');
console.log(h1);

document.getElementById('btn-penguin').addEventListener('click', function() {
  const penguinHeadingElement = document.getElementById('penguin-heading');
  penguinHeadingElement.innerText = 'I AM PENGUIN'; 
});