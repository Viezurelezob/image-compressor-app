const { compressImage } = require('../services/imageService');
const { getImagePath } = require('../services/imageService');

const uploadAndCompressImage = async (req, res) => {
    
    if (!req.files || !req.files.image) {
        return res.status(400).send('No image file provided.');
    }

    try {
        const compressedImageBuffer = await compressImage(req.files.image.data);
        
        res.writeHead(200, {
            'Content-Type': 'image/jpeg',
            'Content-Length': compressedImageBuffer.length
        });
        res.end(compressedImageBuffer);
        console.log("suces")
    } catch (error) {
        console.error('Error in image upload and compression:', error);
        res.status(500).send('Server error during image processing');
    }
};



const sendImage = async (req, res) => {
    try {
        const imagePath = getImagePath(req.params.imageName);
        console.log( imagePath,"iamgepath controler")
        res.sendFile(imagePath);
    } catch (error) {
        res.status(404).send(error.message);
    }
};


module.exports = { uploadAndCompressImage ,sendImage };

