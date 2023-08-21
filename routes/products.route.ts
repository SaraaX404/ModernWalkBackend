import express,{Request, Response} from 'express'
import ProductController from '../controllers/products.controller';

const productRouter = express.Router();


const productController = new ProductController()


productRouter.get('/', (req:Request, res:Response)=>{
    const {response, status} = productController.getAllProducts()
    res.status(status).send(response)
})

export default productRouter