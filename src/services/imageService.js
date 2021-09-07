import axios from "axios";

export default class ImageService {
  add(postId, url) {
    return axios.post("http://https://blog-spring-github.herokuapp.com/api/images/add?postId="+postId+"&url="+url);
  }

  update(postId, url) {
    return axios.put("http://https://blog-spring-github.herokuapp.com/api/images/update?postId="+postId+"&url="+url);
  }

  deleteById(imageId) {
    return axios.delete(
      "http://https://blog-spring-github.herokuapp.com/api/images/delete?imageId=" + imageId
    );
  }

  getByPostId(postId) {
    return axios.get(
      "http://https://blog-spring-github.herokuapp.com/api/images/getByPostId?postId=" + postId
    );
  }
}
