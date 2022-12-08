import React, {useState} from "react";
import {Button, Form, Icon} from 'semantic-ui-react'
function ReviewComponent({reviewProp, reviewRemover, updateReview, setReviewsData}){
    console.log("reviews:", reviewProp)

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

    const onUpdate = () => {
        fetch(`http://localhost:9292/reviews/${reviewProp.id}`, {
            method:"PATCH"
        })
        .then(res => res.json())
        .then((review) => {
            updateReview(review)
        })
    }

    return(
        <p>
            Comment:{reviewProp.comment} Rating:{reviewProp.rating}
            <Button onClick={onDelete} size='mini' color='red'>X</Button>
            <div>
                <Form>
                    <Form.Field>
                        <label>Comment</label>
                        <input value={comment} type="text" name='comment' placeholder='Comment' onChange={(e) =>setComment(e.target.value)} required />
                    </Form.Field>
                        <Form.Field>
                            <label>Rating</label>
                            <input value={rating} type="number" min="1" max= "10" name='rating' placeholder='Rating' onChange={(e) =>setRating(e.target.value)} required/>
                        </Form.Field>
                            <Button type="submit" onClick={onUpdate} icon labelPosition='left'>
                                <Icon name='pencil'/>
                                Edit
                            </Button>
                </Form>
            </div>
        </p>
    )
}
export default ReviewComponent