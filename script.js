const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
let result = document.querySelector("#result");

function bntOnClick() {
    console.log(Number(input1.value) + Number(input2.value));
    const sumaInput = Number(input1.value) + Number(input2.value);
    result.innerHTML = "El resultado es:"+ sumaInput;
}