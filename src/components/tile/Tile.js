import React from "react";

export const Tile = ({tile}) => {
  return (
    <div className="tile-container">
      
        {Object.values(tile).map((value, index) => (
          <p key={index} className={`${index === 0 ? "tile-title" : "tile"}`} >
            {value}
          </p>
        ))}
        {/* <li>
          {tile.name || tile.title} <br></br>
        
          {tile.phone || tile.contact} <br></br>
        
          {tile.email || tile.date} <br></br>
        
          {tile.time ? tile.time : null}
        </li> */}
      
    </div>
  );
};
