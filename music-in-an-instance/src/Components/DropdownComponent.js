import React, {useState} from 'react';
import AlbumImage from './AlbumImage';

function DropdownComponent({dropProp}){

    const dropData = dropProp.map((dropObj)=> {
        return (
            dropObj.title
            )
    })

return(
    <div>
        <select className='album-selector'>
            <option value="Default">--Please Choose An Album--</option>
            <option value="Album_Name">{dropData}</option>
        </select>
    </div>
)
} 

export default DropdownComponent