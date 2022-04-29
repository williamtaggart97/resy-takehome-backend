import knex from 'knex';

export const pgKnex = knex({
    client: 'pg',
    connection: {
        host: 'db',
        port: 5432,
        database: 'postgres',
        user: 'pursuit',
        password: 'pursuit2022',
    }
})


