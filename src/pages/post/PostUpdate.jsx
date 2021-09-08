import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Segment } from "semantic-ui-react";
import * as Yup from "yup";
import PostService from "../../services/postService";
import MyInput from "../../utilities/customFormControls/MyInput";
import MyTextArea from "../../utilities/customFormControls/MyTextArea";

export default function PostUpdate() {
  const [post, setPost] = useState({});
  const initialValues = { id: parseInt(""), title: "", content: "" };

  const schema = Yup.object({
    title: Yup.string().required("Başlık Zorunlu!"),
    content: Yup.string().required("İçerik Zorunlu!"),
  });

  let { id } = useParams();
  let history = useHistory();

  let postService = new PostService();

  useEffect(() => {
    postService
      .findById(parseInt(id))
      .then((result) => setPost(result.data.data));
  },[]);

  function handleUpdate(values) {
    postService.update(id, values.title, values.content);
    history.push("/");
  }

  return (
    <div className="Post-add" style={{ maxWidth: "100%", margin: "5em auto" }}>
      <Segment secondary>{post.title}</Segment>
      <hr color="grey"></hr>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          handleUpdate(values);
        }}
      >
        <Form className="ui form">
          <Segment>Yeni Başlık</Segment>
          <MyInput name="title" placeholder={post.title} />
          <hr color="grey"></hr>
          <Segment>Yeni İçerik</Segment>
          <MyTextArea name="content" placeholder={post.content} />
          <Button secondary type="submit">
            Güncelle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
