# `SPA`
`SPA` é uma sigla para Single Page Application, ou Aplicação de Página Única. A utilização de SPAs traz uma melhor experiência do usuário através da sensação de navegação entre as páginas de maneira muito mais rápida. Apesar do nome, isso não quer dizer necessariamente que aplicações SPA terão apenas uma única página.

Aplicações SPA são sempre executadas do lado do cliente – no caso, o navegador. O conteúdo de uma aplicação SPA é carregado completamente logo na primeira requisição – incluindo templates e arquivos JavaScript.

Quando novas páginas precisam ser carregadas, não há a necessidade de uma nova requisição para o servidor: estas páginas são carregadas através de rotinas JavaScript, tirando a necessidade de requisições para o servidor para obtenção do novo conteúdo a ser renderizado: a partir da primeira carga da aplicação, toda a interação para carga de conteúdo passa a acontecer exclusivamente do lado do cliente através do JavaScript.

## `Vantagens`
- É possível prover interações na aplicação sem a necessidade de recarregamento, oferendo uma experiência muito mais fluída para o usuário;
- Suporte rico e refinado através de frameworks de mercado maduros, como o Angular, o React e o Vue.js; 
- Pode ocasionar “alívio” ao servidor da aplicação, já que não há a necessidade de se realizar uma requisição ao servidor a cada vez que é necessário carregar um novo conteúdo.

## `Desvantagens`
- Performance imprevisível: podem ocorrer algumas inconsistências justamente pelo deslocamento do esforço de renderização para o cliente: se existir código JavaScript escrito de maneira incorreta, a performance da aplicação pode ser seriamente afetada;
- Dificuldades no SEO: aplicações que precisem de SEO podem ter problemas se forem desenvolvidas com frameworks SPA. Como em uma SPA você precisa carregar o JavaScript para então fazer requisições, você acaba não tendo conteúdo para ser indexado por motores de busca como o Google: o conteúdo é carregado de maneira dinâmica. Hoje, já existem maneiras de auxiliar o SEO em aplicações SPA, mas ainda assim, esse é um possível ponto de atenção.

Alguns exemplos de frameworks SPA são o Angular, React, Vue.js e Ember. Alguns exemplos de aplicações SPA são o Twitter, o Gmail, o Google Maps e o Trello.

# `SSR`
`SSR` é a sigla para Server Side Rendering, ou Renderização do Lado do Servidor. O SSR vem para solucionar um pouco dos problemas das aplicações SPAs, tentando manter suas principais vantagens. O SSR inverte o processo de renderização, trazendo uma parte do esforço de renderização de aplicações SPA para o servidor, de maneira similar ao carregamento tradicional.

O SSR pode fornecer aos usuários um carregamento mais eficiente da aplicação, já que parte da renderização é feita no servidor. Além da possibilidade de melhoria da performance, o SSR ajuda a lidar com alguns problemas de SEO (como indexação), já que parte da aplicação ainda é carregada pelo servidor.

## `Vantagens`
- Melhoria do processo de indexação: como parte do conteúdo é renderizado no servidor, é possível definir o conteúdo a ser carregado a partir do servidor da aplicação de maneira que este conteúdo colabore com os mecanismos de indexação dos motores de busca;
- Menor exigência da máquina do cliente, já que parte do esforço de renderização fica ainda no servidor;
- Melhor performance da aplicação em geral na maioria dos casos, justamente porque parte da aplicação já é pré-renderizada. Isso auxilia a reduzir inclusive incômodos na experiência de usuários de aplicações SSR, como a rápida página em branco (ou flicker) que acontece em uma parte das aplicações SPA (a página fica em branco enquanto o cliente não termina de processar o JavaScript para carregar a aplicação toda);

## `Desvantagens`
- O TTFB (time to first byte) em aplicações SSR é maior, pois o servidor precisa justamente pré-carregar parte do conteúdo antes de enviar a resposta para o cliente. TTFB é o tempo entre o servidor receber a requisição e enviar o primeiro conteúdo a ser renderizado pelo cliente. Enquanto o TTFB não acontece, o usuário vê a página sendo “carregada” pelo cliente;
- Um pouco de incômodo dependendo da experiência de carga: como aplicações SSR são pré-renderizadas pelo servidor, assim que o TTFB é concluído, o cliente começa a iniciar imediatamente o processo de renderização, mostrando a aplicação para o usuário. Porém, o usuário só poderá interagir com a aplicação de fato quando o cliente terminar a sua parte da carga da aplicação. Se o processo de carga do lado do cliente for um pouco extenso, isso pode causar uma experiência de usuário estranha;

A maioria dos frameworks SPA modernos oferece também suporte a SSR. É possível utilizar SSR com Vue.js através do Nuxt.js por exemplo, assim como é possível utilizar SSR com React através do Next.js e com o Angular através do Angular Universal.

# `Quando utilizar um ou outro?`
A decisão de utilizar SPA ou SSR vai depender muito dos objetivos da aplicação. Porém, de maneira geral, os seguintes pontos devem ser levados em consideração:

`SPA é uma boa opção caso…`  
- A página precise oferecer uma experiência de usuário mais rica e fluída;
- Existirão muitas interações na página com a renderização de conteúdos dinâmicos;
- A indexação no Google não seja prioridade.

`SSR é uma boa opção quando…`  
- Ter boa indexação no Google é um requisito;
- Existir a necessidade da fluidez do SPA, porém, com um tempo de carga para o usuário mais eficiente;
- A aplicação possui um número mais extenso de páginas. Nesse cenário, a divisão do trabalho de renderização com o servidor pode vir a ser interessante.