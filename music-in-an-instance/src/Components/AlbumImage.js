import React, { useEffect, useState } from "react"
import ReviewComponent from "./ReviewComponent.js"
import SubmitForm from "./SubmitForm.js"

function AlbumImage({ albumProp }) {
    const [reviews, setReviews] = useState([])
    function removeReviewFromState (review){
        const remainingReviews = reviews.filter((r) => r.id !== review.id)
        setReviews(remainingReviews)
      }
    
      function updateReview (review){
        const updatedReviews = []
        reviews.find((r) => {
          if (r.id === review.id){
            updatedReviews.push(review)
          } 
          else{updatedReviews.push(r)}
        })
        setReviews(updatedReviews);
      }
    
    useEffect(() => {
        fetch(`http://localhost:9292/reviews_album/${albumProp.id}`)
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [albumProp])

    return (
        <div>
            <img className="image" src={albumProp.image_url} alt={albumProp.title} />
            <SubmitForm album_id={albumProp.id}/>
            {reviews.map(review => (
                <ReviewComponent reviewRemover={removeReviewFromState} updateReview={updateReview} setReviewsData={setReviews} reviewProp={review} />
            ))}
        </div>
    )
}

export default AlbumImage;


