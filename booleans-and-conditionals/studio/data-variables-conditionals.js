// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7) {
    console.log("Keep going!");
// add logic below to verify all astronauts are ready
} else if (astronautStatus === "ready") {
    console.log("Ready!"); 
// add logic below to verify the total mass does not exceed the maximum limit of 850000
} else if (totalMassKg < maximumMassLimit) {
    console.log("engines are preparing to start");
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
} else if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150) {
    console.log("Fuel temp is between -300 and -150");
// add logic below to verify the fuel level is at 100%
} else if (fuelLevel === 100) {
    console.log("Fuel level is at 100%");
// add logic below to verify the weather status is clear
} else if (weatherStatus === "clear") {
    console.log("Weather is clear!");
// Verify shuttle launch can proceed based on above conditions//
