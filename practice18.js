const items = [12, 13, 22, 23, 33, 34, 41, 52];

const partial =items.splice(2, 3, 99, 55, 66);

console.log(items, partial);