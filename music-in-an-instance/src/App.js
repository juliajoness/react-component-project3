import React, {useState, useEffect} from "react"
import AlbumsContainer from "./Components/AlbumsContainer"

const albumAPI = "http://localhost:9292/albums"
// const reviewsAPI = "http://localhost:9292/reviews"

function App(){

const[albumData, setAlbumData] = useState([])

useEffect(()=>{
  fetch(albumAPI)
  .then((response) => response.json())
  .then(setAlbumData)
},[])

// console.log(albumData)

return(
  <div>
    <AlbumsContainer albumData={albumData}/>
  </div>
  );
}

export default App;
