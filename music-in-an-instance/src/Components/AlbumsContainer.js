import React,{useState} from "react"
import AlbumImage from "./AlbumImage";
import DropdownComponent from "./DropdownComponent";

function AlbumsContainer({albumData, addReviewToState, changeReviewInState, deleteReviewInState}){
    const [displayAlbum, setDisplayAlbum] = useState(albumData[0])
console.log(displayAlbum)
    return(
       <div className="albumpage">
            <div className="image_container">
                <DropdownComponent setDisplayAlbum={setDisplayAlbum} dropProp = {albumData}/>
                {displayAlbum ? <AlbumImage deleteReviewInState = {deleteReviewInState} changeReviewInState = {changeReviewInState} addReviewToState= {addReviewToState} albumProp={displayAlbum}/> : <h1>Click dropdown</h1> }
            </div>
        </div> 
    )
}

export default AlbumsContainer;