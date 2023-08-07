/* 

তোমাকে একটা function দেওয়া হবে called mindGame( যা ইনপুট হিসেবে একটা positive number নিবে । )

এখন তোমার task: তোমাকে সেই নাম্বার এর সাথে 3 গুন করে, তারপর 10 যোগ করে, এরপর 2 দিয়ে ভাগ করে, তারপর 5 বিয়োগ করে, যা আউটপুট 
আসবে তা return করতে হবে।

sample input & output
Input: 5;
Output: 7.5


*/

function mindGame(number){
    if(typeof number !== "number"){
        return "please input number value";
    }
    else if(number <= 0){
        return "please input positive number value"
    }
    else{
        return ((((number * 3) + 10) / 2) - 5);
    }

    
}

const positiveNumber = mindGame(5);
console.log(positiveNumber);