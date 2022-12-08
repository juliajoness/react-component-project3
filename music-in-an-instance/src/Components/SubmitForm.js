import React, {useState} from "react";


function SubmitForm ({setReviewsData}) {
    const [comment, setComment] = useState ("")
    const [rating, setRating] = useState ("")

    const handleSubmit = (e) => 
    {e.preventDefault()
    

    setComment("")
    setRating("")
    
    fetch("http://localhost:9292/reviews", {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({comment: comment, rating: rating }),
}
    )
    .then((response) => response.json())
    .then((data)=> console.log(data))

    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input value={comment} type="text" name='comment' placeholder='Comment' onChange={(e) =>setComment(e.target.value)} required/>
                <input value={rating} type="number" min="1" max= "10" name='rating' placeholder='Rating' onChange={(e) =>setRating(e.target.value)} required/>
                <button type="submit" >Add Review</button>
            </form>
        </div>
    )

}

export default SubmitForm 