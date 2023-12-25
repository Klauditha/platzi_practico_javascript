# Test de JavaScript

Â¡Es hora de poner a prueba cuÃ¡nto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligarÃ¡ a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fÃ¡cil. Pero tengo mucha fe en ti, confÃ­o en que seguirÃ¡s mis consejos y no avanzarÃ¡s a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- EvalÃºa muy crÃ­ticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuÃ¡nto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tÃº. Vuelve al [Curso BÃ¡sico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente vÃ¡lido hacer bÃºsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es fÃ­sico o virtual.

Recuerda que **el Ã©xito no se mide por cuÃ¡nto tiempo te toma aprender**, esa mÃ©trica es relativamente inÃºtil. Mejor concÃ©ntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnologÃ­a.

Â¡Mucha suerte!


## Variables y operaciones

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es una variable y para quÃ© sirve?
- Â¿CuÃ¡l es la diferencia entre declarar e inicializar una variable?
- Â¿CuÃ¡l es la diferencia entre sumar nÃºmeros y concatenar strings?
- Â¿CuÃ¡l operador me permite sumar o concatenar?

### 2ï¸âƒ£ Determina el nombre y tipo de dato para almacenar en variables la siguiente informaciÃ³n:

- Nombre
- Apellido
- Nombre de usuario en Platzi
- Edad
- Correo electrÃ³nico
- Mayor de edad
- Dinero ahorrado
- Deudas

### 3ï¸âƒ£ Traduce a cÃ³digo JavaScript las variables del ejemplo anterior y deja tu cÃ³digo en los comentarios.

### 4ï¸âƒ£ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)


## Funciones

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es una funciÃ³n?
- Â¿CuÃ¡ndo me sirve usar una funciÃ³n en mi cÃ³digo?
- Â¿CuÃ¡l es la diferencia entre parÃ¡metros y argumentos de una funciÃ³n?

### 2ï¸âƒ£ Convierte el siguiente cÃ³digo en una funciÃ³n, pero, cambiando cuando sea necesario las variables constantes por parÃ¡metros y argumentos en una funciÃ³n:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```


## Condicionales

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es un condicional?
- Â¿QuÃ© tipos de condicionales existen en JavaScript y cuÃ¡les son sus diferencias?
- Â¿Puedo combinar funciones y condicionales?

### 2ï¸âƒ£ Replica el comportamiento del siguiente cÃ³digo que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un aÃ±o");
       break;
   case "ExpertPlus":
       console.log("TÃº y alguien mÃ¡s pueden tomar TODOS los cursos de Platzi durante un aÃ±o");
       break;
}
```

### 3ï¸âƒ£ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> ðŸ’¡ Bonus: si ya eres una experta o experto en el lenguaje, te desafÃ­o a comentar cÃ³mo replicar este comportamiento con arrays y un solo condicional. ðŸ˜


## Ciclos

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es un ciclo?
- Â¿QuÃ© tipos de ciclos existen en JavaScript?
- Â¿QuÃ© es un ciclo infinito y por quÃ© es un problema?
- Â¿Puedo mezclar ciclos y condicionales?

### 2ï¸âƒ£ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

### 3ï¸âƒ£ Escribe un cÃ³digo en JavaScript que le pregunte a los usuarios cuÃ¡nto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> ðŸ’¡ Pista: puedes usar la funciÃ³n prompt de JavaScript.


## Listas

### 1ï¸âƒ£ Responde las siguientes preguntas en la secciÃ³n de comentarios:

- Â¿QuÃ© es un array?
- Â¿QuÃ© es un objeto?
- Â¿CuÃ¡ndo es mejor usar objetos o arrays?
- Â¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

### 2ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier array como parÃ¡metro e imprima su primer elemento.

### 3ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier array como parÃ¡metro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

### 4ï¸âƒ£ Crea una funciÃ³n que pueda recibir cualquier objeto como parÃ¡metro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


## Â¿CÃ³mo te fue? ðŸ†

**Â¡Felicidades por completar la prueba de JavaScript!** ConfÃ­o en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sÃ­, continÃºa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuÃ¡nto tiempo te tome. **Yo sÃ© que tÃº puedes. Y tÃº deberÃ­as de saberlo tambiÃ©n.**

Â¡Te espero en la siguiente clase para comenzar!