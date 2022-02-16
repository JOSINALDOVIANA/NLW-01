import  'dotenv/config'
import  Express  from "express";
import multer from 'multer';
import ItemsController from "./controllers/ItemsControllers";
import PointsControllers from './controllers/PointsControllers';
import multerConfig from "./config/multer";
const uploads = multer(multerConfig)
const routes=Express.Router();
const pointsController=new PointsControllers();
const itemsController=new ItemsController();





// ----------itens-------------------
routes.get('/items',itemsController.listar)


// ---------------- pontos de coleta----------------
routes.post("/points",uploads.single("image"),pointsController.create)
routes.get("/points",pointsController.filtroParametros)
routes.get("/points/todos",pointsController.filtroTodos)
routes.get("/points/:id",pointsController.filtroUnicoId)





















export default routes;