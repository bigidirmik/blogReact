import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import PostService from '../../services/postService'

export default function PostDetail() {

    const [post, setPost] = useState({
        user:{
            id: "",
        },
        image:{
            url:""
        }
    })

    let {id} = useParams()

    useEffect(() => {
        let postService = new PostService()
        postService.findById(parseInt(id)).then(result=>setPost(result.data.data))
    }, [id])

    return (
        <div className="Post-list">
            <Grid container stackable >
                <Grid.Row>
                    <Grid.Column key={post.id} width={16} textAlign="justified" style={{marginTop:"5em"}}>
                        <Header size="large" as="h2" textAlign="justified">
                            <Header.Content style={{color:"black"}}>{post.title}</Header.Content>
                            <Header.Subheader style={{float:"right"}}>{post.createDate} by
                            <Link to={`/posts/user/${post.user.id}`}> {post.user.firstName}</Link></Header.Subheader>
                            {post.image?
                            <Segment><Image centered src={post.image.url}/></Segment>
                            :console.log(post.title+" başlığı bir görsele sahip değil!")}
                        </Header>
                        <p>{post.content}</p>
                        <Divider style={{marginTop:"5em"}}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
