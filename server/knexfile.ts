// Update with your config settings.
import path from "path"
module.exports = {

  development:  {

    client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : '',
    database : 'nlw01'
  },
    migrations:{
      directory:path.resolve(__dirname,"src","database","migrations")
    },
    seeds:{
      directory:path.resolve(__dirname,"src","database","seeds")
    },
    useNullAsDefault:true
},

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
