import axios from "axios";

export default class ImageService {
  add(postId, url) {
    return axios.post("https://blog-spring-github.herokuapp.com/api/images/add?postId="+postId+"&url="+url);
  }

  update(imageId, url) {
    return axios.put("https://blog-spring-github.herokuapp.com/api/images/update?imageId="+imageId+"&url="+url);
  }

  deleteById(imageId) {
    return axios.delete(
      "https://blog-spring-github.herokuapp.com/api/images/delete?imageId=" + imageId
    );
  }

  getByPostId(postId) {
    return axios.get(
      "https://blog-spring-github.herokuapp.com/api/images/getByPostId?postId=" + postId
    );
  } 
}
