const hello = require('./hello.js');
module.exports = hello;
describe("hello", function() {
    test("should return custom message when name is specified", function() {
        expect(hello("Jest")).toBe("Hello, Jest!");
     });
     test("should return a general greeting when name is not specified", function() {
        expect(hello()).toBe("Hello, World!");
    });
});