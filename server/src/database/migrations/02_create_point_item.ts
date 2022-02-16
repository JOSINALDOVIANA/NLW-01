
import { Knex } from "knex";

export async function up(knex:Knex) {
  return await  knex.schema.createTable('points_items', table=>{
        table.increments('id');
        table.integer('points_id').unsigned().notNullable();
        table.foreign("points_id").references("id").inTable("points");        
        table.integer('items_id').unsigned().notNullable();
        table.foreign("items_id").references("id").inTable("items");
    })
}

export async function down(knex:Knex) {
  return await knex.schema.dropTable("points_items");
}