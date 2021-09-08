import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Divider, Grid, Header, Image, Segment } from "semantic-ui-react";
import PostService from "../../services/postService";

export default function PostList() {

  const initialState = {category:{active:""}}

  const [posts, setPosts] = useState([initialState]);

  useEffect(() => {
    let postService = new PostService();
    postService.getByIsActive(true).then((result) => setPosts(result.data.data));
  },[]);

  return (
    <div className="Post-list">
      <Grid container stackable>
        <Grid.Row centered>
          <Segment basic>
            <Header as="h1" size="huge">
              <Header.Content>Futbol Blog</Header.Content>
              <Header.Subheader>Futbol ile ilgili her şey!</Header.Subheader>
            </Header>
          </Segment>
        </Grid.Row>
        <Grid.Row>
          {posts.map((post) =>
            post.id ? (
              <Grid.Column
                key={post.id}
                width={16}
                textAlign="justified"
                style={{ marginTop: "5em" }}
              >
                <Header size="large" as="h2" textAlign="justified">
                  <Header.Content
                    as={NavLink}
                    to={`/posts/${post.id}`}
                    style={{ color: "black" }}
                  >
                    {post.title}
                  </Header.Content>
                  <Header.Subheader style={{float:"right"}}>
                    {post.createDate} by
                    <Link to={`/posts/user/${post.user.id}`}>
                      {" "}
                      {post.user.firstName}
                    </Link>
                  </Header.Subheader>
                  {post.image?
                  <Segment><Image centered src={post.image.url}/></Segment>
                  :console.log(post.title+" başlığı bir görsele sahip değil!")}
                </Header>
                <p>{post.content}</p>
                <Divider style={{ marginTop: "5em" }} />
              </Grid.Column>
            ) : null
          )}
        </Grid.Row>
        {/* Kategoriler listesi sağda*/}
      </Grid>
    </div>
  );
}
