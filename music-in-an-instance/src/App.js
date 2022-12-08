import React, {useState, useEffect} from "react"
import AlbumsContainer from "./Components/AlbumsContainer"
import SubmitForm from "./Components/SubmitForm"
import ReviewsContainer from "./Components/ReviewsContainer"

const albumAPI = "http://localhost:9292/albums"
const reviewsAPI = "http://localhost:9292/reviews"

function App(){

const[albumData, setAlbumData] = useState([])
const [reviewsData, setReviewsData] = useState([])

function removeReviewFromState (review){
  const remainingReviews = reviewsData.filter( (r) => r.id !== review.id)
  setReviewsData(remainingReviews)
}


function updateReview (review){
  const updatedReview = [...reviewsAPI, review];
  setReviewsData(updateReview);
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
    <SubmitForm setReviewsData = {setReviewsData}/>
  </div>
  );
}

export default App;
