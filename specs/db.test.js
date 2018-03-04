const mongoose = require('mongoose');
const db = require('../db/mongodb.js');

describe('DB Test', () => {
  beforeAll((done) => {
    mongoose.connect('mongodb://localhost/data');

    let db = mongoose.connection;

    db.on('error', (err) => {
      done.fail(err);
    });

    db.once('open', () => {
      done();
    });
  });

  it('If it gets here, it proves that db is connected', () => {
    expect(1).toBe(1);
  })
});


test('Should return error if no such restaurant', async () => {
    try {
        await Restaurant.findByRestaurantId(90976);
    } catch (err) {
        expect(err).toBeTruthy();
        expect(err.message).toEqual('Restaurant is not defined');
    }
});