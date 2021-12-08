# Cadastro de Médicos

## Linguagem utilizada

### Back-End

* ###### Next JS
* ###### TypeScript 
* ###### Sequelize 
* ###### Migrations e Seeds 

### Front-End

Simples interface para interagir com a API, utilizando:
* ###### React
* ###### Material-UI

##### Imagem de exemplo do Front-end
![Sander Mendes App Doctor's Management](https://raw.githubusercontent.com/sandermendes/app-test/master/assets/main-screen-demo.png)

## Como usar

Faça o [download](https://github.com/sandermendes/app-test/archive/refs/heads/master.zip) ou clone o repo:

```sh
git clone https://github.com/sandermendes/app-test
```

Acesse a pasta em questão

### Instalação via Docker Compose

Utilizando o Docker Compose:

```sh
docker-compose up
```

Ao finalizar a criação e o inicio da mesma, execute o arquivo `ini_data.sh`, para a criação do banco de dados, tabela e inserção de alguns dados de exemplo:

```sh
docker exec -i app-test_nextjs_1 /bin/sh init_data.sh
```

Nota: Onde presume-se que `app-test_nextjs_1` é o nome do container que hospeda o NextJS. 

### Instalação via Docker
Nota: (Dockerfile) Instalação somente se desejar configurar Base de Dados MySQL hospedada em outro lugar 

Configure o arquivo de ambiente:
```sh
HOSTNAME=localhost
PORT=3000
MAIN_URL=http://$HOSTNAME:$PORT
DB_HOST=127.0.0.1
DB_PORT=3306
# DB_DIALECT=sqlite
DB_DIALECT=mariadb
# SQLite file path
DB_PATH_STORAGE=./src/data/data.db
DB_DATABASE=<Banco de dados>
DB_USER=<Usuário do banco>
DB_PASSWORD=<Senha do usuário>
```

Nota: `O projeto foi preparado para o uso em SQLite ou MySQL`

Criar a imagem Docker:
```sh
docker build -t app-test .
```

Iniciar o container:

```sh
docker run --env-file ./.env -p 3000:3000 app-test
```

### Migrations e Seeds

Este projeto possui configuração para execução do Sequelize Migrations e Seeds, que se localiza na raiz do projeto, na pasta: `data-migration`

## Documentação

### Endpoints
##### Resumo básico

* {url}/api/doctor - **Retorna todos registros**

* {url}/api/doctor/[id] - **Retorna um registro conforme o código**

* {url}/api/doctor/search?nomeCampo=valor - **Busca pelo nome do campo**

* {url}/api/doctor/add - **Adiciona um registro**

* {url}/api/doctor/edit/[id] - **Atualiza um registro conforme o código**

* {url}/api/doctor/delete/[id] - **Exclui um registro conforme o código**

* {url}/api/services/address/[zipcode] - **Busca o CEP pelo código do mesmo**

***Mais detalhes*** sobre os endpoints, podem ser localizados com o link a seguir do Postman,
foi documentada utilizando a ferramenta:

[![Open Documentation on Postman](https://raw.githubusercontent.com/sandermendes/app-test/a1823009dc6d2cf8f417c8e578744dcf2068b866/assets/postman-doc-button.svg)](https://www.postman.com/sandercmendes/workspace/sander-workspace/documentation/18173115-24025273-6481-48fd-a015-8d6e40ab97a5)

## Teste

Implementado rotina de testes com o Cypress, tanto Back-end, tanto Front-end, que se localiza na raiz do projeto, na pasta: `cypress/integration`

