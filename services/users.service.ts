import { fileReader, fileWriter } from "../helpers/jsonWriter";

type User = {
        "id"?: string,
        "firstName"?: string,
        "lastName"?: string,
        "email"?: string,
        "password"?: string
}

export default class UserService {

    getAll(){
      return fileReader('../data/users.json')
    }

    getUserById(id:string){
        const data = fileReader('../data/users.json')
        return data.find((x:User)=> x.id === id)
    }

    create(data:User):User{

        const userList = fileReader('../data/users.json')
        userList.push(data)
        fileWriter('../data/users.json', userList)

        return data
    }

    delete(id:string){
        const userList  = fileReader('../data/users.json')

        let newList = userList.filter((x:User)=> x.id != id)

      
        fileWriter('../data/users.json', newList)
        return newList
    
    }

    update(data:User, id:string){
        const userList  = fileReader('../data/users.json')
        let user = userList.find((x:User)=> x.id === id)
        if(!user){
            return null
        }
        let newList = userList.filter((x:User)=> x.id != id)

        if(data?.email){
            user.email = data?.email
        }

        if(data?.firstName){
            user.firstName = data?.firstName
        }

        if(data?.lastName){
            user.lastName = data?.lastName
        }

        newList.push(user)
        fileWriter('../data/users.json', newList)
        return user

    }


}