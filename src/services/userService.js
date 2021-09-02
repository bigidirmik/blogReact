import axios from "axios";

export default class UserService {

    getById(userId){
        return axios.get("http://localhost:8080/api/users/getById?userId="+userId)
    }

    getByEmail(email){
        return axios.get("http://localhost:8080/api/users/getByEmail?email="+email)
    }

    add(values){
        return axios.post("http://localhost:8080/api/users/add",values)
    }

    update(values){
        return axios.put("http://localhost:8080/api/users/update",values)
    }

    delete(values){
        return axios.delete("http://localhost:8080/api/users/delete",values)
    }

}