import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";
import CategoryService from "../../services/categoryService";
import SignedIn from "../sign/SignedIn";
import SignedOut from "../sign/SignedOut";

export default function Navi() {
  const { userInitials } = useSelector((state) => state.user);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getByIsActive(true)
      .then((result) => setCategories(result.data.data));
  },[categories]);

  return (
    <div className="Navi">
      <Container>
        <Menu size="small">
          <Button icon="home" basic as={NavLink} to="/" />
          {categories.map((category) => (
            <Menu.Item
              key={category.id}
              name={category.categoryName}
              as={NavLink}
              to={`/posts/category/${category.id}`}
            />
          ))}
          <Menu.Menu position="right">
            {userInitials.length === 0 && <SignedOut />}

            {userInitials.length > 0 && <SignedIn />}
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
}
