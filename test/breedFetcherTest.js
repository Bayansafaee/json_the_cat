const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns a true if the error is made for an invalid breed/non-existant, via callback', (done) => {
    fetchBreedDescription('asdsadsa', (err, desc) => {
      // we expect an error for this scenario
      assert.equal(err, "breed not found");
      // we expect Desc to = null
      const expectedDesc = null;

      // check returned desc = null
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});