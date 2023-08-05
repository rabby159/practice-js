function maxInArray(numbers){

    let largest = numbers[0];

    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        console.log(index, element);

        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const heights = [167, 195, 132, 165, 182];
const maxHeights =  maxInArray(heights);

console.log("Max Height Person is: ",maxHeights);