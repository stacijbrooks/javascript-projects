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
preparedForLiftOff = true;
} else if (astronautStatus != "ready") {
    preparedForLiftOff = false; 
// add logic below to verify the total mass does not exceed the maximum limit of 850000
} else if (totalMassKg > 850000) {
    preparedForLiftOff = false;
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
} if (fuelTempCelsius >= -300) {
    preparedForLiftOff = false;
  } else if (fuelTempCelsius <= -150) {
    preparedForLiftOff = false;
// add logic below to verify the fuel level is at 100%
} else if (fuelLevel != 100) {
    preparedForLiftOff = false;
// add logic below to verify the weather status is clear
} else if (weatherStatus !="clear") {
    preparedForLiftOff = false;
}
if (preparedForLiftOff = true) {
 console.log("All systems are a go!");
console.log("Date", date);
console.log("Time", time);
console.log("Astronaut Count", astronautCount);
console.log("Crew Mass:", crewMassKg,"Kg");
console.log("Fuel Mass:", fuelMassKg, "Kg");
console.log("Shuttle Mass", fuelMassKg, "Kg");
console.log("Total Mass:", totalMassKg, "Kg");
console.log("Fuel Temperature", fuelTempCelsius, "C");
console.log("Weather Status", weatherStatus);
console.log("Have a safe flight astronauts!");
} else{
    console.log("Launch Cancelled")
}
