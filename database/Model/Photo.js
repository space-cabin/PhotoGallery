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

const getAllPhotos = (id, callback) => {
  Photo.find({ listing_id: id }, (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

const updateLikeStatus = (_id, liked, callback) => {
  Photo.findByIdAndUpdate(_id, { liked }, (err) => {
    if(err) {
      callback(err);
    } else {
      console.log('updated');
      callback(null);
    }
  });
};

module.exports = {
  Photo,
  getAllPhotos,
  updateLikeStatus,
};
