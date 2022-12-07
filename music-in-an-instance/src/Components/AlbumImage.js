import React from "react"

function AlbumImage({albumProp}){

    // console.log("images:", albumProp.image_url)

    return(
        <div>
            <img src={albumProp.image_url} alt={albumProp.title}/>
        </div>
    )
}

export default AlbumImage;


