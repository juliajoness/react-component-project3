import React from "react";
import ReviewComponent from "./ReviewComponent";

function ReviewsContainer({reviewsData}){

    const reviewsComponent= reviewsData.map(reviewObj => {
        return <ReviewComponent key={reviewObj.id} reviewProp={reviewObj}/>
    })
return(
    <div>
        <h1> {reviewsComponent} </h1>
    </div>
    )
}

export default ReviewsContainer