import React, {useState} from "react";


function SubmitForm () {
    const [comment, setComment] = useState ("")
    const [ rating, setRating] = useState ("")

    const handleSubmit = (e) => 
    {e.preventDefault()
    setComment("")
    setRating("")
    let userInput = {comment: comment, rating: rating }
    
    fetch("http://localhost:9292/review", 
    {method: 'POST',
    headers: {
        'Content-type': 'application/json',
    },
    body: JSON.stringify(userInput)
    })
    .then( resp = resp.json())
    .then( postReview(userInput))
    }

    return(
        <div>
            <form>
                <input value={comment} type="text" name='comment' placeholder='Comment' onChange={(e) =>setComment(e.target.value)}/>
                <input value={rating} type="text" name='rating' placeholder='Rating' onChange={(e) =>setRating(e.target.value)}/>
                <button type="submit" >Add Review</button>
            </form>
        </div>
    )

}





export default SubmitForm 