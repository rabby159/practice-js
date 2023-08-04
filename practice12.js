function getOddNumberOfAnArray(numbers){
    const oddNumber =[];
    for(let i=0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]

        if(element%2 !== 0){
            console.log(index, element);
            oddNumber.push(element);
        }
        
    }
    return oddNumber;
    
}

const numbers = [21, 24, 65, 82, 10, 6, 9, 7, 13];
getOddNumberOfAnArray(numbers)