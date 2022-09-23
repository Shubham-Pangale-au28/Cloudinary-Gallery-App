require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
const cloudinary = require('cloudinary').v2;

app.use(cors());
const port = process.env.PORT || 8000

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});

app.get('/', (req, res) => {
    res.send('Hello, I Am Shubham Vishram Pangale')
})

app.get('/photos', (req, res) =>{
    console.log("Cloudinary called");
    cloudinary.api
        .resources({
            type: 'upload',
            prefix: 'favs'
        })
        .then(result => {
            res.send(result)
            console.log(result)
        })
        .catch(err =>{
            console.log(err)
        })
})

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
})