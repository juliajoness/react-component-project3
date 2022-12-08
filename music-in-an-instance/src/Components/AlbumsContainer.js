import React,{useState} from "react"
import AlbumImage from "./AlbumImage";
import DropdownComponent from "./DropdownComponent";
import ReviewComponent from "./ReviewComponent";

function AlbumsContainer({albumData}){
    const [displayAlbum, setDisplayAlbum] = useState(albumData[0])

    return(
        <div className="image_container">
            {displayAlbum ? <AlbumImage albumProp={displayAlbum}/> : <h1>Click dropdown</h1> }
            <DropdownComponent setDisplayAlbum={setDisplayAlbum} dropProp = {albumData}/>
            {/* <ReviewComponent reivewProp={reviewsData} reviewRemover={reviewRemover} updateReview={updateReview} setReviewsData={setReviewsData}/> */}
        </div>
    )
}

export default AlbumsContainer;