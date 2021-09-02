import React, { useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import { Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import PostService from '../../services/postService'

export default function PostListByCategory() {

    const [posts, setPosts] = useState([])

    let {id} = useParams()

    useEffect(() => {
        let postService = new PostService()
        postService.getByCategoryIdAndIsActive(id,true).then(result=>setPosts(result.data.data))
    }, [id])

    return (
        <div className="Post-list">
            <Grid container stackable >
                <Grid.Row>
                {posts.map(post=>(
                    <Grid.Column key={post.id} width={16} textAlign="justified" style={{marginTop:"5em"}}>
                        <Header size="large" as="h2" textAlign="justified">
                            <Header.Content as={NavLink} to={`/posts/${post.id}`} style={{color:"black"}}>{post.title}</Header.Content>
                            <Header.Subheader style={{float:"right"}}>{post.createDate} by
                            <Link to={`/posts/user/${post.user.id}`}> {post.user.firstName}</Link>
                            </Header.Subheader>
                            <Segment><Image centered src={post.image.url} /></Segment>
                        </Header>
                        <p>{post.content}</p>
                        <Divider style={{marginTop:"5em"}}/>
                    </Grid.Column>
                ))}
                </Grid.Row>
            </Grid>
        </div>
    )
}