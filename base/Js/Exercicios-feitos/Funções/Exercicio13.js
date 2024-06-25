/* 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número 
referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

const semana = function(dia){
    switch(Math.floor(dia)){
        case 1 :
            console.log('Fim de Semana')
            break
        case 2 :
        case 3 :
        case 4 :
        case 5 : 
        case 6 :
            console.log('Dia util')
            break
        case 7 :
            console.log('Fim de Semana')
            break
        default :
            console.log('Dia invalido')
    }
}
semana(1)
semana(3)
semana(5)
semana(8)