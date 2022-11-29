// h1 { color:red} similar a css



const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input)

console.log({
  h1,
  p,
  parrafito,
  pid,
  input
})

h1.innerHTML = 'Papito <br> feo';
h1.innerText = 'Papito <br> feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');


input.value = "456"


const img = document.createElement('img');

img.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Platzi.jpg/1200px-Platzi.jpg');

console.log(img);

pid.append(img);