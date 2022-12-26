/* O operador de exponenciação.

O ES7 nos trouxe o tão esperando operador de exponenciação! Veio de forma
simples e intuitiva facilitar o uso desse cálculo matemático para nós, amantes do
Javascript.

Para utilizar a exponenciação da maneira antiga:
 _________________________________________________________________________________
|let exp = Math.pow(2, 3) //O primeiro parametro é a base e o segundo o expoente. |
|console.log(exp) // 2 elevado a 3 igual 8.                                       |
|_________________________________________________________________________________|
Antes deveríamos fazer o usa de uma função do objeto Math.

O ES7 mudou isso, agora podemos utilizar o operador próprio, assim:
 __________________________________________________________________________
| let exp = 2 ** 3 //O primeiro parametro é a base e o segundo o expoente. |
| console.log(exp) // 2 elevado a 3 igual 8.                               |
|__________________________________________________________________________|
Representado por dois asteriscos (**) o operador nos trouxe outra possibilidade
interessante que podemos chamar de atribuição exponencial, assim:
 _____________________________________________________________________
| let base = 2                                                        |
| base **= 3 // Eleva o valor armazenado na base a terceirap otencia. |
| console.log(base) // 2 elevado a 3 igual a 8.                       |
|_____________________________________________________________________|
Podemos ler assim o código da seguinte maneira: base = base ** 3

E ainda podemos trabalhar com expoentes negativos, assim:
 _____________________________________________________
| let exp = 2 ** -3 // Com expoente negativo          |
| console.log(exp) // 2 elevado a -3 igual a 0.125    |
|_____________________________________________________|
E assim o Javascript continua evoluindo e se reinventando para tornar-se cada vez
mais robusta e funcional! */