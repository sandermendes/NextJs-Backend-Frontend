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

### Instalação via Docker

Faça o download [ou clone o repo](https://github.com/sandermendes/app-test):

```sh
git clone https://github.com/sandermendes/app-test
```

Acesse a pasta em questão

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

API documentada utilizando a ferramenta Postman, que pode ser acessada através do link a seguir:

[![Open Documentation on Postman](https://raw.githubusercontent.com/sandermendes/app-test/a1823009dc6d2cf8f417c8e578744dcf2068b866/assets/postman-doc-button.svg)](https://www.postman.com/sandercmendes/workspace/sander-workspace/documentation/18173115-24025273-6481-48fd-a015-8d6e40ab97a5)

## Teste

Implementado rotina de testes com o Cypress, tanto Back-end, tanto Front-end, que se localiza na raiz do projeto, na pasta: `cypress/integration`

