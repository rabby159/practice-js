function isLeapYear(year){
    const reminder = year % 4;

    if(reminder === 0){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2001;
const years = isLeapYear(myYear);
console.log("My birth year", myYear, "is LeapYear: ",years);