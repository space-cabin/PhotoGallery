/* eslint-disable no-loop-func */
const faker = require('faker');

const db = require('./database/index.js');
const Photo = require('./database/Model/Photo.js');

const randomNumberGenerator = () => {
  Math.floor(Math.random() * Math.floor(250));
};

let count = 0;

for (let i = 0; i < 100; i += 1) {
  const randomIndex1 = randomNumberGenerator();
  const randomIndex2 = randomNumberGenerator();
  const randomIndex3 = randomNumberGenerator();
  const randomIndex4 = randomNumberGenerator();
  const randomIndex5 = randomNumberGenerator();

  Photo.exists({ listing_id: i }, (err, res) => {
    if (err) {
      console.log(err);
    } else if (!res) {
      Photo.create({
        listing_id: i,
        liked: faker.random.boolean(),
        photos: [
          {
            photo_id: randomIndex1,
            url: `https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/${randomIndex1}.jpg`,
            description: faker.lorem.sentence(),
          },
          {
            photo_id: randomIndex2,
            url: `https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/${randomIndex2}.jpg`,
            description: faker.lorem.sentence(),
          },
          {
            photo_id: randomIndex3,
            url: `https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/${randomIndex3}.jpg`,
            description: faker.lorem.sentence(),
          },
          {
            photo_id: randomIndex4,
            url: `https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/${randomIndex4}.jpg`,
            description: faker.lorem.sentence(),
          },
          {
            photo_id: randomIndex5,
            url: `https://fec-airbnb-photos.s3-us-west-1.amazonaws.com/${randomIndex5}.jpg`,
            description: faker.lorem.sentence(),
          },
        ],
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

// const min = Math.ceil(5);
// const max = Math.floor(10);
// const numberofPhotos = Math.floor(Math.random() * (max - min + 1)) + min;
