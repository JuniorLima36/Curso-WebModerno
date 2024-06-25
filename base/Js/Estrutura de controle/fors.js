// for /for in e for of
for(var i = 0; i < 10; i++) {
  console.log(i)
}

let arr = [3, 5, 7];

for (let i in arr) {
  console.log(i);
}

for (let i of arr) {
  console.log(i);
}