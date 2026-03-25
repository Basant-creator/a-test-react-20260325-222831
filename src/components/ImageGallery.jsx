import React from 'react';

const images = [
  { url: "https://images.pexels.com/photos/7031595/pexels-photo-7031595.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Modern office interior" },
  { url: "https://images.pexels.com/photos/3665354/pexels-photo-3665354.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Modern workspace setup" },
  { url: "https://images.pexels.com/photos/4175028/pexels-photo-4175028.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Business people meeting" },
  { url: "https://images.pexels.com/photos/36712901/pexels-photo-36712901.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Business team collaboration" },
  { url: "https://images.pexels.com/photos/9489396/pexels-photo-9489396.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Professional developer coding" },
  { url: "https://images.pexels.com/photos/1230680/pexels-photo-1230680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", alt: "Professional desk setup" }
];

function ImageGallery() {
  return (
    <section className="section image-gallery-section" id="gallery">
      <div className="container">
        <h2>Our Insights</h2>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div className="gallery-item" key={index}>
              <img src={image.url} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageGallery;