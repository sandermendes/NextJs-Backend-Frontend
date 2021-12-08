# Doctors Management

## Language used

### Back-End

* ###### Next JS
* ###### TypeScript
* ###### Sequelize
* ###### Migrations and Seeds

### Front End

Simple interface to interact with the API, using:
* ###### React
* ###### Material-UI

##### Front-end example image
![Sander Mendes App Doctor's Management](https://raw.githubusercontent.com/sandermendes/app-test/master/assets/main-screen-demo.png)

## How to use

[Download](https://github.com/sandermendes/app-test/archive/refs/heads/master.zip) or clone the repo:

```sh
git clone https://github.com/sandermendes/app-test.git
```

Access the folder in question

### Installation via Docker Compose

Using Docker Compose:

```sh
docker-compose up
```

When you finish the creation and start of it, run the `ini_data.sh` file, to create the database, table and insert some example data:

```sh
docker exec -i app-test_nextjs_1 /bin/sh init_data.sh
```

Note: Where `app-test_nextjs_1` is assumed to be the name of the container hosting NextJS.

### Installation via Docker
Note: (Dockerfile) Installation only if you want to configure MySQL Database hosted elsewhere

Configure the environment file:
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
DB_DATABASE=<Database>
DB_USER=<Bank User>
DB_PASSWORD=<User Password>
```

Note: `The project was prepared for use in SQLite or MySQL`

Create the Docker Image:
```sh
docker build -t app-test .
```

Start the container:

```sh
docker run --env-file ./.env -p 3000:3000 app-test
```

### Migrations and Seeds

This project has a configuration for running Sequelize Migrations and Seeds, which is located at the root of the project, in the folder: `data-migration`

## Documentation

### Endpoints
##### Basic summary

* {url}/api/doctor - **Returns all records**

* {url}/api/doctor/[id] - **Return a record by id**

* {url}/api/doctor/search?FieldName=value - **Search by field name**

* {url}/api/doctor/add - **Add a record**

* {url}/api/doctor/edit/[id] - **Updates a record by id**

* {url}/api/doctor/delete/[id] - **Deletes a record by id**

* {url}/api/services/address/[zipcode] - **Search the zip code by its code**

***More details*** about endpoints can be found with the following link from Postman,
has been documented using the tool:

[![Open Documentation on Postman](https://raw.githubusercontent.com/sandermendes/app-test/a1823009dc6d2cf8f417c8e578744dcf2068b866/assets/postman-doc-button.svg)](https://www.postman.com/sandercmendes /workspace/sander-workspace/documentation/18173115-24025273-6481-48fd-a015-8d6e40ab97a5)

## Test

Implemented testing routine with Cypress, both Back-end and Front-end, which is located at the root of the project, in the folder: `cypress/integration`