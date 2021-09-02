import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Segment } from "semantic-ui-react";
import * as Yup from "yup";
import { login } from "../store/actions/userActions";
import MyInput from "../utilities/customFormControls/MyInput";
import UserService from "../services/userService"
import { useHistory } from "react-router-dom";

export default function Login() {

  let userService = new UserService();

  const [user, setUser] = useState({})

  const dispatch = useDispatch();
  let history = useHistory();

  const initialValues = { email: "", password: "" };

  const schema = Yup.object({
    email: Yup.string().email("E").required("Email Zorunlu!"),
    password: Yup.string().required("Şifre Zorunlu!"),
  });

  // TODO: check w/service and login

  function checkUser(values) {
    userService.getByEmail(values.email).then(result=>setUser(result.data.data))
    if(user){
      console.log("Email Doğru")
      user.password==values.password?console.log("Şifre Doğru"):console.log("Şifre Hatalı")
      if (user.password==values.password) {
        handleLogin()
      }
    }else{
      console.log("Email Hatalı")
    }
  }

  function handleLogin() {
    dispatch(login(user))
    history.push("/")
  }

  return (
    <div className="Login" style={{ maxWidth: "40%", margin: "15em auto" }}>
      <Formik initialValues={initialValues} validationSchema={schema}
      onSubmit={(values) => {
        checkUser(values)
        }}>
        <Form className="ui form">
          <Segment>E-Posta</Segment>
          <MyInput name="email" placeholder="Eposta Giriniz!" />
          <Segment>Şifre</Segment>
          <MyInput name="password" placeholder="Şifre Giriniz!" />
          <Button type="submit" secondary>Giriş</Button>
        </Form>
      </Formik>
    </div>
  );
}
