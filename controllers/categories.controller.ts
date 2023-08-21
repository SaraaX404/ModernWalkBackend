import { CategoryService } from "../services/categories.service";

export default class CategoryController {
    categoryService:CategoryService;
    constructor(){
        this.categoryService = new CategoryService()
    }

    public getAllCategories(){


        const response = {
            message: "All categories that available",
            data:this.categoryService.getAllCategories()
        }

        return{
            response: response,
            status:200
        }
    }


    public getCategoryById(id:string){
        const data = this.categoryService.getCategoryById(id)



        if(!data){
           return {
            response: {
                message:'No category found in this Id'
            },
            status:404
           }
        }

        return {
            response:{
                message:'The category that available for this Id',
                data:data
            },
            status:200
        }


        
    }

}