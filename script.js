const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const parrafito = document.querySelector(".parrafito");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");

console.log(input.value);


console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML="Patito <br> Feo";
h1.innerText="Patito <br> Feo";
/*
console.log(h1.getAttribute("pantalla"));
h1.setAttribute("pantalla","patito");
console.log(h1.getAttribute("pantalla"));
*/

h1.classList.add("rojo");
h1.classList.remove("rojo");
// h1.classList.toggle("rojo");
// h1.classList.constains("rojo"); //devuelve true o false

input.value = "123456";

//console.log(document.createElement("img"));
const img = document.createElement("img");
img.setAttribute("src",'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif');
console.log(img);
pid.appendChild(img);