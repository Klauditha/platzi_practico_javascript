const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
let result = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

/*
btn.addEventListener("click", bntOnClick);
*/
function sumarInputValues(event) {
  //console.log({event});
  event.preventDefault();
  console.log(Number(input1.value) + Number(input2.value));
  const sumaInput = Number(input1.value) + Number(input2.value);
  result.innerHTML = 'El resultado es:' + sumaInput;
}
