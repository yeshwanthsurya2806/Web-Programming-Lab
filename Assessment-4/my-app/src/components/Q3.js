import React, { useState } from "react";
import "./Q3.css"; // separate CSS for this component

function Q3() {
  // Dynamic image sources
  const images = [
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1016/600/400",
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1024/600/400",
  ];

  // useState for selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="q3-container">
      <h2>Q3 - Interactive Image Gallery</h2>

      {/* Large Preview */}
      <div className="q3-preview">
        <img src={selectedImage} alt="Preview" />
      </div>

      {/* Thumbnails */}
      <div className="q3-gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={selectedImage === img ? "active" : ""}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
      <footer>
        <p>Name: G Yeshwanth Surya</p>
        <p>Registration Number: 24BCT0041</p>
      </footer>
    </div>
  );
}

export default Q3;