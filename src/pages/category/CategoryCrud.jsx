import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Checkbox, Table, Icon } from "semantic-ui-react";
import CategoryService from "../../services/categoryService";

export default function CategoryCrud() {
  const [categories, setCategories] = useState([]);

  let _categoryService = new CategoryService();

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategories()
      .then((result) => setCategories(result.data.data));
  },[categories]);

  function handleDelete(categoryId) {
    _categoryService.deleteById(categoryId)
  }

  function handleActivity(category) {
      if(category.active){
        _categoryService.setActivity(category.id,false)
      }else{
        _categoryService.setActivity(category.id,true)
      } 
  }

  function handleCheckbox(category) {
    if(category.active){
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
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Kategori Adı</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Güncelle</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Sil</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {categories.map((category) => (
          <Table.Body key={category.id}>
            <Table.Row>
              <Table.Cell collapsing>
                <Checkbox slider checked={handleCheckbox(category)} onClick={()=>handleActivity(category)} />
              </Table.Cell>
              <Table.Cell>{category.categoryName}</Table.Cell>
              <Table.Cell collapsing>
                <Button fluid primary basic icon size="small" as={NavLink} to={`/category-update/${category.id}`} >
                  <Icon name="sync" />
                </Button>
              </Table.Cell>
              <Table.Cell collapsing>
                <Button color="red" basic icon size="small" onClick={()=>handleDelete(category.id)}>
                  <Icon name="trash alternate" />
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                secondary
                size="small"
                floated="right"
                as={NavLink}
                to="/category-add"
              >
                <Icon name="plus square outline" />
                {" "}
                Ekle
                {" "}
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
