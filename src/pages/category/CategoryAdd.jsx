import { Form, Formik } from "formik";
import React from "react";
import { Button, Segment } from "semantic-ui-react";
import MyInput from "../../utilities/customFormControls/MyInput";
import * as Yup from "yup";
import CategoryService from "../../services/categoryService";
import { useHistory } from "react-router-dom";

export default function CategoryAdd() {
  const initialValues = { categoryName: "" };

  let history = useHistory();

  const schema = Yup.object({
    categoryName: Yup.string().required("Kategori Adı Zorunlu!"),
  });

  function handleAdd(values) {
    let categoryService = new CategoryService();
    categoryService.add(values)
    history.push("/")
  }

  return (
    <div
      className="Category-add"
      style={{ maxWidth: "40%", margin: "15em auto" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          handleAdd(values);
        }}
      >
        <Form className="ui form">
          <Segment>Kategori Adı</Segment>
          <MyInput name="categoryName" placeholder="Kategori Adı Giriniz!" />
          <Button secondary type="submit">Ekle</Button>
        </Form>
      </Formik>
    </div>
  );
}
