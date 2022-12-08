import React from "react"
import AlbumImage from "./AlbumImage";
import DropdownComponent from "./DropdownComponent";

function AlbumsContainer({albumData}){

    const albumComponents= albumData.map((albumObj) => {
        return <AlbumImage key={albumObj.id} albumProp={albumObj}/>
    })

    return(
        <div>
            {albumComponents}
            <DropdownComponent dropProp = {albumData}/>
        </div>
    )
}

export default AlbumsContainer;