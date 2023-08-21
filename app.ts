import express, {Request, Response, NextFunction} from 'express'
import categoryRouter from './routes/categories.route'
import productRouter from './routes/products.route'
import userRouter from './routes/users.route'
const swaggerUi = require('swagger-ui-express');
const morgan = require('morgan');
const app = express()
const swaggerDocument = {
    "swagger": "2.0",
    "info": {
        "title": "ModernWalk",
        "description": "",
        "version": "1.0"
    },
    "produces": ["application/json"],
    "paths": {
        "/api/v1/users": {
            "get": {
                "x-swagger-router-controller": "home",
                "operationId": "index",
                "tags": ["/users"],
                "responses": {}
            },
            "post": {
                "x-swagger-router-controller": "home",
                "operationId": "index",
                "tags": ["/users"],
                "description": "Create new user",
                "parameters": [
                { "name": "id", "in": "formData", "required": true, "type": "string" },{ "name": "firstName", "in": "formData", "required": true, "type": "string" },{ "name": "lastName", "in": "formData", "required": true, "type": "string" },{ "name": "email", "in": "formData", "required": true, "type": "string" },{ "name": "password", "in": "formData", "required": true, "type": "string" }
               ],
                "responses": {}
            }
        },
        "/api/v1/users/{id}": {
            "get": {
              "x-swagger-router-controller": "home",
              operationId: "getUserById",
              tags: ["/users"],
              parameters: [
                {
                  name: "id",
                  in: "path",
                  description: "User ID",
                  required: true,
                  schema: {
                    type: "integer",
                  },
                },
              ],
              responses: {},
            },
            "patch": {
                "x-swagger-router-controller": "home",
                "operationId": "index",
                "tags": ["/users"],
                "description": "Update User By Id",
                "parameters": [
                { "name": "firstName", "in": "formData", "required": true, "type": "string" },{ "name": "lastName", "in": "formData", "required": true, "type": "string" },{ "name": "email", "in": "formData", "required": true, "type": "string" },  {
                    name: "id",
                    in: "path",
                    description: "User ID",
                    required: true,
                    schema: {
                      type: "integer",
                    },
                  },
               ],
               
                "responses": {}
            }
          },
        "/api/v1/products":{
            "get": {
                "x-swagger-router-controller": "home",
                "operationId": "index",
                "tags": ["/products"],
                "responses": {}
            },
        },
        "/api/v1/categories":{
            "get": {
                "x-swagger-router-controller": "home",
                "operationId": "index",
                "tags": ["/categories"],
                "responses": {}
            },
        },
        "/api/v1/categories/{id}":{
            "get": {
                "x-swagger-router-controller": "home",
                operationId: "getCategoryById",
                tags: ["/categories"],
                parameters: [
                  {
                    name: "id",
                    in: "path",
                    description: "User ID",
                    required: true,
                    schema: {
                      type: "integer",
                    },
                  },
                ],
                responses: {},
              },
        }
    }
};
// Logging Middleware for Requests/Responses
app.use(morgan('dev'));

// Performance Logging Middleware
app.use((req:Request, res:Response, next:NextFunction) => {
  const start = Date.now();
  res.on('finish', () => {
    const elapsed = Date.now() - start;
    console.log(`Request took ${elapsed}ms`);
  });
  next();
});

// Exception Handling Middleware
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(express.static("dist"));
app.get('/', (req:Request,res:Response)=> res.send({message:"App is working fine"}))


app.use('/api/v1/categories', categoryRouter)
app.use('/api/v1/products', productRouter)
app.use('/api/v1/users', userRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> console.log(`Server running on PORT ${PORT}`))

