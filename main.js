// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
//  multiplicar (Los primeros 10 multiplos).

// let tablaDeMultiplicar = prompt("ingrese el numero que desee ver la tabla del 1 al 10")

// for (let i = 0; i <10; i++){
//     console.log(tablaDeMultiplicar*i);
// }







//  2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
//  acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

// let suma = 0 

// let numero; 

// while (true){
//     numero = prompt("ingrese un numero o ingrese '0' para terminar")
//     numero = Number(numero)
//     if (numero===0){
//         break;
//     } suma += numero;
//     console.log("resultado:" + suma);
// }
// console.log("el resultado total es " + suma);
// console.log("terminado");

//  3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
//  variable guardar un numero que este en el rango 1 - 100. La persona debera poder
//  ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
//  valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
//  nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
//  cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
// que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
//  felicitaciones y decirle en cuantos intentos lo ha realizado.


// let numeroSecreto = 23
// let intentos = 0;
// let adivinanza = true;

// while (adivinanza) {
//   let numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
//   intentos++;

//   if (numeroUsuario < numeroSecreto) {
//     alert("El número secreto es mayor. Intenta de nuevo.");
//   } else if (numeroUsuario > numeroSecreto) {
//     alert("El número secreto es menor. Intenta de nuevo.");
//   } else if (numeroUsuario === numeroSecreto) {
//     adivinanza = false;
//     alert("¡Felicitaciones! Adivinaste el numero en" + " " + intentos + " " + "intentos.");
//   } else {
//     alert("Por favor, ingresa un número valido.");
//   }
// }




//  4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
//  si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
//  Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
//  como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
//  numero ya no es primo.


// let usuario = Number(prompt("Ingrese numero a verificar"))
// let numeroDivisores = 0 

// for (let i = 0; i <= usuario; i++) {
//     if (usuario % i == 0) {
//         numeroDivisores = numeroDivisores +1;     
//     }
// }

// if (numeroDivisores == 2) {
//     alert("Es un numero primo")
// } else {
//     alert("No es un numero primo")
// }


//  5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.

// function obtenerDivisores(numero) {
//     let divisores = [];
//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             divisores.push(i);
//         }
//     }
//     return divisores;
// }

// let usuario = Number(prompt("Ingrese número para encontrar sus divisores"));

// let divisores = obtenerDivisores(usuario);
// alert("Los divisores de " + " " + usuario + " " + "son: " + divisores.join(", "));




//  6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
//  muestre un mensaje por consola con cada uno de los elementos del array.

// let deportes = ["futbol", "basket", "beisball", "tenis", "boxeo", "voleibol", "hockey", "rally", "golf", "rugby"]

// for(let i = 0; i < deportes.length; i++){
//     console.log("El elemento en el índice " + i + " es: " + deportes[i])
// }



//  7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
//  doble de cada uno de los elementos.

// let numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

// for(let i = 0; i < numeros.length; i++){
//     let numeroDoble = numeros[i] * 2
//     console.log("El doble del número " + numeros[i] + " es: " + numeroDoble)
// }




//  8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
//  objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
//  que muestre un mensaje de presentacion por cada elemento del array.

// let familia = [
//     {
//         nombre: "Miriam",
//         edad: 60, 
//         altura: 1.51, 
//         oficio: "Abogada"
//     }, 
//     {
//         nombre: "Humberto", 
//         edad: 65,  
//         altura: 1.65, 
//         oficio: "Locutor"
//     },
//     {
//         nombre: "Mariany",   
//         edad: 38,     
//         altura: 1.66,  
//         oficio: "Docente"
//     },
//     {
//         nombre: "Carlos", 
//         edad: 39,     
//         altura: 1.80,  
//         oficio: "Ingeniero"
//     },
//      {
//         nombre: "Manuel", 
//         edad: 29,     
//         altura: 1.76,  
//         oficio: "rappi"
//     }
// ] 

// function presentacion() {
//     for (let i = 0; i < familia.length; i++) {
//         let persona = familia[i];
//         console.log("Hola, mi nombre es " + persona.nombre + ", tengo " + persona.edad + " años, mido " + persona.altura + " y mi oficio es " + persona.oficio + ".");
//     }
// }

// presentacion();



//  9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
//  muestre los numeros impares.


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] % 2 !== 0) {
//         console.log(numeros[i]);
//     }
// }



//  10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
//  numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
//  el usuario ingresa un 0.

// let sumaPares = 0;
// let sumaImpares = 0;
// let numero;

// do {
//     numero = parseInt(prompt("Ingresa un número o 0 para terminar"));
    
//     if (numero !== 0) {
//         if (numero % 2 === 0) {
//             sumaPares += numero;
//         } else {
//             sumaImpares += numero;
//         }
//     }
// } while (numero !== 0);

// console.log("Suma de números pares: " + sumaPares);
// console.log("Suma de números impares: " + sumaImpares);



//  11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//  numero mas grande.

// let numeros = [23, 45, 67, 12, 89, 34, 90, 21, 56, 78];
// let numeroMayor = numeros[0];

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] > numeroMayor) {
//         numeroMayor = numeros[i];
//     }
// }

// console.log("El número más grande es: " + numeroMayor);





//  12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
//  numero mas chico.

// let numeros = [23, 45, 67, 12, 89, 34, 90, 21, 56, 78];
// let numeroMenor = numeros[0];

// for (let i = 1; i < numeros.length; i++) {
//     if (numeros[i] < numeroMenor) {
//         numeroMenor = numeros[i];
//     }
// }

// console.log("El número más pequeño es: " + numeroMenor);







//  13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
//  ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
//  manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
//  un empate. Caso contrario mostrar un mensaje con el nombre de la persona
//  ganadora.


// let jugador1 = prompt("Ingresa el nombre del Jugador 1: ");
// let jugador2 = prompt("Ingresa el nombre del Jugador 2: ");

// let opciones = ["piedra", "papel", "tijeras"];
// let empate = true;

// while (empate) {
//     let mano1 = prompt(jugador1 + " elige piedra, papel o tijeras: ").toLowerCase();
//     let mano2 = prompt(jugador2 + " elige piedra, papel o tijeras: ").toLowerCase();

//     if (!opciones.includes(mano1) || !opciones.includes(mano2)) {
//         alert("Entrada inválida. Por favor, elige entre piedra, papel o tijeras.");
//         continue;
//     }

//     if (mano1 === mano2) {
//         alert("Empate. Jueguen otra vez.");
//     } else {
//         empate = false;
//         if (
//             (mano1 === "piedra" && mano2 === "tijeras") ||
//             (mano1 === "papel" && mano2 === "piedra") ||
//             (mano1 === "tijeras" && mano2 === "papel")
//         ) {
//             alert(jugador1 + " gana con " + mano1 + " contra " + mano2 + "!");
//         } else {
//             alert(jugador2 + " gana con " + mano2 + " contra " + mano1 + "!");
//         }
//     }
// }






//  14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.

// let n = 5;

// for (let i = 1; i <= n; i++) {
//     console.log('*'.repeat(i));
// }






//  15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
//  pero invertido.

// let n = 5;

// for (let i = n; i > 0; i--) {
//     console.log('*'.repeat(i));
// }






//  16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
//  pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

let numeros = [34, 7, 23, 32, 5, 62, 32, 45, 21, 10];

for (let i = 0; i < numeros.length; i++) {
    for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
            // Intercambiar los elementos
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
        }
    }
}

console.log("Array ordenado: " + numeros);
