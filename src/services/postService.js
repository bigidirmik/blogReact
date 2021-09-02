import axios from "axios";

export default class PostService{

    getPosts(){
        return axios.get("http://localhost:8080/api/posts/getAll")
    }

    getByIsActive(status){
        return axios.get("http://localhost:8080/api/posts/getByIsActive?status="+status)
    }

    getByCategoryId(categoryId){
        return axios.get("http://localhost:8080/api/posts/getByCategoryId?categoryId="+categoryId)
    }

    getByCategoryIdAndIsActive(categoryId,status){
        return axios.get("http://localhost:8080/api/posts/getByCategoryIdAndIsActive?categoryId="+categoryId+"&status="+status)
    }

    getByUserIdAndIsActive(userId,status){
        return axios.get("http://localhost:8080/api/posts/getByUserIdAndIsActive?userId="+userId+"&status="+status)
    }

    getByUserId(userId){
        return axios.get("http://localhost:8080/api/posts/getByUserId?userId="+userId)
    }

    getById(id){
        return axios.get("http://localhost:8080/api/posts/getById?postId="+id)
    }

    findById(id){
        return axios.get("http://localhost:8080/api/posts/findById?id="+id)
    }

    add(categoryId,values){
        return axios.post("http://localhost:8080/api/posts/add?categoryId="+categoryId,values)
    }

    update(id,title,content){
        return axios.put("http://localhost:8080/api/posts/update?content="+content+"&id="+id+"&title="+title)
    }

    deleteById(id){
        return axios.delete("http://localhost:8080/api/posts/deleteById?id="+id)
    }

    setActivity(postId,status){
        return axios.put("http://localhost:8080/api/posts/setActivity?postId="+postId+"&status="+status)
    }

}