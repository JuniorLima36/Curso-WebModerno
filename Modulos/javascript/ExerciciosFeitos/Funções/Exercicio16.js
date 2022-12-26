/* 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica o programa 
recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os 
valores numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função 
efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso 
default para operações inválidas. */

const calculadora = function(num1, calculo, num2){
    switch(calculo){
        case '+' :
            console.log(num1 + num2)
            break
        case '-' :
            console.log(num1 - num2)
            break
        case '*' :
            console.log(num1 * num2)
            break
        case '/' :
            console.log(num1 / num2)
            break
        default :
            console.log('Operações inválidas');
    }
}
calculadora(2, '+', 3)
calculadora(2, '-', 3)
calculadora(2, '*', 3)
calculadora(2, '/', 3)
calculadora(2, 'a', 3)