const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  listing_id: Number,
  liked: Boolean,
  photos: [
    {
      photo_id: Number,
      url: String,
      description: String,
    },
  ],
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
