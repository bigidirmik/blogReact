import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import PostService from "../../services/postService";
import CommentAdd from "./CommentAdd";
import CommentListByPost from "./CommentListByPost";

export default function PostDetail() {
  const [post, setPost] = useState({
    user: {
      id: "",
    },
    image: {
      url: "",
    },
  });

  let { postId } = useParams();

  useEffect(() => {
    let postService = new PostService();
    postService
      .findById(parseInt(postId))
      .then((result) => setPost(result.data.data));
  }, [postId]);

  return (
    <div className="Post-list">
      <Grid container stackable>
        <Grid.Row>

          <Grid.Column
            key={post.id}
            width={16}
            textAlign="justified"
            style={{ marginTop: "5em" }}
          >
            <Segment>
              {post.image && <Image centered src={post.image.url} />}
              <Header size="large" as="h2" textAlign="justified">
                <Header.Content style={{ color: "black" }}>
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
              <p>{post.content}</p>
            </Segment>
          </Grid.Column>

          <CommentListByPost postId={post.id} />

          <CommentAdd postId={post.id} />

        </Grid.Row>
      </Grid>
    </div>
  );
}
