import React, {useState, useEffect} from "react"
import AlbumsContainer from "./Components/AlbumsContainer"

function App(){
  const[albumData, setAlbumData] = useState([])
  // const[reviewsData, setReviewsData] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:9292/albums")
    .then((response) => response.json())
    .then(setAlbumData)
  },[])

  function addReviewToState(newReviewObj) {
    // console.log('sure wish i could add this review to state', newReviewObj)
    const newAlbumArray = [...albumData]
    const index = newAlbumArray.findIndex(a => a.id === newReviewObj.album_id)
    newAlbumArray[index].reviews.push(newReviewObj)
    setAlbumData(newAlbumArray)
  }

  function changeReviewInState(changedReviewObj) {
    console.log('sure wish i can replace this review', changedReviewObj)
    const changedAlbumArray = [...albumData]
    const index = changedAlbumArray.findIndex(a => a.id === changedReviewObj.album_id)
    // changedAlbumArray[index].reviews.slice(changedReviewObj)
    const newReviewsArray = changedAlbumArray[index].reviews.map(r => r.id === changedReviewObj.id ? changedReviewObj : r)
    changedAlbumArray[index].reviews = newReviewsArray
    setAlbumData(changedAlbumArray)
  }

  function deleteReviewInState(deletedReviewObj) {
    const changedAlbumArray = [...albumData]
    const index = changedAlbumArray.findIndex(a => a.id === deletedReviewObj.album_id)
    const deleteReviewsArray = changedAlbumArray[index].reviews.filter(r => r.id !== deletedReviewObj.id ? deletedReviewObj : r)
    changedAlbumArray[index].reviews = deleteReviewsArray
    setAlbumData(changedAlbumArray)
  }

  return(
    <div>
      <AlbumsContainer deleteReviewInState = {deleteReviewInState} addReviewToState = {addReviewToState} changeReviewInState = {changeReviewInState} albumData={albumData}/>
    </div>
    );
}

export default App;
