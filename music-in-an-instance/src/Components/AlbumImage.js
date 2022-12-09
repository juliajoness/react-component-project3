import React, { useEffect, useState } from "react"
import ReviewComponent from "./ReviewComponent.js"
import SubmitForm from "./SubmitForm.js"

function AlbumImage({ albumProp, addReviewToState, changeReviewInState, deleteReviewInState}) {
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
    
    return (
        <div>
            <img className="image" src={albumProp.image_url} alt={albumProp.title} />
            <SubmitForm addReviewToState = {addReviewToState} album_id={albumProp.id}/>
            {albumProp.reviews.map(review => (
                <ReviewComponent deleteReviewInState = {deleteReviewInState} changeReviewInState = {changeReviewInState} reviewRemover={removeReviewFromState} updateReview={updateReview} setReviewsData={setReviews} reviewProp={review} />
            ))}
        </div>
    )
}

export default AlbumImage;


