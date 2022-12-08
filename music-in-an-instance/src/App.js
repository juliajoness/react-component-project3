import React, {useState, useEffect} from "react"
import AlbumsContainer from "./Components/AlbumsContainer"
import SubmitForm from "./Components/SubmitForm"


function App(){
  const[albumData, setAlbumData] = useState([])
  const[reviewsData, setReviewsData] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:9292/albums")
    .then((response) => response.json())
    .then(setAlbumData)
  },[])


  return(
    <div>
      <AlbumsContainer albumData={albumData}/>
      <SubmitForm reviewsData={reviewsData} setReviewsData={setReviewsData}/>
    </div>
    );
}

export default App;
