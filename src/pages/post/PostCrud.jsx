import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";
import CategoryService from "../../services/categoryService";
import PostService from "../../services/postService";

export default function PostCrud() {
  const [categories, setCategories] = useState([]);
  
  let postService = new PostService();

  let history = useHistory();

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategories()
      .then((result) => setCategories(result.data.data));
  },[]);

  function handleDelete(id) {
    postService.deleteById(id);
    history.push("/")
  }

  function handleActivity(post) {
    if (post.active) {
      postService.setActivity(post.id, false);
      history.push("/")
    } else {
      postService.setActivity(post.id, true);
      history.push("/")
    }
  }

  function handleCheckbox(post) {
    if(post.active){
        return true
    }else{
        return false
    }
}

  return (
    <div
      className="Category-list"
      style={{ maxWidth: "75%", margin: "10em 0 0 7em" }}
    >
      {categories.map((category) => (
        <Table compact celled definition key={category.id}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell textAlign="center">
                {category.categoryName}
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Görsel</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Güncelle</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Sil</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {category.posts.map((post) => (
              <Table.Row key={post.id}>
                <Table.Cell collapsing>
                <Checkbox slider checked={handleCheckbox(post)} onClick={()=>handleActivity(post)} />
                </Table.Cell>
                <Table.Cell> <strong>{post.active?"Aktif":"İnaktif"}</strong> = {post.title} </Table.Cell>
                <Table.Cell collapsing>
                  <Button fluid secondary basic icon size="small" as={NavLink} to={`/image-add-to-post/${post.id}`} >
                    <Icon name="image" />
                  </Button>
                </Table.Cell>
                <Table.Cell collapsing>
                  <Button fluid primary basic icon size="small" as={NavLink} to={`/post-update/${post.id}`} >
                    <Icon name="sync" />
                  </Button>
                </Table.Cell>
                <Table.Cell collapsing>
                  <Button color="red" basic icon size="small">
                    <Icon
                      name="trash alternate"
                      onClick={() => handleDelete(post.id)}
                    />
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell colSpan="4">
                <Button
                  secondary
                  size="small"
                  floated="right"
                  as={NavLink}
                  to={`/posts-add-to-category/${category.id}`}
                >
                  <Icon name="plus square outline" />
                  {" "}
                  Yeni Ekle{" "}
                </Button>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      ))}
    </div>
  );
}
