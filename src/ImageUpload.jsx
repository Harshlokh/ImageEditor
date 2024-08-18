import React, { useState } from 'react';
import ImageLightrrom from './ImageLightrrom';

function ImageUpload() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 margintop">
            <label className="custom-file-upload">

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4 "
        
      />
       Upload Image
      </label>
      {image && <ImageLightrrom imageUrl={image} />}
    </div>
  );
}

export default ImageUpload;