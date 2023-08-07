/* 

ফাংশন নাম দিতে হবে isJavaScriptFile । এই ফাংশন প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(string) যেটি হবে একটি ফাইল নেম (যেমনঃ 'index.js') । যদি এটি জাভাস্ত্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন হবে।


*/

function isJavaScriptFile(string){
    if(typeof string !== 'string'){
        return "input valid string";
    }
    else{
        if(string.toLowerCase().endsWith(".js") === true){
            return true;
        }
        else{
            return false;
        }
    }
}

const stringMsg = isJavaScriptFile('index.js');
console.log(stringMsg);