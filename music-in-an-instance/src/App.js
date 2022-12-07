import React, {useState, useEffect} from "react"
import AlbumsContainer from "./Components/AlbumsContainer"
import SubmitForm from "./Components/SubmitForm"
import ReviewsContainer from "./Components/ReviewsContainer"

const albumAPI = "http://localhost:9292/albums"
const reviewsAPI = "http://localhost:9292/reviews"

function App(){

const[albumData, setAlbumData] = useState([])
const [reviewsData, setReviewsData] = useState([])

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
    <ReviewsContainer reviewsData={reviewsData}/>
    <SubmitForm/>
  </div>
  );
}

export default App;
