import knex from 'knex';
import 'dotenv/config'

const db = knex({
  client: 'mysql2', // Specify mysql2 as the client
  connection: {
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'your_database_user',
    password: process.env.DB_PASSWORD || 'your_database_password',
    database: process.env.DB_NAME || 'your_database_name'
  }
});