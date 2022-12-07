import React, {useState, useEffect} from "react"
import AlbumsContainer from "./Components/AlbumsContainer"
import SubmitForm from "./Components/SubmitForm"

const albumAPI = "http://localhost:9292/albums"
// const reviewsAPI = "http://localhost:9292/reviews"

function App(){

const[albumData, setAlbumData] = useState([])

useEffect(()=>{
  fetch(albumAPI)
  .then((response) => response.json())
  .then(setAlbumData)
},[])

return(
  <div>
    <AlbumsContainer albumData={albumData}/>
    <SubmitForm/>
  </div>
  );
}

export default App;
