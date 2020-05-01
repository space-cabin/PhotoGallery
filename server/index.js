const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

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
