import knex from "knex";
import path from "path"
// import confi from "../../knexfile";
const connection = knex(
    {
        client: 'mysql',
        connection: {
            host: '127.0.0.1',
            port: 3306,
            user: 'root',
            password: '',
            database: 'nlw01'
        },
        useNullAsDefault: true
    }
);

export default connection;