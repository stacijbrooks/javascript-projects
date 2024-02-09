
let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput(number) {
        if (number % 2 === 0 && number % 3 !== 0 && number % 5 !== 0) {
            return 'Launch!';
        }
    }
};
module.exports = launchcode;

