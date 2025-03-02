import React, { useState } from 'react';
import ListingBox from '../components/ListingBox'; // Ensure correct import
import Sidebar from '../components/Sidebar';
import './Home.css';


const Home = () => {
  const [liked, setLiked] = useState([false, false, false]);

  const handleLike = (index) => {
    setLiked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="home-container">
      <main className="content">
      <div>
        <h2>Featured</h2>  {/* Add "Featured" text */}
        <div className="image-gallery">
          {['apartments/thedrakeandanderson/the-drake-and-anderson-court-davis-ca-primary-photo.jpg', 
            'apartments/almondwood/almondwood-apartments-20200519-064.jpg', 
            'apartments/sycamorelane/RB209244_HDR_Edit(20220221215739348).jpg'].map((image, index) => (
            <ListingBox
              key={index}
              image={image}
              description={`Description of Image ${index + 1}`}
              liked={liked[index]}
              onLike={() => handleLike(index)}
            />
          ))}
        </div>
      </div>
      <div>
        {/* High Rated Section */}
        <h2>High Rated</h2>
        <div className="image-gallery">
        {['apartments/thedrakeandanderson/the-drake-and-anderson-court-davis-ca-primary-photo.jpg', 'apartments/almondwood/almondwood-apartments-20200519-064.jpg', 'apartments/sycamorelane/RB209244_HDR_Edit(20220221215739348).jpg'].map((image, index) => (
            <ListingBox
              key={index + 3}  // Offset index to avoid duplicate keys
              image={image}
              description={`Description of High Rated Image ${index + 1}`}
              liked={liked[index + 3]}
              onLike={() => handleLike(index + 3)}
            />
          ))}
        </div>
      </div>
      </main>
    </div>
  );
};

export default Home;
