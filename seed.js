/* eslint-disable no-loop-func */
const faker = require('faker');

const db = require('./database/index.js');
const { Photo } = require('./database/Model/Photo.js');

const randomNumberGenerator = (min, max) => {
  const minVal = Math.ceil(min);
  const maxVal = Math.floor(max);
  return Math.floor(Math.random() * (maxVal - minVal)) + minVal;
};

let count = 0;

for (let i = 0; i < 100; i += 1) {
  const randomNumber = randomNumberGenerator(6, 15);

  const photos = [];
  for (let j = 0; j < randomNumber; j += 1) {
    const randomIndex = randomNumberGenerator(0, 300);
    const photo = {
      photo_id: randomIndex,
      url: `https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/${randomIndex}.jpg`,
      description: faker.lorem.sentence(),
    };
    photos.push(photo);
  }

  Photo.exists({ listing_id: i }, (err, res) => {
    if (err) {
      console.log(err);
    } else if (!res) {
      Photo.create({
        listing_id: i,
        liked: faker.random.boolean(),
        photos,
      }, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log('new item inserted', i);
          if (count === 99) {
            db.close();
            console.log('Disconnected');
          }
          count += 1;
        }
      });
    } else {
      console.log(`Failed to insert: existing entry with listing id: ${i}`);
      if (count === 99) {
        db.close();
        console.log('Disconnected');
      }
      count += 1;
    }
  });
}
