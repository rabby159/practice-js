function bestFriend(names){
    let bestFriend = names[0];
    for(let i = 0; i < names.length; i++){
        const element = names[i];
        if(element.length > bestFriend.length){
            bestFriend = element;
        }
    }
    return bestFriend;
}

const friendName = ['sajid', 'mamun', 'jubayeer', 'rony', 'ayub hossain santo'];
const names = bestFriend(friendName);
console.log(names);