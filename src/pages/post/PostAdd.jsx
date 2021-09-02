import { Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import MyInput from "../../utilities/customFormControls/MyInput";
import MyTextArea from "../../utilities/customFormControls/MyTextArea";
import { Button, Segment } from "semantic-ui-react";
import PostService from "../../services/postService";
import { useHistory, useParams } from "react-router-dom";
import CategoryService from "../../services/categoryService";

export default function PostAdd() {
  const initialValues = { title: "", content: "" };

  const schema = Yup.object({
    title: Yup.string().required("Başlık Zorunlu!"),
    content: Yup.string().required("İçerik Zorunlu!"),
  });

  let { id } = useParams();
  let history = useHistory();

  let categoryService = new CategoryService();
  let postService = new PostService();

  const [category, setCategory] = useState({});

  useEffect(() => {
    categoryService
      .findById(id)
      .then((result) => setCategory(result.data.data));
  }, []);

  function handleAdd(values) {
    postService.add(id, values);
    history.push("/");
  }

  return (
    <div className="Post-add" style={{ maxWidth: "100%", margin: "5em auto" }}>
      <Segment secondary>{category.categoryName}</Segment>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          handleAdd(values);
        }}
      >
        <Form className="ui form">
          <Segment>Başlık</Segment>
          <MyInput name="title" placeholder="Başlık Giriniz!" />
          <hr color="grey"></hr>
          <Segment>İçerik</Segment>
          <MyTextArea name="content" placeholder="İçerik Giriniz!" />
          <Button secondary type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
