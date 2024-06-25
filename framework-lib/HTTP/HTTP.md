# `Métodos de requisição HTTP`

O protocolo HTTP define um conjunto de métodos de requisição responsáveis por indicar a ação a ser executada para um dado recurso. Embora esses métodos possam ser descritos como substantivos, eles também são comumente referenciados como HTTP Verbs (Verbos HTTP). Cada um deles implementa uma semântica diferente, mas alguns recursos são compartilhados por um grupo deles, como por exemplo, qualquer método de requisição pode ser do tipo safe, idempotent ou cacheable.

`GET`  
O método GET solicita a representação de um recurso específico. Requisições utilizando o método GET devem retornar apenas dados.

`HEAD`  
O método HEAD solicita uma resposta de forma idêntica ao método GET, porém sem conter o corpo da resposta.

`POST`  
O método POST é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.

`PUT`  
O método PUT substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.

`DELETE`  
O método DELETE remove um recurso específico.

`CONNECT`  
O método CONNECT estabelece um túnel para o servidor identificado pelo recurso de destino.

`OPTIONS`  
O método OPTIONS é usado para descrever as opções de comunicação com o recurso de destino.

`TRACE`  
O método TRACE executa um teste de chamada loop-back junto com o caminho para o recurso de destino.

`PATCH`  
O método PATCH é utilizado para aplicar modificações parciais em um recurso.

# `Códigos de status de respostas HTTP`
Os códigos de status das respostas HTTP indicam se uma requisição HTTP foi corretamente concluída. As respostas são agrupadas em cinco classes:

- Respostas de informação (100-199),
- Respostas de sucesso (200-299),
- Redirecionamentos (300-399)
- Erros do cliente (400-499)
- Erros do servidor (500-599).


# `Respostas informativas`

`100 Continue`  
Essa resposta provisória indica que tudo ocorreu bem até agora e que o cliente deve continuar com a requisição ou ignorar se já concluiu o que gostaria.

# `Respostas de sucesso`
`200 OK`  
Estas requisição foi bem sucedida. O significado do sucesso varia de acordo com o método HTTP:

`201 Created`  
A requisição foi bem sucedida e um novo recurso foi criado como resultado. Esta é uma tipica resposta enviada após uma requisição POST.

`204 No Content`  
Não há conteúdo para enviar para esta solicitação, mas os cabeçalhos podem ser úteis. O user-agent pode atualizar seus cabeçalhos em cache para este recurso com os novos.

# `Mensagens de redirecionamento`

`302 Found`
Esse código de resposta significa que a URI do recurso requerido foi mudada temporariamente. Novas mudanças na URI poderão ser feitas no futuro. Portanto, a mesma URI deve ser usada pelo cliente em requisições futuras.

`304 Not Modified`
Essa resposta é usada para questões de cache. Diz ao cliente que a resposta não foi modificada. Portanto, o cliente pode usar a mesma versão em cache da resposta.

# `Respostas de erro do Cliente`

`400 Bad Request`
Essa resposta significa que o servidor não entendeu a requisição pois está com uma sintaxe inválida.

`401 Unauthorized`
Embora o padrão HTTP especifique "unauthorized", semanticamente, essa resposta significa "unauthenticated". Ou seja, o cliente deve se autenticar para obter a resposta solicitada.

`403 Forbidden`
O cliente não tem direitos de acesso ao conteúdo portanto o servidor está rejeitando dar a resposta. Diferente do código 401, aqui a identidade do cliente é conhecida.

`404 Not Found`
O servidor não pode encontrar o recurso solicitado. Este código de resposta talvez seja o mais famoso devido à frequência com que acontece na web.

# `Respostas de erro do Servidor`

`500 Internal Server Error`
O servidor encontrou uma situação com a qual não sabe lidar.

`502 Bad Gateway`
Esta resposta de erro significa que o servidor, ao trabalhar como um gateway a fim de obter uma resposta necessária para manipular a requisição, obteve uma resposta inválida.

# `Tipos de parâmetros em requisições em http`

Existem 3 tipos de parâmetros

- Query params

São os parâmetros de consulta (query parms) aparecem da seguinte forma: dominio.com/?cidade=salvador.

Esse parâmetros pode ser acessados por:
```
 app.get('/', (req, res) => {
  const cidade = req.query.cidade
  return res.json(cidade)
})
// Retorna: "salvador"
```

- Route params

Os parâmetros de rota (routes params) aparecem da seguinte forma: dominio.com/usuario/22

Esse parâmetros pode ser acessados por:
```
 app.get('/usuario/:id', (req, res) => {
  const id = req.parms.id
  return res.json(id)
})
// Retorna: "salvador"
```

- Request body

Diferente dos parâmetros anteriores, o body mão fica visível na url, os dados são transmitidos através do método POST.

Esse parâmetros pode ser acessados por:
```
const users = ['Usiario0', 'Usuario1', 'Usuario2'] 
app.get('/usuario/', (req, res) => {
  const id = req.body;
  return res.json(users[id])
})
// Retorna: "salvador"
```