// const distanceInMiles = 2;
// const totalKm = distanceInMiles * 1.60934;

// console.log(totalKm);

function milesToKm(miles){
    const km = miles * 1.60934;

    return km;
}

const miles1 = 2;
const miles2 = 6
const totalKm1 =  milesToKm(miles1);
const totalKm2 =  milesToKm(miles2);
console.log(totalKm1);
console.log(totalKm2);