function getSomeOfArray(numbers){
    let sum = 0;
    for(let i=0; i <numbers.length; i++){

        const index = i;
        const element = numbers[index];
        sum += element;
        console.log(index, element,  sum);
    }
    return sum;
}

const numbers = [21, 24, 65, 82, 10, 6];
getSomeOfArray(numbers);