import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router";
import { Button, Segment } from "semantic-ui-react";
import * as Yup from "yup";
import CommentService from "../../services/commentService";
import MyInput from "../../utilities/customFormControls/MyInput";
import MyTextArea from "../../utilities/customFormControls/MyTextArea";

export default function CommentAdd({ postId }) {
  const initialValues = { nick: "", email: "", content: "" };

  const schema = Yup.object({
    nick: Yup.string().required(),
    email: Yup.string().email().required(),
    content: Yup.string().required(),
  });

  let commentService = new CommentService();
  let history = useHistory();

  function handleAdd(values) {
    commentService.add(values.content,values.email,values.nick,postId)
    console.log(values.content,values.email,values.nick,postId);
    history.push(`/posts/${postId}`)
  }

  return (
    <div
      className="Comment-add"
      style={{ width: "100%", maxWidth: "100%", margin: "1em" }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          handleAdd(values);
        }}
      >
        <Form className="ui form">
          <Segment>
            <MyInput name="nick" placeholder="İsim Giriniz!" />
            <MyInput name="email" placeholder="Email Giriniz!" />
            <MyTextArea name="content" placeholder="Yorumunuzu Giriniz!" />
            <Button secondary type="submit">
              Yorum Ekle
            </Button>
          </Segment>
        </Form>
      </Formik>
    </div>
  );
}
