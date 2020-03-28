const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(routes);
// Rotas / Recursos

/*
  Métodos HTTP:
  GET: Buscar/listar uma informação do back-end.
  POST: Criar uma informação no back-end.
  PUT: Alterar uma informação no back-end.
  DELETE: Deletar uma informação no back-end.
*/

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação).
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
* SQL: MySql, SQLite, PostgreSql, Oracle, Microsoft SQL Server
* NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



const port = 3333;

app.listen(port, () => {
  console.log("Servidor ON: Use Ctrl + click para acessar em: http://localhost:" + port);
});