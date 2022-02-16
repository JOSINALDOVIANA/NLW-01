import { Knex } from "knex";

export async function up(knex:Knex) {
 return await knex.schema.createTable('points', table=>{
        table.increments('id');
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsap').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
        table.decimal('longitude').notNullable();
        table.decimal('latitude').notNullable();
    })
}

export async function down(knex:Knex) {
   return await knex.schema.dropTable("points");
}