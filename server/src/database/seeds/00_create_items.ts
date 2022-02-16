import {Knex} from "knex";

export async function seed (knex:Knex){

    return await knex("items").insert([
        {titulo:"Lâmpadas",image:"lampadas.svg"},
        {titulo:"Pilhas e Baterias",image:"baterias.svg"},
        {titulo:"Papeis e Papelão",image:"papeis-papelao.svg"},
        {titulo:"Residuos Eletrônicos",image:"eletronicos.svg"},
        {titulo:"Residuos Orgânicos",image:"organicos.svg"},
        {titulo:"Oleo de Cozinha",image:"oleo.svg"},        
    ])
}