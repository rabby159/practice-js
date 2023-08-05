const jim = 69; 
const dela = 97;
const chinku = 99;

// if(jim > dela && jim > chinku){
//     console.log("Cake will go for Jim");
// }
// else if(dela > jim && dela > chinku){
//     console.log("Cake will go for Dela");
// }
// else{
//     console.log("Cake will go for Chinku")
// }
// console.log(findCake);

function getNumber(jim, dela, chinku){
    
    const maxNumber = Math.max(jim, dela, chinku);
    console.log(maxNumber);
    
    return maxNumber;
}

const numbers = getNumber(69, 97, 99);
// console.log(numbers);