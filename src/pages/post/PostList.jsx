import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Divider, Grid, Header, Image, Segment } from "semantic-ui-react";
import PostService from "../../services/postService";
import Banner from "../../layouts/banner/Banner";

export default function PostList() {
  const initialState = { category: { active: "" } };

  const [posts, setPosts] = useState([initialState]);

  useEffect(() => {
    let postService = new PostService();
    postService
      .getByIsActive(true)
      .then((result) => setPosts(result.data.data));
  }, []);

  return (
    <div className="Post-list">
      <Banner />

      <Grid container stackable>
        <Grid.Row>
          {posts.map((post) =>
            post.id ? (
              <Grid.Column
                key={post.id}
                width={16}
                textAlign="justified"
                style={{ marginTop: "5em" }}
              >
                <Segment style={{ height: "100%" }}>
                  <Header size="large" as="h2" textAlign="justified">
                    <Header.Content
                      as={NavLink}
                      to={`/posts/${post.id}`}
                      style={{ color: "black" }}
                    >
                      {post.title}
                    </Header.Content>
                    <Header.Subheader style={{ float: "right" }}>
                      {post.createDate} by
                      <Link to={`/posts/user/${post.user.id}`}>
                        {post.user.firstName}
                      </Link>
                    </Header.Subheader>
                  </Header>

                  {post.image && (
                    <Image
                      floated="left"
                      style={{ height: "100px" }}
                      src={post.image.url}
                    />
                  )}
                  <p>{post.content}</p>
                </Segment>
                <Divider style={{ marginTop: "2.5em" }} />
              </Grid.Column>
            ) : null
          )}
        </Grid.Row>
      </Grid>
      {/* Kategoriler listesi sağda*/}
    </div>
  );
}
