// Call
function sayThis(n1,n2){  
  console.log(this * n1 * n2);
}
// 2 é this, n1 e n2 são 3
sayThis.call(2, 3, 3) // 18  
// 1 é this, n1 e n2 são 3
sayThis.call(1, 3, 3) // 9  

// // Outro exemplo
// function sayAnyCharacter() {  
//   console.log(this.name + ": " + this.character);
// };
// var actor1 = {  
//   name:"Clint Eastwood",
//   character: "The Good"
// };
// var actor2 = {  
//   name:"Lee Van Cleef",
//   character: "The Bad"
// };
// // Clint Eastwood: The Good
// sayAnyCharacter.call(actor1);  
// // Lee Van Cleef: The Bad
// sayAnyCharacter.call(actor2); 

// Apply
function sayThis(n1,n2){  
  console.log(this * n1 * n2);
}
// 2 é this, n1 e n2 são 3
sayThis.apply(2, [3, 3]) // 18  
// 1 é this, n1 e n2 são 3
sayThis.apply(1, [3, 3]) // 9  

// Bind
function sayThis(n1,n2){  
  console.log(this * n1 * n2);
}
var thisIs2 = sayThis.bind(2);  
var thisIs2N1Is3 = sayThis.bind(2,3);  
var thisIs2N1Is3N2Is3 = sayThis.bind(2,3,3);  
thisIs2(3,3); //18 - muda this  
thisIs2N1Is3(3); //18 - muda this e atribui n1  
thisIs2N1Is3N2Is3(); //18 - muda this e atribui n1 e n2  