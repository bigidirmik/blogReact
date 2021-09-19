import axios from "axios";

export default class CategoryService {

    getCategories(){
        return axios.get("https://blog-spring-github.herokuapp.com/api/categories/getAll")
    }

    getByIsActive(status){
        return axios.get("https://blog-spring-github.herokuapp.com/api/categories/getByIsActive?isActive="+status)
    }

    getById(categoryId){
        return axios.get("https://blog-spring-github.herokuapp.com/api/categories/getById?categoryId="+categoryId)
    }

    findById(categoryId){
        return axios.get("https://blog-spring-github.herokuapp.com/api/categories/findById?categoryId="+categoryId)
    }

    add(values){
        return axios.post("https://blog-spring-github.herokuapp.com/api/categories/add",values)
    }

    update(categoryId,categoryName){
        return axios.put("https://blog-spring-github.herokuapp.com/api/categories/update?categoryName="+categoryName+"&categoryId="+categoryId)
    }

    deleteById(categoryId){
        return axios.delete("https://blog-spring-github.herokuapp.com/api/categories/deleteById?categoryId="+categoryId)
    }

    setActivity(categoryId,status){
        return axios.put("https://blog-spring-github.herokuapp.com/api/categories/setActivity?categoryId="+categoryId+"&status="+status)
    }
    
}