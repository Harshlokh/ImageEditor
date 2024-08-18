import React, { useState, useRef } from 'react';

function ImageLightrrom({ imageUrl }) {
  // Initialize states to neutral values
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [shadow, setShadow] = useState(0);
  const [highlights, setHighlights] = useState(100);
  const [exposure, setExposure] = useState(0);
  const [whites, setWhites] = useState(100);
  const [blacks, setBlacks] = useState(0);
  const [blur, setBlur] = useState(0);

  const canvasRef = useRef(null);

  // Handler functions
  const handleBrightnessChange = (event) => setBrightness(event.target.value);
  const handleContrastChange = (event) => setContrast(event.target.value);
  const handleShadowChange = (event) => setShadow(event.target.value);
  const handleHighlightsChange = (event) => setHighlights(event.target.value);
  const handleExposureChange = (event) => setExposure(event.target.value);
  const handleWhitesChange = (event) => setWhites(event.target.value);
  const handleBlacksChange = (event) => setBlacks(event.target.value);
  const handleBlurChange = (event) => setBlur(event.target.value);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.filter = `
        brightness(${brightness}%)
        contrast(${contrast}%)
        brightness(${100 - shadow}%)  /* Shadow adjustment */
        saturate(${highlights}%)
        brightness(${parseInt(exposure) + 100}%)
        brightness(${parseInt(whites) + 100}%)
        brightness(${100 - blacks}%) /* Blacks adjustment */
        blur(${blur}px) /* Blur effect */
      `;
      ctx.drawImage(img, 0, 0);

      // Create a download link
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/jpeg'); // Change 'image/jpeg' to the desired format
      link.download = 'edited-image.jpg'; // Change file name and extension if needed
      link.click();
    };
  };

  return (
    <div className="flex relative justify-start">
      <div className="mb-4 flex absolute">
        <img
          src={imageUrl}
          alt="Editable"
          className="w-full h-auto forresponallimg"
          height="600px"
          width="500px"
          style={{
            filter: `
              brightness(${brightness}%)
              contrast(${contrast}%)
              brightness(${100 - shadow}%)  /* Shadow adjustment */
              saturate(${highlights}%)
              brightness(${parseInt(exposure) + 100}%)
              brightness(${parseInt(whites) + 100}%)
              brightness(${100 - blacks}%) /* Blacks adjustment */
              blur(${blur}px) /* Blur effect */
            `,
          }}
        />
      </div>
      <div className="shiftit">
        <div className="w-64">
          <label>Brightness</label>
          <input
            type="range"
            min="0"
            max="200"
            value={brightness}
            onChange={handleBrightnessChange}
            className="range-slider w-full"
          />
          <br />

          <label>Contrast</label>
          <input
            type="range"
            min="0"
            max="200"
            value={contrast}
            onChange={handleContrastChange}
            className="range-slider w-full"
          />
          <br />

          <label>Shadow</label>
          <input
            type="range"
            min="0"
            max="100"
            value={shadow}
            onChange={handleShadowChange}
            className="range-slider w-full"
          />
          <br />

          <label>Highlights</label>
          <input
            type="range"
            min="0"
            max="200"
            value={highlights}
            onChange={handleHighlightsChange}
            className="range-slider w-full"
          />
          <br />

          <label>Exposure</label>
          <input
            type="range"
            min="-50"
            max="50"
            value={exposure}
            onChange={handleExposureChange}
            className="range-slider w-full"
          />
          <br />

          <label>Whites</label>
          <input
            type="range"
            min="0"
            max="200"
            value={whites}
            onChange={handleWhitesChange}
            className="range-slider w-full"
          />
          <br />

          <label>Blacks</label>
          <input
            type="range"
            min="0"
            max="100"
            value={blacks}
            onChange={handleBlacksChange}
            className="range-slider w-full"
          />
          <br />

          <label>Blur</label>
          <input
            type="range"
            min="0"
            max="20"
            value={blur}
            onChange={handleBlurChange}
            className="range-slider w-full"
          />
          <br />

          <button
            onClick={downloadImage}
            className="button-50"
          >
            Download Image
          </button>
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default ImageLightrrom;
