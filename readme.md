express: webserver que vamos utilizar para a webapi;

cors: pacote de segurança necessário para permitir comunicação futura com o front-end;

helmet: é um pacote de segurança para dar uma 'blindada' na api;

dotenv: pacote de configuração para cuidar das variáveis de ambiente;

morgan: pacote para login de requisição no terminal;

express-async-errors: pacote para conseguir capturar erros assíncronos; uma função assíncrona tem uma promessa de entrega, loading, retorno positivo ou negativo;

server.ts: módulo de inicialização do servidor web onde nossa webapi estará hospedada, módulo de infraestrutura;

app.ts: módulo de configuração da webapi, módulo de aplicação;

routers: pasta onde guardaremos os módulos de roteamento, que mapeiam os endpoints para as funções de controle;

controllers: pasta onde guardaremos os módulos de controle, que recebem as requisições roteadas e fazem os processamentos necessários;

models: pasta onde guardaremos os módulos de entidades, que contém a especificação delas;

repositories: pasta onde guardaremos os módulos de repositório, que contém as funções de leitura, exclusão, inserção, etc das entidades;