import React from "react"
import AlbumImage from "./AlbumImage";

function AlbumsContainer({albumData}){

    // console.log("container:", albumData)

    const albumComponents= albumData.map(albumObj => {
        return <AlbumImage key={albumObj.id} albumProp={albumObj}/>
    })

    return(
        <div>
            {albumComponents}
        </div>
    )
}

export default AlbumsContainer;