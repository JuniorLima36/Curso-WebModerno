/*25) A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma 
função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um 
array de strings. A função deverá filtrar as palavras do array que contêm nelas a string do 
primeiro parâmetro.

Exemplos:
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"]) // retornará ["javascript", "java"] */

function buscarPalavras(inicio, palavras) {
    const resultado = []
    for (let palavra of palavras){
        if (palavra.includes(inicio)){
            resultado.push(palavra)
        }
    }
    return console.log(resultado)
}
buscarPalavras("pro", ["programação", "mobile", "profissional"])
buscarPalavras("java", ["javascript", "java", "c++"])