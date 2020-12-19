import React from 'react';

export default function Tile({showTile, children, id, disabled}){

    return(
    <button className="tile" disabled={disabled} id={id} onClick={showTile}>{children}</button>
    )
}