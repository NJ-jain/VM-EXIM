import React, { useState } from "react";  

export const Image = ({ title, largeImage, smallImage }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="portfolio-item" style={{ overflow: 'hidden' }}>
      <div className="hover-bg">
        {" "}
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <img 
            src={smallImage} 
            className={`img-responsive hover-scale ${loaded ? 'img-loaded' : ''}`} 
            alt={title} 
            style={{ maxWidth: '100%', height: 'auto' }} 
            onLoad={() => setLoaded(true)}
          />{" "}
        </a>{" "}
      </div>
    </div>
  );
};