import React, { useState } from 'react';
import AlbumImage from './AlbumImage';

function DropdownComponent({ dropProp }) {

    let handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <select  onChange={handleChange} className='album-selector'>
                <option value="Default">--Please Choose An Album--</option>
                {dropProp.map(dropObj =>
                    <option value={dropObj.image_url}>{dropObj.title}</option>
                )}
            </select>
        </div>
    )
}

export default DropdownComponent