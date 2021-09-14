import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { Divider, Grid, Header, Image, Segment } from "semantic-ui-react";
import PostService from "../../services/postService";

export default function PostListByUser() {
  const [posts, setPosts] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    let postService = new PostService();
    postService
      .getByUserIdAndIsActive(id, true)
      .then((result) => setPosts(result.data.data));
  }, [id]);

  return (
    <div className="Post-list">
      <Grid container stackable>
        <Grid.Row>
          {posts.map((post) => (
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
                      {" "}
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
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
