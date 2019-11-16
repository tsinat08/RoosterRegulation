const module = require('module');
const Rooster = require('../index');


describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            // Define expected output
            const expected = 'cock-a-doodle-doo!';

            // Call Rooster.announceDawn and store result in variable
            const actual = Rooster.announceDawn();

            // Use an assert method to compare actual and expected result
            assert.equals(actual, expected);
        })
    });
});