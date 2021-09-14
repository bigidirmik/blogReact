import axios from "axios";

export default class CommentService {

    add(content,email,nick,postId){
        return axios.post("https://blog-spring-github.herokuapp.com/api/comments/add?content="+content+"&email="+email +"&nick="+nick+"&postId="+postId)
    }

    getComments(){
        return axios.get("https://blog-spring-github.herokuapp.com/api/comments/getAll")
    }

    deleteById(id){
        return axios.delete("https://blog-spring-github.herokuapp.com/api/comments/deleteById?id="+id)
    }

    getByPostId(postId){
        return axios.get("https://blog-spring-github.herokuapp.com/api/comments/getByPostId?postId="+postId)
    }

}