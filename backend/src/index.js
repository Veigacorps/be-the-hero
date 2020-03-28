const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:    ROTAS ->
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar um informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Parms: Parâmetros nomeados enviados na rota após "?" (Para Filtros, paginação)
   * Route Parms: Parâmetros utilizados para identificar recursos
   * Reuest Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL> MongoDB, CouchDB, etc
    */

/**
 * Driver do Banco de Dados: SELECT * FROM users
 * Query Builder: table('Users').select(*), where()
 * Ferramenta Buildere que vamos utilizar: KNEX.JS
 */