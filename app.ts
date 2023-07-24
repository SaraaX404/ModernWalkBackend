import express, {Request, Response} from 'express'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get('/', (req:Request,res:Response)=> res.send({message:"App is working fine"}))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))

