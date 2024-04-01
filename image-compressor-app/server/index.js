// Import necessary modules
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');



const app = express();
app.use(cors());
const port = 5000;


app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use(fileUpload({
    createParentPath: true
}));

// Serve static files from 'public' directory (if you have static assets like images, CSS, JavaScript)
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Image Compressor Server is running!');
});


app.use(imageRoutes);


app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));
