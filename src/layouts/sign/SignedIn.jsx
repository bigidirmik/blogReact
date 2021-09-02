import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";
import { logout } from "../../store/actions/userActions";

export default function SignedIn() {

  const dispatch = useDispatch();
  let history = useHistory();

  function handleSignout() {
    dispatch(logout())
    history.push("/")
  }
  
  return (
    <div>
        <Dropdown pointing="top right" icon="user" style={{marginTop:"0.7em",marginRight:"0.9em"}}>
          <Dropdown.Menu>
              <Dropdown.Item icon="newspaper" text="Başlık İşlemleri" as={NavLink} to="/categories-crud" />
              <Dropdown.Item icon="newspaper outline" text="Gönderi İşlemleri" as={NavLink} to="/posts-crud" />
              <Dropdown.Divider/>
              <Dropdown.Item icon="sign-out" text="Çıkış" onClick={()=>handleSignout()}/>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  );
}
