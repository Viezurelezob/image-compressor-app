const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const compressImage = async (imageBuffer) => {
    try {
        
        const compressedImage = await sharp(imageBuffer)
            .jpeg({ quality: 10 })
            .toBuffer();
        return compressedImage;
    } catch (error) {
        console.error('Error compressing image:', error);
        throw error;
    }
};

const getImagePath = (imageName) => {
    
    const imagePath = path.join(__dirname, '..', 'public', 'images', imageName);
    
    if (fs.existsSync(imagePath)) {
        return imagePath;
    } else {
        throw new Error('Image not found');
    }
};


module.exports = { compressImage, getImagePath};