function evenOrOdd(number){
    const remainder = number % 2;

    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }

}
const numbers = evenOrOdd(120);
console.log(numbers);