import connection from "../database/connection";
import { Request,Response } from "express";

class ItemsController{
    
  async listar (req:Request,res:Response){
      await  connection("items").select("*").then(r=>{
            const seriaLizedeItems=r.map(el=>({
                id:el.id,
                title:el.titulo,
                image_url:`http://${process.env.IP}:3333/imagens/${el.image}`
            }));
            return res.json(seriaLizedeItems);
        })
    }

}


export default ItemsController;