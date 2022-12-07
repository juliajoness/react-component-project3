import React from "react";

function ReviewComponent({reviewProp}){
    console.log("reviews:", reviewProp)

    return(
        <p>Comment:{reviewProp.comment} Rating:{reviewProp.rating}</p>
    )
}

export default ReviewComponent