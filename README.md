# Learning System API

Esta é uma API RESTful desenvolvida com Node.js e Express para o gerenciamento de um sistema de aprendizado, incluindo informações sobre pessoas (usuários), cursos e categorias. O sistema oferece funcionalidades completas de CRUD (Criação, Leitura, Atualização, Exclusão).

---

## Funcionalidades

- Operações CRUD para recursos de pessoas, cursos, categorias e matrículas.
- Conexão com banco de dados SQLite3 via Sequelize.
- Estrutura modular, com organização por responsabilidades (controllers, models, routes, services).
- Controle de matrículas: Possibilidade de associar pessoas a cursos.

---

## Tecnologias Utilizadas

- Node.js
- Express.js
- SQLite3
- Sequelize (ORM para Node.js)
- JavaScript (ES6+)

---

## Estrutura de Diretórios

```
project-root/
│
├── src/
│   ├── config/
│   │   └── config.json  
│   │
│   ├── controllers/
│   │   ├── CategoriesController.js
│   │   ├── Controller.js  
│   │   ├── CoursesController.js
│   │   ├── EnrollmentController.js
│   │   └── PeopleController.js
│   │
│   ├── migrations/  
│   │   ├── create-people.js
│   │   ├── create-categories.js
│   │   ├── create-courses.js
│   │   └── create-enrollment.js
│   │
│   ├── models/
│   │   ├── categories.js
│   │   ├── courses.js
│   │   ├── enrollment.js
│   │   ├── index.js  
│   │   └── people.js
│   │
│   ├── routes/
│   │   ├── categoriesRoute.js
│   │   ├── coursesRoute.js
│   │   ├── index.js  
│   │   └── peopleRoute.js
│   │
│   ├── seeders/  
│   │   ├── people.js
│   │   ├── categories.js
│   │   ├── courses.js
│   │   └── enrollment.js
│   │
│   ├── services/  
│   │   ├── CategoriesServices.js
│   │   ├── CoursesServices.js
│   │   ├── EnrollmentServices.js
│   │   ├── PeopleServices.js
│   │   └── Services.js  
│   │
│   └── app.js
│  
└── server.js
````

---

## Instalação

1. Clone o repositório:

```bash
git clone -b master git@github.com:MateusFKrinski/Learning-System-API.git
cd Learning-System-API
````

2.  Instale as dependências:

<!-- end list -->

```bash
yarn install
```

3.  Execute as migrações e seeders do banco de dados:

<!-- end list -->

```bash
npx sequelize db:migrate
npx sequelize db:seed:all
```

> Observação: Certifique-se de ter o `sequelize-cli` instalado globalmente ou use `npx`.

4.  Inicie o servidor de desenvolvimento:

<!-- end list -->

```bash
yarn run dev
```

A API estará disponível em: `http://localhost:8080`

-----

## Endpoints da API

A API é organizada em torno dos seguintes recursos principais: `/people`, `/courses`, `/categories` e `/enrollment`.

### Pessoas (`/people`)

- `GET /people`  
  Retorna uma lista de todas as pessoas ativas.

- `GET /people/all`  
  Retorna todas as pessoas cadastradas (inclusive inativas).

- `GET /people/:id`  
  Retorna os dados de uma pessoa específica.

- `POST /people`  
  Cria uma nova pessoa.

- `PUT /people/:id`  
  Atualiza os dados de uma pessoa existente.

- `DELETE /people/:id`  
  Remove (ou desativa) uma pessoa do sistema.

---

### Matrículas (`/people/enrollment`)

- `GET /people/enrollment/all`  
  Retorna todas as matrículas cadastradas.

- `GET /people/:student_id/enrollment`  
  Retorna todas as matrículas de um estudante.

- `GET /people/:student_id/enrollment/actives`  
  Retorna apenas as matrículas ativas de um estudante.

- `GET /people/:student_id/enrollment/:id`  
  Retorna uma matrícula específica de um estudante.

- `POST /people/enrollment`  
  Cria uma nova matrícula.

- `PUT /people/enrollment/:id`  
  Atualiza os dados de uma matrícula existente.

- `DELETE /people/enrollment/:id`  
  Remove (ou cancela) uma matrícula.

---

### Cursos (`/courses`)

- `GET /courses`  
  Retorna uma lista de todos os cursos.

- `GET /courses/:id`  
  Retorna os dados de um curso específico.

- `POST /courses`  
  Cria um novo curso.

- `PUT /courses/:id`  
  Atualiza os dados de um curso existente.

- `DELETE /courses/:id`  
  Remove um curso do sistema.

---

### Categorias (`/categories`)

- `GET /categories`  
  Retorna uma lista de todas as categorias.

- `GET /categories/:id`  
  Retorna os dados de uma categoria específica.

- `POST /categories`  
  Cria uma nova categoria.

- `PUT /categories/:id`  
  Atualiza os dados de uma categoria existente.

- `DELETE /categories/:id`  
  Remove uma categoria do sistema.

-----

## Considerações

- Esta API foi projetada para um sistema de aprendizado básico e pode ser expandida com funcionalidades adicionais como autenticação, autorização, paginação e filtros mais avançados.
- A estrutura modular facilita a manutenção e a adição de novas funcionalidades.

-----

## Autor

**Mateus Krinski** [GitHub: github.com/MateusFKrinski](https://github.com/MateusFKrinski)
