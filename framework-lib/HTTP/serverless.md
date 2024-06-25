# `O que é serverless?`

## Visão geral
Serverless é um modelo de desenvolvimento nativo em nuvem para criação e execução de aplicações sem o gerenciamento de servidores.

Os servidores ainda são usados nesse modelo, mas eles são abstraídos do desenvolvimento de aplicações. O provedor de nuvem fica responsável pelas tarefas rotineiras de provisionamento, manutenção e escala da infraestrutura do servidor. Os desenvolvedores só precisam empacotar o código em containers para fazer a implantação.

Depois da implantação, as aplicações serverless atendem à demanda e aumentam ou diminuem a escala automaticamente de acordo com as necessidades. As soluções serverless dos provedores de nuvem pública costumam ser oferecidas sob demanda por meio de um modelo de execução orientado a eventos. Por isso, não há cobrança pelas funções serverless não utilizadas.

## `Visão geral da arquitetura serverless`
O serverless é diferente de outros modelos de cloud computing em que o provedor de nuvem é responsável por gerenciar a infraestrutura da nuvem e por escalar as aplicações. As aplicações serverless são implantadas em containers que são iniciados sob demanda e automaticamente quando chamados.

Em um modelo padrão de cloud computing baseado em infraestrutura como serviço (IaaS), os usuários compram unidades de capacidade. Ou seja, o provedor de nuvem pública fornece componentes de servidor "sempre ativos" para a execução das aplicações. Os usuários precisam aumentar a capacidade do servidor nos momentos de alta demanda e diminuí-la quando a capacidade alta não é mais necessária. Mesmo quando as aplicações não são usadas, a infraestrutura de nuvem necessária para executá-las continua ativa.

Em comparação, com a arquitetura serverless, as aplicações são iniciadas apenas quando necessárias. Quando um evento aciona a execução do código da aplicação, o provedor de nuvem pública aloca os recursos relacionados dinamicamente. Os usuários deixam de ser cobrados quando essa execução termina. Além do aumento da eficiência e da economia, o modelo serverless livra os desenvolvedores das tarefas rotineiras e manuais associadas ao provisionamento do servidor e à escala da aplicação.

Com o modelo serverless, todas as tarefas rotineiras são realizadas pelo provedor de serviços de nuvem. Elas incluem, por exemplo, o gerenciamento do sistema operacional e de arquivos, a aplicação de patches de segurança, o balanceamento de carga, a administração da capacidade, a escala, a geração de registros e o monitoramento.

É possível criar uma aplicação totalmente serverless ou uma formada por elementos de microsserviços parcialmente serverless e tradicionais.

## `Casos de uso do modelo serverless`

A arquitetura serverless é ideal para aplicações assíncronas e stateless que podem ser iniciadas instantaneamente. Da mesma forma, esse modelo também é uma ótima opção para os casos de uso em que a demanda aumenta de maneira aleatória e imprevisível.

Por exemplo, pense em uma tarefa como o processamento em lote de arquivos de imagem de entrada: ele não ocorre com muita frequência, mas precisa estar pronto para quando uma grande quantidade de arquivos chegar de uma só vez. Outro caso são as modificações feitas em um banco de dados: você pode aplicar uma série de funções (por exemplo, comparar as mudanças com os padrões de qualidade) ou traduzir as modificações automaticamente.

As aplicações serverless também são ideais para os casos de uso que incluem fluxos de dados de entrada, chat bots, tarefas agendadas e lógica empresarial.

Outros casos de uso comuns do modelo serverless são aplicações web e APIs de back-end, automação de processos de negócios, sites serverless e integração de diversos sistemas.


## `Quais são os prós e contras da computação serverless?`

**Prós**

- A computação serverless aumenta a produtividade dos desenvolvedores e reduz os custos operacionais. Ela livra os desenvolvedores das tarefas rotineiras de provisionamento e gerenciamento de servidores. Assim, eles têm mais tempo para se concentrar nas aplicações. 
- Com a computação serverless, é mais fácil adotar práticas de DevOps, porque os desenvolvedores não precisam mais descrever explicitamente a infraestrutura que eles querem que a equipe de operações provisione.  
- É possível incorporar componentes completos de soluções de BaaS de terceiros para otimizar ainda mais o desenvolvimento de aplicações.
- Os custos operacionais são reduzidos no modelo serverless porque você paga o tempo de computação baseado em nuvem conforme necessário. Isso não acontece quando você executa e gerencia os próprios servidores o tempo todo.

**Contras**

- Deixar de executar o seu próprio servidor ou controlar a sua própria lógica no lado dele tem algumas desvantagens.
- É possível que os provedores de nuvem tenham restrições sobre como as pessoas podem interagir com os componentes. Por sua vez, isso afeta a flexibilidade e a personalização dos sistemas. No caso de ambientes de BaaS, os desenvolvedores podem depender de serviços com código que não pode ser controlado por eles.
- Abrir mão de controlar esses aspectos do stack de TI também aumenta as chances de dependência de fornecedor. Além disso, quando você decide trocar de provedor, isso pode gerar custos. Você precisará fazer upgrade dos sistemas para que eles atendam às especificações do novo provedor.