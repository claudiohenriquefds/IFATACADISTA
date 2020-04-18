
module.exports = {

  development: {
    client: 'mysql',
    version: '8.0.19',
    connection: {
      host : '127.0.0.1',
      user : 'developer',
      password : '123456',
      database : 'IFATACADISTA'
    },
    migrations:{
      directory: './src/databases/migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
