// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function() {
  test('should have organization property equal to "nonprofit"', () => {
    expect(launchcode.organization).toEqual('nonprofit');
    });
  test('should have executiveDirector property equal to "Jeff"', () => {
    expect(launchcode.executiveDirector).toEqual('Jeff');
  ``});
  test('should have percentageCoolEmployees property equal to 100', () => {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
    // Write your unit tests here!
    });
  test('programsOffered array should include \'Web Development\', \'Data Analysis\', \'Liftoff\', and should be a length of 3', () => {
    expect(launchcode.programsOffered.includes('Web Development')).toBe(true);
    });
  test('should return "Launch!" when passed a number ONLY divisible by 2', () => {
    expect(launchcode.launchOutput(2)).toEqual('Launch!');
    });
  test('should return "Code!" when passed a number ONLY divisible by 3', () => {
    expect(launchcode.launchOutput(3)).toEqual('Code!');
    });
  test('should return "Rocks!" when passed a number ONLY divisible by 5', () => {
      expect(launchcode.launchOutput(5)).toEqual('Rocks!');
    });
  test('should return "LaunchCode!" when passed a number ONLY divisible by 2 and 3', () => {
        expect(launchcode.launchOutput(6)).toEqual('LaunchCode!');
    });
  test('should return "Code Rocks!" when passed a number ONLY divisible by 2 and 5', () => {
          expect(launchcode.launchOutput(10)).toEqual('Code Rocks!');
    });
  test('should return "LaunchCode Rocks!" when passed a number ONLY divisible by 2, 3 and 5', () => {
            expect(launchcode.launchOutput(30)).toEqual('LaunchCode Rocks!');
    });
  test('should return "Rutabagas! That does not work!" when it does not pass a number divisible by 2, 3 or 5', () => {
              expect(launchcode.launchOutput(17)).toEqual('Rutabagas! That does not work.!');
    });
  });