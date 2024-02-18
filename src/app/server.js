var express = require('express');
var bodyParser = require('body-parser');
let { Pool } = require('pg');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Middleware para criar a tabela se não existir
app.use(async (req, res, next) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS sua_tabela (
        id SERIAL PRIMARY KEY,
        exchange VARCHAR(255),
        api_type VARCHAR(255),
        base_api VARCHAR(255),
        end_point VARCHAR(255),
        in_use BOOLEAN
      )
    `);
    next();
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
    res.status(500).json({ error: 'Erro ao criar a tabela.' });
  }
});

app.use(async (req, res, next) => {
  let data = '';
  req.on('data', chunk => {
    data += chunk;
  });

  req.on('end', () => {
    req.body = JSON.parse(data);
    next();
  });
});

app.post('/apis', async (req, res) => {
  try {
    // O restante do código para manipular os dados e responder
  } catch (error) {
    console.error('Erro:', error);
    res.status(500).json({ error: 'Erro ao acessar o banco de dados.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor em execução em http://localhost:${port}`);
});
