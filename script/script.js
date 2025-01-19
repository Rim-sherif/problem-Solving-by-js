//1
function sum(a, b) {
    return a + b;
}
console.log(sum(3,5))

//2
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7))

//3
function reverse(){
    let str = "Hello";
    return str.split("").reverse().join("");
}
console.log(reverse())

//4
function largestNumber(){
    let numbers = [10, 5, 8, 2, 15];
    return Math.max(...numbers);
}
console.log(largestNumber())

//5
function evenNumbers(){
    let numbers = [1, 2, 3, 4, 5, 6];
    return numbers.filter(num => num % 2 === 0);
}
console.log(evenNumbers())

//6
function reverseWord(){
    let str = "route";
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseWord())

//7
function getAverage(){
    let numbers = [1, 2, 3, 4, 5];
    let sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}
console.log(getAverage())

//8
function getDay(day){
    if( day >= 1 && day <= 5){
        return "Weekday";
    }else if(day === 6 || day === 7){
        return "Weekend";
    }else {
        return "Invalid day number";
    }
}
console.log(getDay(5))

//9
function divisable(){
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = numbers.filter(num => num % 3 === 0 || num % 2 === 0);
    return result;
}
console.log(divisable())

//10
function finDIndex(number){
    let numbers = [1, 2, 3, 4, 5];
    let index = numbers.indexOf(number);
    return index === -1? -1 : index;   
}
console.log(finDIndex(10))
console.log(finDIndex(3))

//11
function factorial(num){
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5))

//12
function findKeys(){
    let obj = {name: "John", age: 30};
    let keys = Object.keys(obj);
    return keys;
}
console.log(findKeys())

//13
function unrepetedNum(){
    let arr = [1, 2, 2, 3, 4, 4, 5];
    let result = arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num));
    return result;
}
console.log(unrepetedNum())


//14
function occurrencesOfEachCharacter(){
    let str = "Hello";
    let result = {};
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(result[char]){
            result[char]++;
        } else {
            result[char] = 1;
        }
    }
    return result;
}
console.log(occurrencesOfEachCharacter())

//15 
function sortArr(){
    let arr = [5, 3, 8, 1, 2];
    return arr.sort((a, b) => a - b);
}
console.log(sortArr())

//16
function anagram(){
    let str1 = "listen";
    let str2 = "silent";
    let sortedStr1 = str1.split("").sort().join("");
    let sortedStr2 = str2.split("").sort().join("");
    if (sortedStr1 === sortedStr2)  return true ;  
}
console.log(anagram())

//17
function createCar(model, year) {
    return `Model: ${model}, Year: ${year}`;
}

console.log(createCar("Toyota",2022))

//19
function objHasSpecificProperty(property){
    let obj = {name: "Alice", age: 25};
    return property in obj;
}
console.log(objHasSpecificProperty("name"))
console.log(objHasSpecificProperty("address"))


//20
function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        default:
            return "Invalid operator";
    }
}

console.log(calculate(5, 3, "+"))
console.log(calculate(5, 3, "%"))