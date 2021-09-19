import axios from "axios";

export default class ParagraphService {

    add(content,postId,subTitle){
        return axios.post("https://blog-spring-github.herokuapp.com/api/paragraphs/add?content="+content+"&postId="+postId+"&subTitle="+subTitle)
    }

    deleteById(paragraphId){
        return axios.delete("https://blog-spring-github.herokuapp.com/api/paragraphs/deleteById?paragraphId="+paragraphId)
    }

    getByPostId(postId){
        return axios.get("https://blog-spring-github.herokuapp.com/api/paragraphs/getByPostId?postId="+postId)
    }

}