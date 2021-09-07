import axios from "axios";

export default class UserService {

    getById(userId){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/users/getById?userId="+userId)
    }

    getByEmail(email){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/users/getByEmail?email="+email)
    }

    add(values){
        return axios.post("http://https://blog-spring-github.herokuapp.com/api/users/add",values)
    }

    update(values){
        return axios.put("http://https://blog-spring-github.herokuapp.com/api/users/update",values)
    }

    delete(values){
        return axios.delete("http://https://blog-spring-github.herokuapp.com/api/users/delete",values)
    }

}