import express, {Request,Response} from 'express'
import UserController from '../controllers/users.controller'

const userRouter = express.Router()
const userController = new UserController()

userRouter.get('/',(req:Request,res:Response)=>{
    const {response, status} = userController.getAll()
    return res.status(status).send(response) 
})

userRouter.get('/:id', (req:Request,res:Response)=>{
    const {response, status} = userController.getById(req.params.id)
    return res.status(status).send(response)
})

userRouter.post('/', (req:Request,res:Response)=>{
    const {response, status} = userController.create(req.body)
    return res.status(status).send(response)
})

userRouter.patch('/:id', (req:Request, res:Response)=>{
    const {status,response} = userController.update(req.body, req.params.id)
    return res.status(status).send(response)
})

export default userRouter
