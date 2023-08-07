function onlyPositive(numbers){
    for(let i = 0; i < numbers.length; i++){
        const index = numbers[i]
        if(index < 0 ){
            break;
        }
        console.log(index);
    }
}

const arrNumbers = [10, 20, 30, 35, 48, -52, 8, 13];
const numbers = onlyPositive(arrNumbers);