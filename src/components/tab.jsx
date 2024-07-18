import React, { useState } from 'react';

const data = {
  categorize: {
    onion: [
      'img/portfolio/01-large.jpg',
      'img/portfolio/02-large.jpg',
      'img/portfolio/03-large.jpg',
      'img/portfolio/12-large.jpg',
    ],
    chilles: [
      'img/portfolio/04-large.jpg',
      'img/portfolio/05-large.jpg',
      'img/portfolio/06-large.jpg',
    ],
    pomegranate: [
      'img/portfolio/07-large.jpg',
      'img/portfolio/08-large.jpg',
      'img/portfolio/09-large.jpg',
    ],
    potato: [
      'img/portfolio/10-large.jpg',
      'img/portfolio/11-large.jpg',
    ],
  },
};

const Tab = ({ label, isActive, onClick }) => (
  <div
    style={{
      marginRight: '15px',
      padding: '10px',
      cursor: 'pointer',
      backgroundColor: isActive ? '#ddd' : '#f1f1f1',
      borderBottom: isActive ? 'none' : '1px solid #ccc',
      border: isActive ? '1px solid #ccc' : 'none',
    }}
    onClick={onClick}
  >
    {label}
  </div>
);

const TabContent = ({ images, onImageClick }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt="gallery"
        style={{
          width: '200px',
        //   height: '300px',
          margin: '5px',
          flex: '1 0 21%', // makes images responsive
          maxWidth: '300px',
          cursor: 'pointer',
        }}
        onClick={() => onImageClick(index)}
      />
    ))}
  </div>
);

const ImagePreview = ({ images, currentIndex, onClose, onNext, onPrevious }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}
  >
    <button onClick={onPrevious} style={{ position: 'absolute', left: '20px', fontSize: '2em', display:"flex", alignItems:"center", justifyContent:"center" }}>&lt;</button>
    <img src={images[currentIndex]} alt="preview" style={{ maxHeight: '80%', maxWidth: '80%' }} />
    <button onClick={onNext} style={{ position: 'absolute', right: '20px', fontSize: '2em',  display:"flex", alignItems:"center", justifyContent:"center" }}>&gt;</button>
    <button onClick={onClose} className='btn btn-error' style={{ position: 'absolute', top: '20px', right: '20px', color: 'red' }}>X</button>
  </div>
);

const GalleryTabs = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(data.categorize)[0]);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.categorize[activeTab].length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + data.categorize[activeTab].length) % data.categorize[activeTab].length);
  };

  return (
    <div>
      <div style={{ display: 'flex', padding: '10px', backgroundColor: '#f1f1f1', borderBottom: '1px solid #ccc' }}>
        {Object.keys(data.categorize).map((key) => (
          <Tab
            key={key}
            label={key}
            isActive={key === activeTab}
            onClick={() => setActiveTab(key)}
          />
        ))}
      </div>
      <div>
        {Object.keys(data.categorize).map((key) => (
          <div
            key={key}
            style={{ display: key === activeTab ? 'block' : 'none', padding: '10px', border: '1px solid #ccc', borderTop: 'none' }}
          >
            <TabContent images={data.categorize[key]} onImageClick={handleImageClick} />
          </div>
        ))}
      </div>
      {isPreviewOpen && (
        <ImagePreview
          images={data.categorize[activeTab]}
          currentIndex={currentImageIndex}
          onClose={handleClosePreview}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
        />
      )}
    </div>
  );
};

export default GalleryTabs;
