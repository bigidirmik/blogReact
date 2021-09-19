import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Segment } from "semantic-ui-react";
import CategoryService from "../../services/categoryService";
import * as Yup from "yup"
import { useHistory, useParams } from "react-router-dom";
import MyInput from "../../utilities/customFormControls/MyInput";

export default function CategoryUpdate() {

  const initialValues = { categoryName: "" };

  const schema = Yup.object({
    categoryName: Yup.string().required("Kategori Adı Zorunlu!"),
  });

  let categoryService = new CategoryService();

  let {categoryId} = useParams();

  let history = useHistory();

  const [category, setCategory] = useState({})

  useEffect(() => {
    categoryService.findById(categorId).then(result=>setCategory(result.data.data))
},[])

  function handleUpdate(values) {
    categoryService.update(categoryId,values.categoryName)
    history.push("/categories-crud")
  }

  return (
    <div
      className="Category-update"
      style={{ maxWidth: "40%", margin: "15em auto" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          handleUpdate(values)
        }}
      >
        <Form className="ui form">
          <Segment>Kategori Yeni Adı</Segment>
          <MyInput name="categoryName" placeholder={category.categoryName} />
          <Button secondary type="submit">
            Güncelle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
