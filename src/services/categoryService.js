import axios from "axios";

export default class CategoryService {

    getCategories(){
        return axios.get("http://localhost:8080/api/categories/getAll")
    }

    getByIsActive(status){
        return axios.get("http://localhost:8080/api/categories/getByIsActive?isActive="+status)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/categories/getById?id="+id)
    }

    findById(id){
        return axios.get("http://localhost:8080/api/categories/findById?id="+id)
    }

    add(values){
        return axios.post("http://localhost:8080/api/categories/add",values)
    }

    update(id,categoryName){
        return axios.put("http://localhost:8080/api/categories/update?categoryName="+categoryName+"&id="+id)
    }

    deleteById(id){
        return axios.delete("http://localhost:8080/api/categories/deleteById?id="+id)
    }

    setActivity(categoryId,status){
        return axios.put("http://localhost:8080/api/categories/setActivity?categoryId="+categoryId+"&status="+status)
    }
    
}