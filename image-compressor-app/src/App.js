import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      
      const response = await axios.post('http://localhost:5000/upload', formData, {
        responseType: 'arraybuffer', 
      });

    
      const blob = new Blob([response.data], { type: 'image/jpeg' });
      
      // Creating a URL for 
      const compressedImageUrl = URL.createObjectURL(blob);
      
      // Setting the state to render the image
      setCompressedImage(compressedImageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  return (
    <div className="App">
      <h2>Upload and Compress Image</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {compressedImage && (
        <div>
          <h3>Compressed Image</h3>
          <img src={compressedImage} alt="Compressed" style={{ maxWidth: '500px', maxHeight: '500px' }} />
        </div>
      )}
    </div>
  );
}

export default App;