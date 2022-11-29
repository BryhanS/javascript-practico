# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?

    Una variable es un lugar en memoria para poder guardar un valor
    
- ¿Cuál es la diferencia entre declarar e inicializar una variable?

  Para declarar una variable es solo darle un nombre para reservar un espacion en memoria, y inicializarla es ya tener la variable con un valor especifico en memoria.

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

    La diferencia es que sumar numero nos da un resultado numero y concatenar string es pegar dos o mas string en una linea

- ¿Cuál operador me permite sumar o concatenar?

    EL operador que nos permite sumar y concatenar es el +

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre string
- Apellido string
- Nombre de usuario en Platzi string
- Edad numer
- Correo electrónico string
- Mayor de edad boolean
- Dinero ahorrado number
- Deudas number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

'''
let nombre = 'Bryhan'; 
let apellido = 'Salazar';
let usuarioPlatzi = '@bryhan';
let edad = 30;
let correo = 'bryhan@platzi';
let esMayorDeEdad = True;
let ahorro = 1000
let deuda = 150

'''

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

nombreCompleto = nombre + ' ' + apellido;

- Dinero real (dinero ahorrado menos deudas)

dineroReal = ahorro - deuda

## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?

    Es un conjunto de sentencias, que podemos usar con los valores ya guardamos antes en la variables
    Conjunto de sentencias y pasos

- ¿Cuándo me sirve usar una función en mi código?

    Sirve cuando tenemos muchos pasos en nuestro codigos y poder externalizar los parametros usados, y tendresmos que reutilizar en varias ocasiones.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

    Los parametros son los valores que se encuentran dentro de la funcion entre parentesis
    Argumentos son los pasos que realiza la funcion para tener el proceso esperado

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";


console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function myName(name, lastname, nickname){
  let completeName = name + ' ' + lastname;
  console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}


```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?

    Reglas para saber si es verdadero o falso

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

    if y switch, la diferencia es su sintaxis pero es lo mismo

- ¿Puedo combinar funciones y condicionales?
    Si pero en diferentes etapas

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

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
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```


```

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}


```


### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?

    Es un bucle

- ¿Qué tipos de ciclos existen en JavaScript?

    ciclo for y while

- ¿Qué es un ciclo infinito y por qué es un problema?

    es cuando no se le pone un limite al ciclo y sigue consumiento memoria 

- ¿Puedo mezclar ciclos y condicionales?
    si se podria usar ciclos y condicionales para que puedas hacer un ciclo en base a que cumple las condiciones impuestas

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```


```

let i = 0;

while (i< 5) {
    console.log("ELvalo de i es: " + i);
    i++;
}

let i = 10;

while (i >= 2) {
    console.log("ELvalo de i es: " + i);
    i--;
}

```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.

```
    let respuesta = parseInt(prompt('¿Cuento es 2 + 2: ?'));

    while ( repuesta != 4){

        let respuesta = parseInt(prompt('¿Cuento es 2 + 2: ?'));
    }




```
## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
- ¿Qué es un objeto?
- ¿Cuándo es mejor usar objetos o arrays?
- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!