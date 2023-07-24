import type { Knex } from 'knex'
import dotenv from 'dotenv-safe'
dotenv.config()
// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DB_URL!,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      connectionString: process.env.DB_URL!,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

module.exports = config
