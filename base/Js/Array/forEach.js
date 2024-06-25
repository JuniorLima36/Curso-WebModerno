var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item) {
    total += item;
}
numeros.forEach(somar);
console.log(total);


const abc = ['a', 'b', 'c'];
abc.forEach((element) => console.log(element));