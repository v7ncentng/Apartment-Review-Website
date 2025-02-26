import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

import './ListingBox.css';


const ListingBox = ({ image, description, liked, onLike }) => {
    console.log("Rendering ImageBox:", image, description);
    return (
      <div className="image-card">
        <div className="image-container">
          <img src={image} alt={description} />
          <span className="save-icon" onClick={onLike}>
          <FontAwesomeIcon 
            icon={faBookmark} 
            className={`bookmark-icon ${liked ? "saved" : "unsaved"}`} 
          />          
          </span>
        </div>
        <p>{description}</p>
      </div>
    );
  };
  
  export default ListingBox;
