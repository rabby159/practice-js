const country =  "Bangladesh";
const age = 52;
const isIndependent = true;
const student = 
{   id: 213902124, 
    section: 213, 
    name: "Md Rabby"
};
const friends = [12, 25, 36, 41, 15, 18, 21];
function add(number1, number2){
    return number1 + number2;
}


console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
console.log(Array.isArray(friends));
console.log(typeof add);

// check array include number 
console.log(friends.includes(25));
console.log(friends.includes(26));


// concat
const newFriendAge = [17, 26, 51, 71];
const allFriends = newFriendAge.concat(friends);
console.log(allFriends);
