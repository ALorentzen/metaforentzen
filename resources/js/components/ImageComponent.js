import React, { useState, useEffect } from 'react';

const ImageViewer = () => {
  // Initialize the index and image URLs
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState([]); // Load these dynamically
  
  // Show image at the given index
  const showImage = (imageUrl) => {
    const viewerImage = document.querySelector('.js-viewer-image');
    viewerImage.src = imageUrl;
    document.querySelector('.js-image-viewer').classList.remove('hidden');
    document.body.classList.add('noScroll');
    document.querySelector('.js-nav-header').classList.toggle('hidden');
  };

  useEffect(() => {
    // Simulate getting URLs dynamically
    setImageUrls([
      'url1',
      'url2', 
      // Add your URLs here
    ]);
    
    const closeButtons = document.querySelectorAll('.js-close-btn');
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.querySelector('.js-image-viewer').classList.add('hidden');
        document.body.classList.remove('noScroll');
        document.querySelector('.js-nav-header').classList.toggle('hidden');
      });
    });
    
    document.body.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelector('.js-image-viewer').classList.add('hidden');
        document.body.classList.remove('noScroll');
        document.querySelector('.js-nav-header').classList.toggle('hidden');
      }
    });

  }, []);
  
  return (
    <div>
      {imageUrls.map((url, index) => (
        <div className="js-individual-image" onClick={() => showImage(url)} key={index}>
          <img src={url} alt={`Image ${index}`} />
        </div>
      ))}

      {/* Your image viewer and other UI elements here */}
      
      <button className="js-next-btn" onClick={() => {
        setCurrentImageIndex((currentImageIndex + 1) % imageUrls.length);
        showImage(imageUrls[currentImageIndex]);
      }}>
        Next
      </button>
      
      <button className="js-prev-btn" onClick={() => {
        const newIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
        setCurrentImageIndex(newIndex);
        showImage(imageUrls[newIndex]);
      }}>
        Previous
      </button>
    </div>
  );
};

export default ImageViewer;
