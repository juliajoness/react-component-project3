import React, {useState} from "react";
import {Button, Form, Icon} from 'semantic-ui-react'
function ReviewComponent({reviewProp, reviewRemover, updateReview, setReviewsData}){

const [comment, setComment] = useState ("")
const [rating, setRating] = useState ("")

    const onDelete = () => {
        fetch(`http://localhost:9292/reviews/${reviewProp.id}`, {
            method:"DELETE"
        })
        .then(res => res.json())
        .then((review) => {
            reviewRemover(review)
        })
    }

    const onUpdate = (e) => {
        e.preventDefault()
        const newReview = {
            comment: comment,
            rating: rating
        }
        console.log(newReview)
        fetch(`http://localhost:9292/reviews/${reviewProp.id}`, {
            method:"PATCH",
            headers: {"Content-Type": "application/json:"},
            body: JSON.stringify(newReview)
        })
        .then(res => res.json())
        .then((review) => {
            updateReview(review)
        })
    }

    return(
        <div className="comment-display">
            <div>
                <h2>Comment:{reviewProp.comment}</h2> 
            <div/>
            <div>
                <h2>Rating:{reviewProp.rating}</h2>
            </div>
        </div>
            <br></br>
                <Button onClick={onDelete} size='mini' color='red'>X</Button>
            <br></br>
            <div>
                <Form onSubmit={onUpdate}>
                    <Form.Field>
                        <label>Comment</label>
                        <input value={comment} type="text" name='comment' placeholder='Comment' onChange={(e) =>setComment(e.target.value)} />
                    </Form.Field>
                        <Form.Field>
                            <label>Rating</label>
                            <input value={rating} type="number" min="1" max= "10" name='rating' placeholder='Rating' onChange={(e) =>setRating(e.target.value)}/>
                        </Form.Field>
                            <Button type="submit" icon labelPosition='left'>
                                <Icon name='pencil'/>
                                Edit
                            </Button>
                </Form>
            </div>
        </div>
    )
}
export default ReviewComponent