import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';

const slideShowStyles = {
  container: {
    width: '100%',
    maxWidth: '90vw',
    margin: '0 auto',
    position: 'relative',
    overflow: 'hidden'
  },
  imageWrapper: {
    width: '100%',
    height: '400px', // Reduced height for better proportion
    position: 'relative',
    backgroundColor: '#f5f5f5' // Light background for image loading
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain', // Changed to 'contain' to show full image
    objectPosition: 'center',
    transition: 'all 0.3s ease'
  },
  // Optional: Add gradient overlay
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100px',
    background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.3))',
    pointerEvents: 'none'
  }
};

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://interiosplash.com/wp-content/uploads/2024/09/9-optimized-1.webp',
        'https://st.hzcdn.com/simgs/97910d6b0407c3d1_14-0485/_.jpg',
        'https://thearchitectsdiary.com/wp-content/uploads/2024/04/Types-of-balcony-9-1024x667.webp',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prev => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <div style={slideShowStyles.container}>
            <div style={slideShowStyles.imageWrapper}>
                <img 
                    src={images[currentImage]} 
                    style={slideShowStyles.image} 
                    alt={`Slide ${currentImage + 1}`}
                />
                <div style={slideShowStyles.overlay} />
            </div>
        </div>
    );
};

const SlideShow = () => {
    return (
        <ImageSlider />
    );
};

export default SlideShow;