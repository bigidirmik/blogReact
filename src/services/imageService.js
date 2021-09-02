import axios from "axios";

export default class ImageService {
  add(postId, url) {
    return axios.post("http://localhost:8080/api/images/add?postId="+postId+"&url="+url);
  }

  update(postId, url) {
    return axios.put("http://localhost:8080/api/images/update?postId="+postId+"&url="+url);
  }

  // formData,{headers:{"Content-Type":"multipart/form-data"}}

  deleteById(imageId) {
    return axios.delete(
      "http://localhost:8080/api/images/delete?imageId=" + imageId
    );
  }

  getByPostId(postId) {
    return axios.get(
      "http://localhost:8080/api/images/getByPostId?postId=" + postId
    );
  }
}
