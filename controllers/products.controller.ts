import ProductsService from "../services/products.service";


export default class ProductController {
    productService:ProductsService;
    constructor(){
        this.productService = new ProductsService()
    }


    public getAllProducts(){
       const response ={
        message:'All products that available',
        data:this.productService.getAllProducts()
       }

       return{
        response:response,
        status:200
       }

    }

}