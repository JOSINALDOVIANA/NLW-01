// SELECT *, EVENT_SCHEMA AS `Db`, EVENT_NAME AS `Name` FROM information_schema.`EVENTS` WHERE `EVENT_SCHEMA`='aulaslpw';
import {Request,response,Response} from  'express'
import connection from '../database/connection';
class PointsController{
    async create (req:Request,res:Response){
        const {
            name,
            email,
            whatsap,
            longitude,
            latitude,
            city,
            uf,
            items            
        }=req.body;        
    
    let point={
        image:req.file?.filename,
        name,
        email,
        whatsap,
        longitude,
        latitude,
        city,
        uf,
    }
    
    try {
        await connection.transaction(async trx => {

            const points_id= await trx("points").insert(point);//cadastrando o point


            //split - vai criar um vetor separados por virgula
            //trim - remove espaços

            const point_Items=items.split(',').map((item:string)=>Number(item.trim())).map((items_id:number)=>{
                return {
                    items_id,
                    points_id:points_id[0]
                }
          
        });
        await trx("points_items").insert(point_Items);//cadastrando os dados

        point.image=`http://${process.env.IP}:3333/imagens/`+point.image;
        
        return  res.json({id:points_id[0],...point});
    });
      } catch (error) {
          console.error(error);
        return  res.json({sucess:false});
      }

    }

    
  async  filtroUnicoId (req:Request,res:Response){
        const id=Number(req.params.id);
       
         try {
            let point= await connection("points").select("*").where({id}).first();
            let items= await connection("items").join("points_items","items.id","=", "points_items.items_id")
            .where("points_items.points_id",id).select("items.titulo");
            point.image=`http://${process.env.IP}:3333/imagens/`+point.image        
           
             return res.json({...point,...{items:items}});
         } catch (error) {
             console.error(error)
             return res.status(400).json({mesagem:"error na consulta"});
         }  
        
    }
  async  filtroParametros  (req:Request,res:Response){
         const {city,uf,items=[0]}=req.query;
         const parseItems=String(items).split(",").map(item=>Number(item.trim()));
        //  console.log(city ,uf , parseItems) 
        // const trx=await connection.transaction();
        try {
            let points= await connection("points").join("points_items","points.id","=","points_items.points_id")
            .whereIn("points_items.items_id",parseItems)
            .where("city",String(city))
            .where("uf",String(uf))
            .distinct()
            // .join("items","points_items.items_id","=","items.id")
            .select("points.*")
            let pointsMod=points.map(point=>({...point,image:`http://${process.env.IP}:3333/imagens/`+point.image }))
            return res.json(pointsMod);
        
        } catch (error) {
            console.error(error);
            
            return res.json({mensagem:"error na consulta sql"})
        }
      
    }
  async  filtroTodos  (req:Request,res:Response){
         let points=await connection("points");
         let pointsMod=points.map(point=>({...point,image:`http://${process.env.IP}:3333/imagens/`+point.image }))
         return  res.json(pointsMod);
       

        
    }
}

export default PointsController;