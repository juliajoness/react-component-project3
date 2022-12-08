import React, {useState, useEffect} from "react"
import AlbumsContainer from "./Components/AlbumsContainer"
import SubmitForm from "./Components/SubmitForm"
import ReviewsContainer from "./Components/ReviewsContainer"

const albumAPI = "http://localhost:9292/albums"
const reviewsAPI = "http://localhost:9292/reviews"

function App(){
  console.log(updateReview)
  const[albumData, setAlbumData] = useState([])
  const [reviewsData, setReviewsData] = useState([])
  function removeReviewFromState (review){
    const remainingReviews = reviewsData.filter( (r) => r.id !== review.id)
    setReviewsData(remainingReviews)
  }


  function updateReview (review){
    const updatedReviews = []
    reviewsData.find((r) => {
      
      if (r.id === review.id){
        updatedReviews.push(review)
        // if we find the correct review then we want to replace it, 
        // then we'll need to set state or else we'll never see it happen
      } 
      else{updatedReviews.push(r)}
      
    })
    console.log(updatedReviews)
    setReviewsData(updatedReviews);
  }

  useEffect(()=>{
    fetch(albumAPI)
    .then((response) => response.json())
    .then(setAlbumData)
  },[])

  useEffect(()=>{
    fetch(reviewsAPI)
    .then((response) => response.json())
    .then(setReviewsData)
  },[])

  return(
    <div>
      <AlbumsContainer albumData={albumData}/>
      <ReviewsContainer setReviewsData = {setReviewsData} reviewsData={reviewsData} reviewRemover = {removeReviewFromState} updateReview = {updateReview}/>
      <SubmitForm reviewsData={reviewsData}setReviewsData = {setReviewsData}/>
    </div>
    );
}

export default App;
