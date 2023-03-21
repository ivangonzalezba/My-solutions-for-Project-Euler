console.groupCollapsed('P-1: Multiplos de 3 y 5 por debajo de 1000, y la suma de ellos');
let resultadoFinal = 0;
let i = 1;
for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        resultadoFinal += i;
    }
}
console.log(resultadoFinal);
console.groupEnd();
//////////////////////////////////////////////////////////2
console.groupCollapsed('P-2: Sucesion FIBONACCI y la suma de sus valores que resulte menor a 4 millones');
let a = 0;
let b = 1;
let suma = 0;
do {
    let c = a + b;
    a = b;
    b = c;
    if (a % 2 == 0) {
        suma += a;
    }
} while (suma < 4000000)
console.log(suma); //4613732 (suma de todos los numeros anteriores)
console.groupEnd();
//////////////////////////////////////////////////////////3
console.groupCollapsed('P-3: El mayo numero primo de 600851475143');
let primo = 0;
let nFactorizar = 600851475143;
for (let i = 2; i <= nFactorizar; i++) {
    if (nFactorizar % i == 0) {
        nFactorizar = nFactorizar / i;
        primo = i;
        i = 2;
    }
}
console.log(primo);
console.groupEnd();
//////////////////////////////////////////////////////////4
console.groupCollapsed('P-4: El mayor palindromo resultado del producto de 2 numeros de 3 cifras');
let palindromo;
let operando;
let mayorPalindromo = 0;
for (palindromo = 999; palindromo >= 100; palindromo--) {
    for (operando = 999; operando >= 100; operando--) {
        let resultado = palindromo * operando;
        let arrPal = resultado.toString();
        let arrOrdenado = arrPal.split('').reverse().join('')
        if (resultado == arrOrdenado) {
            if (resultado > mayorPalindromo) {
                mayorPalindromo = resultado;
            }
        }
    }
}
console.log(mayorPalindromo);
console.groupEnd();
//////////////////////////////////////////////////////////5
console.groupCollapsed('P-5: El menor multiplo'); 
 let numb = 0;
 let finded = false;
for (let i = 20; i < Infinity; i+=20) {
    for (let j = 1; j < 21; j++) {
        if (i % j == 0) {
            numb++;
            if (numb == 20) {
                console.log(i);
                finded = true;
                break;
            }
        }
    }
    numb = 0;
    if(finded==true){break;}
} 
console.groupEnd();
//////////////////////////////////////////////////////////6
console.groupCollapsed('P-6: Diferencia entre la suma de los cuadrados y el cuadrado de las sumas (numeros del 1-100)');
let primerResultado = 0;
let segundoSubResultado = 0;
let segundoResultado = 0;
for (let i = 1; i < 101; i++) {
    primerResultado += i * i;
    segundoSubResultado += i;
}
segundoResultado = segundoSubResultado * segundoSubResultado;
console.log(segundoResultado - primerResultado);
console.groupEnd();
//////////////////////////////////////////////////////////7
console.groupCollapsed('P-7: El numero primo en la posicion 10.001');
let count = 0;
let prim = 1;
const esNumeroPrimo = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
while (count < 10001) {
    prim++;
    if (esNumeroPrimo(prim)) {
        count++;
    }

}
console.log(prim);
console.groupEnd();