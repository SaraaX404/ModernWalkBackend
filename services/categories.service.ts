
import categories from '../data/categories.json'




export class CategoryService {
    
    getAllCategories(){
        return categories
    }

    getCategoryById(id:string){
        return categories.find((x)=> x.id == id)
    }

    




}