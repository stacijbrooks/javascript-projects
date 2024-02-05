const checkFive = require('../checkFive.js');
const test = require('./checkFive.js');
desctibe("checkFive", function() {
    test("Should return false for a number less than 5", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.")
    })
})