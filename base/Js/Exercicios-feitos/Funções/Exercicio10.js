/* 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e 
retorne true ou false. */

function div(x) {
    if(x % 3 == 0){
        console.log(`O numero ${x} é divisivel ${true}`)
    } else {
        console.log(`O numero ${x} é divisivel ${false}`)
    }
}
div(3)
div(2)
div(150)