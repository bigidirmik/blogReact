import React, { useState } from 'react'
import { Button, Segment } from 'semantic-ui-react';
import CommentService from '../../services/commentService'

export default function CommentListByPost({postId}) {

    const [comments, setComments] = useState([])

    let commentService = new CommentService();

    function handleComments() {
        commentService.getByPostId(postId).then(result=>setComments(result.data.data))
    }

    return (
        <div style={{ width: "100%", maxWidth: "100%", margin: "1em" }}>

            <Segment><Button secondary onClick={()=>handleComments()}>Yorumlar</Button></Segment>

            {comments.map(comment=>(
                <Segment textAlign="left" key={comment.id}>
                    <strong>{comment.nick}</strong>
                    <hr/>
                    <p>{comment.content}</p>
                </Segment>
            ))}

        </div>
    )
}
