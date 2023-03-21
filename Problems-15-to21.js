//////////////////////////////////////PROBLEMA 15 LATTICE PATHS//////////////////////////////////////
let number_to_find = 20;
let prev_arr = [];
for(let k=0;k<=number_to_find;k++){
    prev_arr[k]=1;
}
let post_arr = [];
//console.log(prev_arr);

for(let j=0;j<number_to_find;j++){

    for(let i=0;i<=number_to_find;i++){
        if(post_arr[i-1]!=undefined){
            post_arr[i]=prev_arr[i]+post_arr[i-1];
        }else{post_arr[i]=prev_arr[i];}
    }
    
//console.log(post_arr);
prev_arr = post_arr;
post_arr = [];
}

//////////////////////////////////////PROBLEMA 16 POWER DIGIT SUM//////////////////////////////////////
let numero = "1";       //NO RESUELTO POR MI

for (let i = 1; i <= 1000; i++) {
    let total = multiplicar(numero);
    numero = total;
}

let totalcifras = 0;

for (let i = 0; i < numero.length + 1; i++) {
    totalcifras = totalcifras + Number(numero.charAt(i));
}

//console.log(totalcifras);

function multiplicar(num1) {
    let total = '';
    let meLlevo = 0;
    //habria que preguntar la difrencia de digitos pero como son iguales paso
    for (let i = num1.length - 1; i >= 0; i--) {
        let sumatemp = Number(num1.charAt(i)) * 2 + meLlevo;
        meLlevo = 0;
        if (sumatemp >= 10) {
            //si es mas de 10 me llevo 1
            meLlevo = 1;
            total = (sumatemp % 10) + total;
        } else {
            total = sumatemp + total;
        }
    }
    if (meLlevo == 1) {
        total = 1 + total;
    }
    return total;
}

//////////////////////////////////////PROBLEMA 17 NUMBER LETTER COUNTS//////////////////////////////////////
let oneToNine = [3, 3, 5, 4, 4, 3, 5, 5, 4];
let elevenToNineteen = [6, 6, 8, 8, 7, 7, 9, 8, 8];
let tens = [6, 6, 5, 5, 5, 7, 6, 6];
let hundreds = [10, 10, 12, 11, 11, 10, 12, 12, 11];
let count = 0;  //8 son los digitos de thousand
function sum(arr, arr2, arr3, arr4){
    count+=3+11;//se suma ten y one-thousand
    for(let j=0;j<arr.length;j++){//del 1 al 9
    count+=arr[j];
    }
    for(let j=0;j<arr2.length;j++){//del 11 al 19
    count+=arr2[j];
    }
    for(let j=0;j<arr3.length;j++){//del 20 al 99
        count+=arr3[j];
        for(let k=0;k<arr.length;k++){
        count+=arr[k];
        count+=arr3[j];//se repite la decena por cada numero
        }
    }
    
    //repetimos el anterior bucle por cada centena    
    for(let k=0;k<arr4.length;k++){
        count+=arr4[k];
        for(let j=0;j<arr.length;j++){
            count+=arr4[k];
        count+=arr[j];
        count+=3;//se suma "and" por cada numero
        }
        for(let j=0;j<arr2.length;j++){
            count+=arr4[k];
        count+=arr2[j];
        count+=3;//se suma "and" por cada numero
        }
        for(let j=0;j<arr3.length;j++){
            count+=arr4[k];
            count+=3;//se suma "and"
            count+=arr3[j];
            for(let i=0;i<arr.length;i++){
                count+=arr4[k];
                count+=3;//se suma "and" por cada numero
                count+=arr[i];
                count+=arr3[j];//se repite la decena por cada numero
            }
        }
        count+=arr4[k];
        count+=3;// por cada centena hay un ten
        count+=3;//se suma "and"
    }   
}
sum(oneToNine,elevenToNineteen,tens,hundreds);
console.log(count);

//////////////////////////////////////PROBLEMA 18 MAXIMUM PATH SUM 1//////////////////////////////////////
let sum = 75;//reempplazar por el numero inicial de la piramide
let index = 0;
let arr = [                                 [75],
                                          [95, 64],
                                        [17, 47, 82],
                                      [18, 35, 87, 10],
                                    [20, 04, 82, 47, 65],
                                  [19, 01, 23, 75, 03, 34],
                                [88, 02, 77, 73, 07, 63, 67],
                              [99, 65, 04, 28, 06, 16, 70, 92],
                            [41, 41, 26, 56, 83, 40, 80, 70, 33],
                          [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
                        [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
                      [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
                    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
                  [63, 66, 04, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
                [04, 62, 98, 27, 23, 09, 70, 98, 73, 93, 38, 53, 60, 04, 23]];

for(let i=1;i<=arr.length;i++){
    if(i==arr.length-1){
        sum+=(Math.max(arr[i][index],arr[i][index+1]))
        //console.log(Math.max(arr[i][index],arr[i][index+1]));
        console.log(sum);
        break;
    }
    let a = arr[i][index]+arr[i+1][index];
    let b = arr[i][index]+arr[i+1][index+1];
    let c = arr[i][index+1]+arr[i+1][index+1];
    let d = arr[i][index+1]+arr[i+1][index+2];
    let potencialA = Math.max(a,b);
    let potencialB = Math.max(c,d);
    if(Math.max(potencialA,potencialB)==potencialA){
        sum+=arr[i][index];
        //console.log(arr[i][index]);
    }else{
        sum+=arr[i][index+1];
        //console.log(arr[i][index+1]);
        index++
        
    }
    
}

//////////////////////////////////////PROBLEMA 19 //////////////////////////////////////