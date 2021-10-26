import { Field, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import MyInput from "../../utilities/customFormControls/MyInput";
import MyTextArea from "../../utilities/customFormControls/MyTextArea";
import { Button, Divider, Segment } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import CategoryService from "../../services/categoryService";

export default function PostAdd() {
  // const { userInitials } = useSelector((state) => state.user);
  // let userId = userInitials[0].user ? userInitials[0].user.id : null;

  let { categoryId } = useParams();
  const [category, setCategory] = useState({});

  const initialValues = {
    title: "",
    paragraphs: [{ subTitle: "", content: "" }],
  };

  const schema = Yup.object().shape({
    title: Yup.string().required("Başlık Zorunlu!"),
    paragraphs: Yup.array().of(
      Yup.object().shape({
        subTitle: Yup.string(),
        content: Yup.string().required("İçerik Zorunlu!"),
      })
    ),
  });

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .findById(categoryId)
      .then((result) => setCategory(result.data.data));
  }, [categoryId]);

  return (
    <div className="Post-add" style={{ maxWidth: "100%", margin: "5em auto" }}>
      <Segment secondary>{category.categoryName}</Segment>

      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form className="ui form">
            <Segment>Blog Başlığı</Segment>
            <MyInput name="title" placeholder="Başlık Giriniz!" />
            <hr color="red" />

            <FieldArray name="paragraphs">
              {({ push, remove }) => (
                <div>
                  {values.paragraphs.map((p, index) => {
                    return (
                      <div key={index}>
                        <MyInput name={`paragraphs[${index}].subTitle`} />
                        <MyTextArea name={`paragraphs[${index}].content`} />
                        <br/>
                      </div>
                    );
                  })}
                  <Button
                    type="button"
                    onClick={() => push({ subTitle: "", content: "" })}
                  >
                    add paragraph
                  </Button>
                  <Button
                    type="button"
                    onClick={() => remove({ subTitle: "", content: "" })}
                  >
                    remove
                  </Button>
                </div>
              )}
            </FieldArray>

            <hr color="red" />
            <Button secondary type="submit">
              Ekle
            </Button>
            <pre>{JSON.stringify(values)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}
