/* 

তোমাকে একটা function দেওয়া হবে called isLGSeven(). এটা ইনপুট হিসেবে একটা number নিবে। 

এখন তোমার task: তোমাকে ইনপুট ভ্যালু এবং ৭ এর মধ্যে পার্থক্য বের করতে হবে। যদি এই পার্থক্য ৭ এর চেয়ে ছোট হয়, তখন তোমাকে return করতে হবে সেই বিয়োগফোল। নাহলে তোমাকে return করতে হবে double of the input । মানে যে সংখ্যা ইনপুট হিসেবে নিয়েছো সেটির দিগুন।

sample input & output
Input: 6;
Output: -1;

Input: -15;
Output: -22;

Input: 15;
Output: 30;

*/

function isLGSeven(number){
    if(typeof number !== "number"){
        return "please input number value";
    }
    else{
        const diff = number - 7;
        if(diff < 7){
            return diff;
        }
        else{
            return number * 2;
        }
    }
};

const value = isLGSeven(15);
console.log(value);