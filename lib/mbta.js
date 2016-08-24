'use strict';

let start = ("Copley");
let end = ("Kenmore");

let GreenLine = ["Government", "Center", "Park Street", "Boylston",
    "Arlington", "Copley", "Hynes", "Kenmore"];

let OrangeLine = ["North Station", "Haymarket", "Park Street",
    "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"];
let RedLine = ["South Station", "Park Street", "Kendall",
    "Central", "Harvard", "Porter", "Davis", "Alewife"];

for(let i in RedLine) {
if(start == RedLine[i]){
 startInt = i;
console.log(startInt);
}
if(end == RedLine[i]) {
 endInt = i;
console.log(endInt);
}
}
for(let i in GreenLine) {
if(start == GreenLine[i]){
 startInt = i;
console.log(startInt);
}
if(end == GreenLine[i]) {
 endInt = i;
console.log(endInt);
}
}
for(let i in OrangeLine) {
if(start == OrangeLine[i]){
 startInt = i;
console.log(startInt);
}
if(end == OrangeLine[i]) {
 endInt = i;
console.log(endInt);
}
}
let distance = startInt - endInt;

// Absolute value if traveling backwards
console.log("The distance between the start and end is: " + Math.abs(distance));
