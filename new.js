// console.log("Hello World!");
// console.log("Node.js is working!");
// for (let a=1; a<=10; a++){
//     console.log(a);
// }

// for (let a=10; a>=1; a--){
//     console.log(a);
// }

// for (let a=1; a<=50; a++){
//     if (a%2==0){
//     console.log(a);
// }}

// for (let a=1; a<=50; a++){
//     if (a%2==1){
//     console.log(a);
// }}

// var sum=0;
// for (let a=1; a<=100; a++){
//     sum=sum+a;
// }
// console.log(sum);

// var sum=0;
// for (let a=1; a<=100; a++){
//     if (a%2==0){ 
//     sum=sum+a;
// }
// }
// console.log(sum);

// var sum=0;
// for (let a=1; a<=100; a++){
//     if (a%2==1){ 
//     sum=sum+a;
// }
// }
// console.log(sum);

// for (let a = 1; a <= 10; a++) {
//     console.log("7 x " + a + " = " + (7 * a));
// }

// var sum = 1;

// for (let a = 1; a <= 6; a++) {
//     sum = sum * a;
// }

// console.log(sum);


// var count = 0;

// for (let a = 1; a <= 100; a++) {
//     if (a % 3 == 0) {
//         count++;
//     }
// }

// console.log(count);


// for (let a = 1; a <= 20; a++) {
//     console.log(a * a);
// }

// for (let a = 1; a <= 10; a++) {
//     console.log(a * a * a);
// }


// for (let a = 1; a <= 10; a++) {
//     console.log(a * 4);
// }


// var sum = 0;

// for (let a = 1; a <= 10; a++) {
//     sum = sum + (a * a);
// }

// console.log(sum);


// var sum = 0;

// for (let a = 1; a <= 5; a++) {
//     sum = sum + (a * a * a);
// }

// console.log(sum);


// for (let a = 1; a <= 100; a++) {
//     if (a % 3 == 0 && a % 5 == 0) {
//         console.log(a);
//     }
// }

// var number = 4;
// var count = 0;

// for (let a = 1; a <= number; a++) {
//     if (number % a == 0) {
//         count++;
//     }
// }

// if (count == 2) {
//     console.log("Prime number");
// } else {
//     console.log("Not a prime number");
// }

// for (let a = 2; a <= 50; a++) {
//     var count = 0;

//     for (let b = 1; b <= a; b++) {
//         if (a % b == 0) {
//             count++;
//         }
//     }

//     if (count == 2) {
//         console.log(a);
//     }
// }


// var n = 10;
// var a = 0;
// var b = 1;

// for (let i = 1; i <= n; i++) {
//     console.log(a);

//     var temp = a + b;
//     a = b;
//     b = temp;
// }


// for (let a = 1; a <= 100; a++) {
//     if (a % 7 == 0) {
//         console.log(a);
//     }
// }

// var number = 10;

// if (number % 2 == 0) {
//     console.log("Even number");
// }
// else {
//     console.log("Odd number");
// }

// var str = "hello";
// var reverse = "";

// for (let a = str.length - 1; a >= 0; a--) {
//     reverse = reverse + str[a];
// }

// console.log(reverse);

// var str = "orange";
// var reverse = "";

// for (let a = str.length - 1; a >= 0; a--) {
//     reverse = reverse + str[a];
// }

// if (str == reverse) {
//     console.log("Palindrome");
// }
// else {
//     console.log("Not a palindrome");
// }


// var number = 121;
// var original = number;
// var reverse = 0;

// while (number > 0) {
//     var digit = number % 10;
//     reverse = reverse * 10 + digit;
//     number = Math.floor(number / 10);
// }

// if (original == reverse) {
//     console.log("Palindrome");
// }
// else {
//     console.log("Not a palindrome");
// }

// var number = 153;
// var original = number;
// var count = 0;
// var sum = 0;

// var temp = number;

// while (temp > 0) {
//     count++;
//     temp = Math.floor(temp / 10);
// }

// temp = number;

// while (temp > 0) {
//     var digit = temp % 10;
//     sum = sum + Math.pow(digit, count);
//     temp = Math.floor(temp / 10);
// }

// if (sum == original) {
//     console.log("Armstrong number");
// }
// else {
//     console.log("Not an Armstrong number");
// }

// var numbers = [1, 2, 3, 4, 5];

// var double = (a) => a * 2;

// function doubleNumbers(array) {
//     var result = array.map(double);
//     return result;
// }

// console.log(doubleNumbers(numbers));

// var temperatures = [0, 10, 20, 30, 40];

// var fahrenheit = (a) => (a * 9/5) + 32;

// function convertTemperature(array) {
//     return array.map(fahrenheit);
// }

// console.log(convertTemperature(temperatures));

// var names = ["john", "jane", "bob"];

// var capitalize = (a) => a[0].toUpperCase() + a.slice(1);

// function capitalizeNames(array) {
//     return array.map(capitalize);
// }

// console.log(capitalizeNames(names));

// var numbers = [
//     {id: 1, value: 10},
//     {id: 2, value: 20}
// ];

// var getValues = (array) => {
//     return array.map(a => a.value);
// };

// console.log(getValues(numbers));

// var prices = [29.99, 10.50, 5.99, 100.00];

// var addDollar = (array) => {
//     return array.map(a => "$" + a.toFixed(2));
// };

// console.log(addDollar(prices));

// var numbers = [1,2,3,4,5,6,7,8,9,10];

// var oddNumbers = (array) => {
//     return array.filter(a => a % 2 != 0);
// };

// console.log(oddNumbers(numbers));

// var fruits = ["apple", "banana", "cherry", "dates"];

// var filterWords = (array) => {
//     return array.filter(a => a.length > 5);
// };

// console.log(filterWords(fruits));

// var array = [0, 1, "", null, undefined, "hello", false];

// var removeFalsy = (array) => {
//     return array.filter(a => Boolean(a));
// };

// console.log(removeFalsy(array));

// var numbers = [10, 20, 30, 40, 50];

// var greaterNumbers = (array) => {
//     return array.filter(a => a > 30);
// };

// console.log(greaterNumbers(numbers));

// var products = [
//     {item: "book", price: 50},
//     {item: "laptop", price: 1000}
// ];

// var expensiveProducts = (array) => {
//     return array.filter(a => a.price > 100);
// };

// console.log(expensiveProducts(products));


// var numbers = [1, 2, 3, 4, 5];

// var sumNumbers = (array) => {
//     return array.reduce((sum, a) => sum + a, 0);
// };

// console.log(sumNumbers(numbers));

// var numbers = [1, 2, 3, 4];

// var productNumbers = (array) => {
//     return array.reduce((product, a) => product * a, 1);
// };

// console.log(productNumbers(numbers));

// var words = ["hello", "world", "!"];

// var combine = (array) => {
//     return array.reduce((total, a) => total + a, "");
// };

// console.log(combine(words));


// var array = ["a", "b", "a", "c", "b"];

// var countElements = (array) => {
//     return array.reduce((count, a) => {
//         count[a] = (count[a] || 0) + 1;
//         return count;
//     }, {});
// };

// console.log(countElements(array));


// var numbers = [10, 20, 30, 40, 50];

// var average = (array) => {
//     var sum = array.reduce((total, a) => total + a, 0);
//     return sum / array.length;
// };

// console.log(average(numbers));

// var numbers = [1, 2, 3, 4, 5];

// var calculate = (array) => {
//     return array
//         .map(a => a * a)
//         .filter(a => a % 2 == 0)
//         .reduce((sum, a) => sum + a, 0);
// };

// console.log(calculate(numbers));


// var fruits = ["apple", "banana", "cherry"];

// var processWords = (array) => {
//     return array
//         .map(a => a.toUpperCase())
//         .filter(a => a.length > 5)
//         .join(",");
// };

// console.log(processWords(fruits));

// var temperatures = [0, 10, 20, 30];

// var calculateAverage = (array) => {
//     var result = array
//         .map(a => (a * 9/5) + 32)
//         .filter(a => a > 50);

//     var sum = result.reduce((total, a) => total + a, 0);

//     return sum / result.length;
// };

// console.log(calculateAverage(temperatures));

// var people = [
//     {name: "John", age: 30},
//     {name: "Jane", age: 25}
// ];

// var averageAge = (array) => {
//     var ages = array.map(a => a.age);
//     var sum = ages.reduce((total, a) => total + a, 0);

//     return sum / ages.length;
// };

// console.log(averageAge(people));


// var words = ["hello", "world", "javascript"];

// var calculateLength = (array) => {
//     return array
//         .map(a => a.length)
//         .filter(a => a > 5)
//         .reduce((sum, a) => sum + a, 0);
// };

// console.log(calculateLength(words));



const employees = [
    { name: "Alice", age: 30, salary: 70000, department: "Engineering" },
    { name: "Bob", age: 45, salary: 80000, department: "Marketing" },
    { name: "Charlie", age: 35, salary: 65000, department: "Engineering" },
    { name: "David", age: 50, salary: 90000, department: "Management" },
    { name: "Eve", age: 28, salary: 50000, department: "Marketing" },
    { name: "Frank", age: 40, salary: 75000, department: "Finance" },
    { name: "Grace", age: 32, salary: 62000, department: "Engineering" },
    { name: "Hannah", age: 27, salary: 55000, department: "Marketing" },
    { name: "Isaac", age: 38, salary: 68000, department: "HR" },
    { name: "Jack", age: 42, salary: 72000, department: "Finance" },
    { name: "Kara", age: 29, salary: 54000, department: "Engineering" },
    { name: "Leo", age: 33, salary: 58000, department: "HR" },
    { name: "Mona", age: 47, salary: 82000, department: "Marketing" },
    { name: "Nina", age: 31, salary: 69000, department: "Finance" },
    { name: "Oliver", age: 36, salary: 73000, department: "Management" }
];

// var result = (array) => {
//     return array.map(a => a.name.toUpperCase());
// };

// console.log(result(employees));

// var result = (array) => {
//     return array.filter(a => a.salary > 60000);
// };

// console.log(result(employees));

// var result = (array) => {
//     return array.reduce((sum, a) => sum + a.salary, 0);
// };

// console.log(result(employees));

// var result = (array) => {
//     var marketing = array.filter(a => a.department == "Marketing");

//     var sum = marketing.reduce((total, a) => total + a.salary, 0);

//     return sum / marketing.length;
// };

// console.log(result(employees));


// var result = (array) => {
//     var marketing = array.filter(a => a.department == "Marketing");

//     var sum = marketing.reduce((total, a) => total + a.salary, 0);

//     return sum / marketing.length;
// };

// console.log(result(employees));

// var result = (array) => {
//     return array.map(a => a.name);
// };

// console.log(result(employees));

// var result = (array) => {
//     return array.map(a => a.age + 5);
// };

// console.log(result(employees));

// var result = (array) => {
//     return array.map(a => ({
//         department: a.department,
//         salary: a.salary
//     }));
// };

// console.log(result(employees));

// var result = (array) => {
//     return array.filter(a => a.age > 35);
// };

// console.log(result(employees));

// var result = (array) => {
//     return array.filter(a => a.department == "Engineering");
// };

// console.log(result(employees));

// var result = (array) => {
//     return array.reduce((highest, a) => {
//         return a.salary > highest ? a.salary : highest;
//     }, 0);
// };

// console.log(result(employees));

// var result = (array) => {
//     return array.reduce((count, a) => count + 1, 0);
// };

// console.log(result(employees));

// var result = (array) => {
//     return array
//         .filter(a => a.salary > 70000)
//         .map(a => a.name);
// };

// console.log(result(employees));

// var result = (array) => {
//     return array
//         .filter(a => a.department == "Finance")
//         .reduce((sum, a) => sum + a.salary, 0);
// };

// console.log(result(employees));

// var result = (array) => {
//     var engineering = array.filter(a => a.department == "Engineering");

//     var sum = engineering.reduce((total, a) => total + a.age, 0);

//     return sum / engineering.length;
// };

// console.log(result(employees));

// var result = (array) => {
//     return array
//         .filter(a => a.department != "Management")
//         .map(a => a.salary);
// };

// console.log(result(employees));


// var result = (array) => {
//     return array.reduce((sum, a) => sum + a.age, 0);
// };

// console.log(result(employees));

// var result = (array) => {
//     return array
//         .filter(a => a.salary >= 60000 && a.salary <= 80000)
//         .map(a => a.name);
// };

// console.log(result(employees));


// var result = (array) => {
//     var total = array.reduce((sum, a) => sum + a.salary, 0);

//     var average = total / array.length;

//     var filtered = array.filter(a => a.salary > average);

//     return filtered.length;
// };

// console.log(result(employees));


// var numbers = [1, 2, 3, 4, 5];

// var copyArray = (array) => {
//     return [...array];
// };

// console.log(copyArray(numbers));

// var a = [1, 2, 3];
// var b = [4, 5, 6];

// var mergeArray = (x, y) => {
//     return [...x, ...y];
// };

// console.log(mergeArray(a, b));

// var numbers = [1, 2, 3];

// var addElement = (array, value) => {
//     return [...array, value];
// };

// console.log(addElement(numbers, 4));

// var numbers = [1, 2, 3];

// var addElement = (array, value) => {
//     return [value, ...array];
// };

// console.log(addElement(numbers, 0));


// var person = {
//     name: "John",
//     age: 25
// };

// var addProperty = (object) => {
//     return {...object, city: "Kochi"};
// };

// console.log(addProperty(person));


// var obj1 = {name: "John", age: 25};
// var obj2 = {age: 30, city: "Kochi"};

// var mergeObjects = (a, b) => {
//     return {...a, ...b};
// };

// console.log(mergeObjects(obj1, obj2));


// var numbers = [10, 20, 30];

// var addNumbers = (a, b, c) => {
//     return a + b + c;
// };

// console.log(addNumbers(...numbers));


// var text = "hello";

// var convertString = (str) => {
//     return [...str];
// };

// console.log(convertString(text));


// var person = {
//     name: "John",
//     age: 25,
//     city: "Delhi"
// };

// var updatePerson = (object) => {
//     return {...object, age: 30};
// };

// console.log(updatePerson(person));


// var numbers = [1, 2, 4, 5];

// var insertElement = (array) => {
//     return [
//         ...array.slice(0, 2),
//         3,
//         ...array.slice(2)
//     ];
// };

// console.log(insertElement(numbers));


// var getValues = (...numbers) => {
//     return numbers;
// };

// console.log(getValues(10, 20, 30, 40));


// var sumNumbers = (...numbers) => {
//     return numbers.reduce((sum, a) => sum + a, 0);
// };

// console.log(sumNumbers(10, 20, 30, 40));


// var separateArray = ([first, ...rest]) => {
//     return {
//         first: first,
//         remaining: rest
//     };
// };

// console.log(separateArray([10, 20, 30, 40]));


// var user = {
//     name: "John",
//     age: 25,
//     password: "abc123"
// };

// var removePassword = ({password, ...rest}) => {
//     return rest;
// };

// console.log(removePassword(user));


// var calculate = (a, b, ...rest) => {
//     return {
//         first: a,
//         second: b,
//         remaining: rest
//     };
// };

// console.log(calculate(10, 20, 30, 40, 50));


// var person = {
//     name: "John",
//     age: 25,
//     city: "Kochi",
//     country: "India"
// };

// var extractPerson = ({name, ...rest}) => {
//     return {
//         name: name,
//         otherDetails: rest
//     };
// };

// console.log(extractPerson(person));

// var printValues = (...values) => {
//     console.log(values);
// };

// printValues("John", 25, "Kochi", true);


// var getRemaining = ([first, second, ...rest]) => {
//     return rest;
// };

// console.log(getRemaining([10, 20, 30, 40, 50]));


// var getValues = (name, ...numbers) => {
//     return {
//         name: name,
//         extraValues: numbers
//     };
// };

// console.log(getValues("John", 10, 20, 30));


// var separate = ([first, ...rest]) => {
//     return {
//         first: first,
//         remaining: rest
//     };
// };

// console.log(separate([1, 2, 3, 4, 5]));

// var person = {
//     name: "John",
//     age: 25,
//     password: "abc123",
//     city: "Kochi"
// };

// var removeProperty = ({password, ...rest}) => {
//     return rest;
// };

// console.log(removeProperty(person));

// var mergeArrays = (...arrays) => {
//     return arrays.reduce((result, a) => [...result, ...a], []);
// };

// console.log(mergeArrays([1, 2], [3, 4], [5, 6]));


// var addValue = (...values) => {
//     return [...values, 100];
// };

// console.log(addValue(10, 20, 30, 40));


// var calculateSum = (...numbers) => {
//     return numbers.reduce((sum, a) => sum + a, 0);
// };

// console.log(calculateSum(10, 20, 30, 40, 50));

// const evenOdd = (num) => {
//     if (num % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// };

// console.log(evenOdd(8));

// const factorial = (num) => {
//     let result = 1;

//     for (let i = 1; i <= num; i++) {
//         result = result * i;
//     }

//     return result;
// };

// console.log(factorial(5));

// const fibonacci = (n) => {
//     let a = 0;
//     let b = 1;
//     let result = "";

//     for (let i = 1; i <= n; i++) {
//         result = result + a + " ";

//         let next = a + b;
//         a = b;
//         b = next;
//     }

//     return result;
// };

// console.log(fibonacci(7));

// const randomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// console.log(randomNumber(10, 20));

// const sumNumbers = (n) => {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//     }

//     return sum;
// };

// console.log(sumNumbers(5));

// const sumNumbers = (n) => {
//     if (n <= 0) {
//         return 0;
//     }

//     return n + sumNumbers(n - 1);
// };

// console.log(sumNumbers(5));


// const isPrime = (num) => {
//     if (num < 2) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// };

// console.log(isPrime(7));

// const isArmstrong = (num) => {
//     let original = num;
//     let temp = num;
//     let digits = 0;
//     let sum = 0;

//     while (temp > 0) {
//         digits++;
//         temp = Math.floor(temp / 10);
//     }

//     temp = num;

//     while (temp > 0) {
//         let digit = temp % 10;
//         sum = sum + Math.pow(digit, digits);
//         temp = Math.floor(temp / 10);
//     }

//     return sum === original;
// };

// console.log(isArmstrong(153));

// const isLeapYear = (year) => {
//     if (year % 400 === 0 ||
//         (year % 4 === 0 && year % 100 !== 0)) {
//         return true;
//     }

//     return false;
// };

// console.log(isLeapYear(2024));

// const reverseString = (str) => {
//     let result = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         result = result + str[i];
//     }

//     return result;
// };

// console.log(reverseString("hello"));

// const isPalindrome = (str) => {
//     let reverse = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse = reverse + str[i];
//     }

//     return str === reverse;
// };

// console.log(isPalindrome("madam"));

// const countVowels = (str) => {
//     let count = 0;
//     str = str.toLowerCase();

//     for (let i = 0; i < str.length; i++) {
//         if (
//             str[i] === "a" ||
//             str[i] === "e" ||
//             str[i] === "i" ||
//             str[i] === "o" ||
//             str[i] === "u"
//         ) {
//             count++;
//         }
//     }

//     return count;
// };

// console.log(countVowels("JavaScript"));

const titleCase = (str) => {
    let result = "";
    let newWord = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            result = result + str[i];
            newWord = true;
        } else if (newWord) {
            result = result + str[i].toUpperCase();
            newWord = false;
        } else {
            result = result + str[i].toLowerCase();
        }
    }

    return result;
};

console.log(titleCase("hello world javascript"));