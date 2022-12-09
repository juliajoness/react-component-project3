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


  return(
    <div>
      <AlbumsContainer addReviewToState = {addReviewToState} albumData={albumData}/>
    </div>
    );
}

export default App;
