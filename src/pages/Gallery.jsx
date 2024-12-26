import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import image1 from '../assets/gallery/img_03.jpg';
import image2 from '../assets/gallery/img_04.jpg';
import image3 from '../assets/gallery/img_05.jpg';
import image4 from '../assets/gallery/prod_06.jpg';
import image5 from '../assets/gallery/slide_02.jpg';
import image6 from '../assets/gallery/prod_04.jpg';
import image7 from '../assets/gallery/prod_09.jpg';
import image8 from '../assets/gallery/prod_10.jpg';
import image9 from '../assets/gallery/prod_11.jpg';
import image10 from '../assets/gallery/prod_12.jpg';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen w-10/12 mx-auto flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Gallery Page</h1>

      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover cursor-pointer rounded-lg"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={currentIndex}
          slides={images.map((image) => ({
            src: image,
            alt: 'Image',
            width: 800,
            height: 600,
          }))}
          renderNextButton={handleNext}
          renderPrevButton={handlePrev}
        />
      )}
    </div>
  );
};

export default Gallery;
