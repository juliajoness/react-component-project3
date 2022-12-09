import React,{useState} from "react"
import AlbumImage from "./AlbumImage";
import DropdownComponent from "./DropdownComponent";

function AlbumsContainer({albumData, addReviewToState, changeReviewInState, deleteReviewInState}){
    const [displayAlbum, setDisplayAlbum] = useState(albumData[0])
console.log(displayAlbum)
    return(
        <div className="image_container">
            <div className="dropdown">
                <DropdownComponent setDisplayAlbum={setDisplayAlbum} dropProp = {albumData}/>
            </div>
            {displayAlbum ? <AlbumImage deleteReviewInState = {deleteReviewInState} changeReviewInState = {changeReviewInState} addReviewToState= {addReviewToState} albumProp={displayAlbum}/> : <h1>Click dropdown</h1> }
        </div>
    )
}

export default AlbumsContainer;