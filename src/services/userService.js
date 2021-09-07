import axios from "axios";

export default class UserService {

    getById(userId){
        return axios.get("https://blog-spring-github.herokuapp.com/api/users/getById?userId="+userId)
    }

    getByEmail(email){
        return axios.get("https://blog-spring-github.herokuapp.com/api/users/getByEmail?email="+email)
    }

    add(values){
        return axios.post("https://blog-spring-github.herokuapp.com/api/users/add",values)
    }

    update(values){
        return axios.put("https://blog-spring-github.herokuapp.com/api/users/update",values)
    }

    delete(values){
        return axios.delete("https://blog-spring-github.herokuapp.com/api/users/delete",values)
    }

}