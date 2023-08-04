// const volleyballPlayer = 84;
// const inFeet = volleyballPlayer / 12;

// console.log(volleyballPlayer, "inch Player height in feet: ",inFeet);

function inchToFeet(inches){
    const feet = inches / 12;

    return feet;
}

const inches1 = 84;
const inches2 = 94;
const inches3 = 114;
const inches4 = 62;
const checkFeet1 = inchToFeet(inches1);
const checkFeet2 = inchToFeet(inches2);
const checkFeet3 = inchToFeet(inches3);
const checkFeet4 = inchToFeet(inches4);

console.log("Inches to Feet: ", checkFeet1);
console.log("Inches to Feet: ", parseFloat(checkFeet2.toFixed(2)));
console.log("Inches to Feet: ", checkFeet3);
console.log("Inches to Feet: ", parseFloat(checkFeet4.toFixed(2)));