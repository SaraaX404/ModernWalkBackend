import express, {Request, Response} from 'express'
import CategoryController from '../controllers/categories.controller';

const categoryRouter = express.Router();
const categoryController = new CategoryController()

categoryRouter.get('/', (req:Request, res:Response)=>{
    const {status, response} = categoryController.getAllCategories()
    return res.status(status).send(response)
})

categoryRouter.get('/:id', (req:Request, res:Response)=>{
    const {status, response} = categoryController.getCategoryById(req.params.id)
    return res.status(status).send(response)
})


export default categoryRouter
