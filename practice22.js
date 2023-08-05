const phones = [
    {
        name: 'samsung',
        camera: 18,
        storage: '256gb',
        color: 'black',
        price: 35000
    },
    {
        name: 'iphone',
        camera: 8,
        storage: '256gb',
        color: 'black',
        price: 125000
    },
    {
        name: 'Xaomi',
        camera: 8,
        storage: '256gb',
        color: 'black',
        price: 25000
    },
    {
        name: 'Tecno',
        camera: 8,
        storage: '256gb',
        color: 'black',
        price: 16000
    }
];

function cheapestPhone(phones){
    let phonePrice = phones[0];
    for(let i = 0; i < phones.length; i ++){
        const phone = phones[i];
        if(phone.price < phonePrice.price){
            phonePrice = phone;
        }

        // console.log(phone);
    }
    return phonePrice;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);