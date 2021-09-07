import axios from "axios";

export default class PostService{

    getPosts(){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/posts/getAll")
    }

    getByIsActive(status){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/posts/getByIsActive?status="+status)
    }

    getByCategoryId(categoryId){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/posts/getByCategoryId?categoryId="+categoryId)
    }

    getByCategoryIdAndIsActive(categoryId,status){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/posts/getByCategoryIdAndIsActive?categoryId="+categoryId+"&status="+status)
    }

    getByUserIdAndIsActive(userId,status){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/posts/getByUserIdAndIsActive?userId="+userId+"&status="+status)
    }

    getByUserId(userId){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/posts/getByUserId?userId="+userId)
    }

    getById(id){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/posts/getById?postId="+id)
    }

    findById(id){
        return axios.get("http://https://blog-spring-github.herokuapp.com/api/posts/findById?id="+id)
    }

    add(categoryId,values){
        return axios.post("http://https://blog-spring-github.herokuapp.com/api/posts/add?categoryId="+categoryId,values)
    }

    update(id,title,content){
        return axios.put("http://https://blog-spring-github.herokuapp.com/api/posts/update?content="+content+"&id="+id+"&title="+title)
    }

    deleteById(id){
        return axios.delete("http://https://blog-spring-github.herokuapp.com/api/posts/deleteById?id="+id)
    }

    setActivity(postId,status){
        return axios.put("http://https://blog-spring-github.herokuapp.com/api/posts/setActivity?postId="+postId+"&status="+status)
    }

}