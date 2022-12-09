import React, {useState, useEffect} from "react"
import AlbumsContainer from "./Components/AlbumsContainer"
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"

function App(){
  const[albumData, setAlbumData] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:9292/albums")
    .then((response) => response.json())
    .then(setAlbumData)
  },[])

  function addReviewToState(newReviewObj) {
    const newAlbumArray = [...albumData]
    const index = newAlbumArray.findIndex(a => a.id === newReviewObj.album_id)
    newAlbumArray[index].reviews.push(newReviewObj)
    setAlbumData(newAlbumArray)
  }

  function changeReviewInState(changedReviewObj) {
    console.log('sure wish i can replace this review', changedReviewObj)
    const changedAlbumArray = [...albumData]
    const index = changedAlbumArray.findIndex(a => a.id === changedReviewObj.album_id)
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
      <NavBar />
        <Switch>
          <Route path="/myalbums">
            <AlbumsContainer deleteReviewInState = {deleteReviewInState} addReviewToState = {addReviewToState} changeReviewInState = {changeReviewInState} albumData={albumData}/>
          </Route>
          <Route path="/potato">
            <>
            <h1>Potato!</h1>
            <p>I love Potatos. Escpecially potatos that meow!</p>
            </>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <h1>Sorry to ruin your day, 404 Not Found</h1>
          </Route>
      </Switch>
    </div>
    );
}

export default App;
