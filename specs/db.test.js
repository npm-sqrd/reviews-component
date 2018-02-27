const mongoose = require('mongoose');

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