import React, { useState } from 'react';
import AlbumImage from './AlbumImage';

function DropdownComponent({ dropProp,setDisplayAlbum }) {

    let handleChange = (e) => {
        let index = e.target.value
        setDisplayAlbum(dropProp[index])
    }

    return (
        <div className="dropdown">
            <select  onChange={handleChange} className='album-selector'>
                <option value="Default">--Please Choose An Album--</option>
                {dropProp.map((dropObj,i) =>
                    <option key={i} value={i}>{dropObj.title}</option>
                )}
            </select>
        </div>
    )
}

export default DropdownComponent