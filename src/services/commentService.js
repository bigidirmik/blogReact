import axios from "axios";

export default class CommentService {

    add(postId,values){
        return axios.post("https://blog-spring-github.herokuapp.com/api/comments/add?postId="+postId,values)
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