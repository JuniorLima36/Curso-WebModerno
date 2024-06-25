# `Static Site Generators`

Um servidor de aplicações web precisa ter uma certa quantidade de memória ram, processador e espaço em disco para as coisas acontecerem. E tudo isso, adivinha, tem um custo. Hoje em dia, com os serviços de provedores de computação em nuvem, manter uma aplicação web é muito mais barato, porém é sempre legal conseguirmos economizar um pouco mais, não é mesmo?

A criação dinâmica das páginas web se torna desnecessária quando um dado quase nunca sofre alteração. Ou seja, imagina que você tem um site pessoal, como um blog, ou o site institucional de uma empresa. Essas páginas recebem dados uma vez e isso só vai mudar depois de muito tempo, não é algo que precisa ser recriado ("re-gerado") a cada requisição que o servidor web receber. E é em casos parecidos com esse que os geradores de sites estáticos entram em cena para nos ajudar.

O site estático é hospedado no servidor como ele é e, quando requisitado, é enviado para o usuário final. Essa hospedagem precisa de muito menos processador, memória e talvez até mesmo espaço em disco. Mas escrever esse HTML todo na mão não deve ser nada divertido.

Assim como temos aplicações que geram o conteúdo quando recebem uma requisição para o SSR, temos aplicações que geram o site estático quando precisamos. São os geradores de sites estáticos.

Essas ferramentas rodam uma vez, quando mandamos elas serem executadas e logo depois temos um build (uma versão do nosso produto final) que vamos guardar em um servidor que só precisa entregar esses arquivos para o usuário final.

Perceba: a geração do site estático não implica em não consumir dados. A aplicação que gera o produto final pode (e vai) consumir dados de algum lugar, injetar em um template e gerar o HTML. A grande diferença é que realmente vamos guardar esses arquivos em algum local para serem enviados para o usuário final ao invés de enviar direto para o usuário, como acontece no SSR.

# `A arquitetura de uma aplicação SSR`

De uma maneira muito, mas realmente muito simplificada: temos você acessando um site com o seu navegador, o servidor utilizando a aplicação que bate em um banco de dados, processa a informação, devolve para o servidor e o servidor te envia uma página.

![](https://d33wubrfki0l68.cloudfront.net/ed387a6bc4f3abf8e8bd06bc006cd297a923d8c2/9f11e/images/posts/arquitetura_ssr.png)

# `A arquitetura de uma aplicação SSG`
Agora o mesmo processo, porém não temos mais um servidor processando informações em tempo de execução, somente o envio do conteúdo estático para o seu navegador. Não que não tenha acontecido um processo de construção da página e envio para o servidor de conteúdo estático, mas isso não acontece agora.

![](https://d33wubrfki0l68.cloudfront.net/40b1eaa12605bdfa28328b9dc2ee5f384cbe1632/106dc/images/posts/arquitetura_ssg.png)