import UserService from "../services/users.service";

type User = {
  id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
};

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getAll() {
    const data = this.userService.getAll();

    if (data.length < 1) {
      return {
        response: {
          message: "No users found",
        },
        status: 404,
      };
    }

    return {
      response: {
        message: "User Found",
        data: data,
      },
      status: 200,
    };
  }

  getById(id: string) {
    const data = this.userService.getUserById(id);
    if (data) {
      return {
        response: {
          message: "User found with this Id",
          data: data,
        },
        status: 200,
      };
    } else {
      return {
        response: {
          message: "No user found with this Id",
        },
        status: 404,
      };
    }
  }

  create(data: User) {
    const createdUser = this.userService.create(data);
    if (createdUser) {
      return {
        response: {
          message: "User Create Successfully",
          data: data,
        },
        status: 200,
      };
    }

    return {
      response: {
        message: "Cannot create the user",
      },
      status:500
    };
  }

  update(data:User, id:string){
    const user = this.userService.update(data, id)
    if(user){
        return{
            response:{
                message:"User Updated successfully",
                data:user
            },
            status:200
        }
    }

   
        return {
            response: {
              message: "Cannot update the user",
            },
            status:500
          };

  }

  delete(id:string){
   const res =  this.userService.delete(id)

   if(res){
    return{
        response:{
            message:"user create successfully"
        },
        status:200
    }


   }
   
   return{
    response:{
        message:"cannot create the user"
    },
    status:500
}

  }






}
