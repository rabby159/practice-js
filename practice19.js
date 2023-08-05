const nameList = ['selim', 'rabby', 'hridoy', 'rony', 'ripon', 'jubayeer', 'rony', 'jubayeer', 'hridoy', 'liton', 'showan', 'liton', 'rabby'];

function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name) === false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueName = removeDuplicate(nameList);
console.log(uniqueName);