import products from '../data/products.json'


export default class ProductsService {

    getAllProducts(){
        return products
    }

    getProductsById(id:string){
        return products.find((x)=> x?.id == id)
    }



}