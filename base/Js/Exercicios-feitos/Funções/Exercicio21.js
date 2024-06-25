/* 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do 
conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) 
crianças com menos de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam 
R$50; 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 
60 anos pagam R$130 */

function plano(idade) {
    if (idade <= 10){
        console.log(`Plano 1 abaixo de 10 anos R$ ${100 + 80} reais`)
    } else if (idade > 10 && idade <= 30){
        console.log(`Plano 2 10-30 anos R$ ${100 + 50} reais`)
    } else if (idade > 30 && idade <= 60){
        console.log(`Plano 3 30-60 anos R$ ${100 + 95} reais`)
    } else if (idade > 60 && idade <= 100) {
        console.log(`Plano 4 acima de 60 anos R$ ${100 + 130} reais`)
    } else {
        console.log(`Dados invalidos`)
    }
}
plano(8)
plano(11)
plano(30)
plano(31)
plano(60)
plano(61)
plano(80)
