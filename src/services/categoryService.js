import axios from "axios";

export default class CategoryService {

    getCategories(){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/categories/getAll")
    }

    getByIsActive(status){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/categories/getByIsActive?isActive="+status)
    }

    getById(id){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/categories/getById?id="+id)
    }

    findById(id){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/categories/findById?id="+id)
    }

    add(values){
        return axios.post("http://https://blog-spring-github.herokuapp.com/api/categories/add",values)
    }

    update(id,categoryName){
        return axios.put("http://https://blog-spring-github.herokuapp.com/api/categories/update?categoryName="+categoryName+"&id="+id)
    }

    deleteById(id){
        return axios.delete("http://https://blog-spring-github.herokuapp.com/api/categories/deleteById?id="+id)
    }

    setActivity(categoryId,status){
        return axios.put("http://https://blog-spring-github.herokuapp.com/api/categories/setActivity?categoryId="+categoryId+"&status="+status)
    }
    
}