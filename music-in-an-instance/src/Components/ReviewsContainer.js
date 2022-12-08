import React from "react";
import ReviewComponent from "./ReviewComponent";

function ReviewsContainer({reviewsData, reviewRemover, updateReview, setReviewsData}){

    

return(
    <div>
        {reviewsData.map(reviewObj => <ReviewComponent key={reviewObj.id} setReviewsData = {setReviewsData} reviewProp={reviewObj} reviewRemover = {reviewRemover} updateReview = {updateReview}/>)}
    </div>
    )
}

export default ReviewsContainer