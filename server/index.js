const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const db = require('../database/index.js');
const Photo = require('../database/Model/Photo.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/:listing_id', (req, res) => {
  const id = req.params.listing_id;
  Photo.getAllPhotos(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
})

app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}...`);
});

// Uncomment to download random pics
// const autoDownload = (count) => {
//   axios({
//     method: 'GET',
//     url: 'https://loremflickr.com/1920/1080/room,kitchen',
//     responseType: 'stream',
//   })
//     .then((response) => {
//       response.data.pipe(fs.createWriteStream(`./sampleImages/${count}.jpg`));
//     });
// };

// for (let i = 102; i < 250; i += 1) {
//   autoDownload(i);
// }
