/* 

তোমার এখন একটা ফাংশন বানাতে হবে যেটা একটি সংখ্যা ইনপুট নিবে। function টির নাম হবে isInteger()। আউটপুট হিসেবে একটি boolean রিটার্ন করবে।

সংখ্যাটি integer হলে true রিটার্ন করবে।
অন্যথায় false রিটার্ন করবে।


*/

function isInteger(value){
    if(typeof value !== 'number'){
        return "please input number value";
    }
    else{
         if(value % 1 === 0){
            return true;
         }
         else{
            return false;
         }
    }
}

const integer = isInteger(5);
console.log(integer);
