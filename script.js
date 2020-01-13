
// написати функцію, яка приймає стрічку
// наприклад
// *********correct*****
// const str = "border-left-color";
// // поверне "borderLeftColor"

// function foo(str){
//     const a = str.split("-"); 
//     for(let i = 0; i < a.length; i++){
//         a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1)
//     }
//       console.log(a.join(''));
// }

// foo(str);

// *********correct*****
// написати функцію, яка приймає стрічку
// const str = "www.facebook.com/userID/456";
// // і повертає іншу соцмережу
// // повинно повернути
// // "www.youtube.com/userID/456"

// function socm(str){
//     const ro = str.split("/");
//     ro.shift();
//     console.log("www.youtube.com/" + ro.join("/"));
// }
// socm(str);


// *********correct*****
// написати функцію, яка робить наступне
// є масив обєктів
// const arr = [
//   {
//     name: "name1",
//     age: 10
//   },
//   {
//     name: "name2",
//     age: 15
//   },
//   {
//     name: "name3",
//     age: 30
//   },
//   {
//     name: "name4",
//     age: 20
//   }
// ]

// функція приймає такий массив
// і перевіряє кожний обєкт
// якщо вік юзера менше 18,
// то видалити його з масиву(видалити обєкт)
// повернути массив без юзерів з віком менше 18

// function del(arr){
//     for(i = 0; i< arr.length; i++){
//         if (arr[i].age < 18){
//             delete arr[i];
//             // need to remove empty el
//         }
//     console.log(arr);
// }

// del(arr);


// *********correct*****
// написати функцію, яка при оголошенні
// не приймає аргументів
// тобто
// function func(){ // не приймає аргументів

// }

// console.log(func(10,20,30,40,50)); //-->повинно вернути 150
// але при виклику приймає числа
// функція повертає їхню суму


// function func(){ // не приймає аргументів
// let sum = "";
//   for (var i = 0; i < arguments.length; i++) {
//     sum = +sum + arguments[i];
//   }
//   return sum;
// }

// console.log(func(10,20,30,40,50));


// *********correct*****

// написати функцію, яка приймає масив обєктів
// const users = [
//   {
//     name: "John",
//     salary: 300,
//     age: 25
//   },
//   {
//     name: "Steve",
//     salary: 1100,
//     age: 25
//   },
//   {
//     name: "Steve",
//     salary: 2000,
//     age: 25
//   },
//   {
//     name: "Steve",
//     salary: 600,
//     age: 25
//   }
// ]

// в кого зарплата більше 1000,
// додати тому юзеру властивість isRich = true
// в кого менше 1000, isRich = false
// повернути модифікований массив
// function func(users){
//  for(i = 0; i < users.length; i++){
//         if (users[i].salary > 1000){
//             users[i].isRich = true;
//         }
//         else{
//             users[i].isRich = false;
//         }  
//     }
//      console.log(users);
// }
// func(users);




// *********correct*****
// const date = String(new Date());
// console.log(date);

// повернеться теперішня дата і час в форматі
// Wed Jan 08 2020 07:44:05 GMT+0200 (EET)
// можна вивести і побачити

// написати функцію, яка приймає масив обєктів
// const users = [
//   {
//     name: "user1",
//     age: 25
//   },
//   {
//     name: "user2",
//     age: 15
//   },
//   {
//     name: "user3",
//     age: 33
//   },
//   {
//     name: "user4",
//     age: 42
//   },
//   {
//     name: "user5",
//     age: 60
//   }
// ]


// function my(users){
//  const date = String(new Date());
//  let year = date.split(" ")[3];
//     for(i = 0; i < users.length; i++){
//         users[i].yearOfBirthday = year - users[i].age;
//     }
// console.log(users);
// }
// my(users);

// *********correct*****
//Написати функцію,яка повретає останні елементи з масиву. 
//Передаючи параметр 'n', ми отримаємо кількість останніх елементів. Наприклад, 
//console.log(last([7, 9, 0, -2]));
//console.log(last([7, 9, 0, -2],3));
//console.log(last([7, 9, 0, -2],6));
//Очікуваний результат :
//-2
//[9, 0, -2]
//[7, 9, 0, -2]

// function last(arg, n){
//     if(typeof n === "undefined"){
//         return arg.slice(arg.length - 1, arg.length);
//     }
//     else if(n > arg.length){
//         return arg;
//     }
//      else{
//         return arg.slice(arg.length - n, arg.length);
//     }    
// }

// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],6));


//Написати функцію, яка видалить всі значення 'null', '0', '""', 'false', 'undefined' і 'NaN' з масиву. 
//Наприклад : [NaN, 0, 15, false, -22, '',undefined, 47, null]
//Результат : [15, -22, 47]

// *********not correct*****
// const str =  [NaN, 0, 15, false, -22, '', undefined, 47, null]

// function my(str){
//      for (let i = 0; i <= str.length - 1; i++) {     
//         if (!+str[i] && str[i] !== 0 || str[i] === 0){
//         delete str[i];
//       }
//     }
// console.log(str);
// }
// my(str);


// *********correct*****
//Написати функцію, яка видаляє певний елеент з масиву. 
//Наприклад :
//console.log(removeArrayElement([2, 5, 9, 6], 5));
//[2, 9, 6]


// function removeArrayElement(arguments, n){
//     let a = arguments.indexOf(n);
//     arguments.splice(a, 1);
//      return arguments;
// }

// console.log(removeArrayElement([2, 5, 9, 6], 5));



// *********correct*****
//Написати фнукцію, яка визначаттиме чи масив містить переданий елемент. 
//Наприклад :
//arr = [2, 5, 9, 6];
//console.log(contains(arr, 5));
//[True]

// arr = [2, 5, 9, 6];

// function contains(arguments, n){
// return arr.includes(n);
// }
//  console.log(contains(arr, 7));


//Написати функцію, яка створить масив відповідно до переданих даних. 
//Наприклад :
//console.log(arrayFilled(6, 0));
//[0, 0, 0, 0, 0, 0]
//console.log(arrayFilled(4, 11));
//[11, 11, 11, 11]

// function arrayFilled(n, arrn){
//     const arr = [];
//     for (let i = 0; i < n; i++) { 
//     arr[i] = arrn;    
//      }
//      return arr;  
// }
// console.log(arrayFilled(6, 0));

// *********correct*****
//Написати дві функції:
//toArray(), яка конвертує цифри в масив цифер.
//toNumber(), яка конвертує масив цифер назад в цифри.
//Приклади:
//toArray(235) ➞ [2, 3, 5]
//toArray(0) ➞ [0]
//toNumber([2, 3, 5]) ➞ 235
//toNumber([0]) ➞ 0

// function toArray(num){
//     let arr = num.toString().split("");  
//     return arr;
// }
// console.log(toArray(235));


// function toNumber(arr){
// let num = arr.join("");
// return +num;
// }
// console.log(toNumber([2, 3, 5]));


// *********correct*****
//Написати функція, яка приймає масив і дзеркально додає до нього елементи масиву.
//Наприклад
//mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]
//mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]
//mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
//Увага:
//Останній елемент масиву не має повторюватись двічі.

// *********v1*****
// function mirror(){
//    let arg = [0, 2, 4, 6];
//    const b = arg.slice(0); //copy or original
// const a = b.reverse(); //mirror
// a.shift();
// var mirrormy = arg.concat(a);
// console.log(b);
// console.log(arg);
// console.log(mirrormy);
// }

//  mirror();


 // *********v2*****
// function mirror(){
//    let arg = [].slice.call(arguments);

//    const b = [].slice.call(arguments); //copy or original
// const a = b.reverse(); //mirror
// a.shift();
// var mirrormy = arg.concat(a);
// console.log(b);
// console.log("here is arg " + arg);
// console.log(mirrormy);
// }

// mirror([3, 5, 6, 7, 8]);



// *********correct*****
//Написати функцію, яка отримує масив стрінгів і повертає слова в яких саме чотири букви.
//Наприклад:
//isFourLetters(["Tomato", "Potato", "Pair"]) ➞ ["Pair"]
//isFourLetters(["Kangaroo", "Bear", "Fox"]) ➞ ["Bear"]
//isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ➞ ["Ryan", "Matt"]

// function isFourLetters(){
//   for(i = 0; i < arguments.length; i++){
//    console.log(arguments[0]);
//}


// function isFourLetters(args) {
//   let a =  args.map(x => x.length);
//   for(i = 0; i < a.length; i++){
//     if (a[i] === 4) {
//        let b = a.indexOf(a[i]);
//         console.log(args[b]);
//     }
//   }
// }
// isFourLetters(["Tomato", "Potato", "Pair"]);
// isFourLetters(["Kangaroo", "Bear", "Fox"]);
// isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]);




// *********correct*****
//Написати функція, яка отримує масив і повертає найменше його значення.
//Приклад:
//findSmallestNum([34, 15, 88, 2]) ➞ 2
//findSmallestNum([34, -345, -1, 100]) ➞ -345
//findSmallestNum([-76, 1.345, 1, 0]) ➞ -76
//findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]) ➞ -0.9999
//findSmallestNum([7, 7, 7]) ➞ 7


// Math.min.apply(null, numbers) 
// Math.min(...numbers)

// function findSmallestNum(numbers) {
//     console.log(Math.min.apply(null, numbers) );
// }

// findSmallestNum([34, 15, 88, 2]);
// findSmallestNum([34, -345, -1, 100]);



//Написати функцію, яка створю масив з переданого тільки з певною кількістю цифр.
//Наприклад
//filterDigitLength([88, 232, 4, 9721, 555], 3) ➞ [232, 555]
//// Включає тільки значення з трьома цифрами.
//filterDigitLength([2, 7, 8, 9, 1012], 1) ➞ [2, 7, 8, 9]
//// Включає тільки значення з однією цифрою.
//filterDigitLength([32, 88, 74, 91, 300, 4050], 1) ➞ []
//// Якщо нема жодного значення, то повертаємо пустий масив.
//filterDigitLength([5, 6, 8, 9], 1) ➞ [5, 6, 8, 9]

// function filterDigitLength(arg, num){
//     if (true) {}
//     let test = arg.filter(item.length === num);
//     console.log(test);
// }
// // let a =  args.map(x => x.length);

// filterDigitLength([88, 232, 4, 9721, 555], 3);



// *********correct*****
//Написати функцію, яка множить всі значення масиву на його довжину.
//Наприклад:
//MultiplyByLength([2, 3, 1, 0]) ➞ [8, 12, 4, 0]
//MultiplyByLength([4, 1, 1]) ➞ ([12, 3, 3])
//MultiplyByLength([1, 0, 3, 3, 7, 2, 1]) ➞  [7, 0, 21, 21, 49, 14, 7]
//MultiplyByLength([0]) ➞ ([0])
// function MultiplyByLength(arr){
//     let a = arr.length;
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] * a;
//     }
//     console.log(arr);
// }

// MultiplyByLength([2, 3, 1, 0]);
// MultiplyByLength([4, 1, 1]);

// *********correct*****
//Написати функцію, яка додає закінчення до кожного елементу масиву.
//Наприклад:
//addEnding(["clever", "meek", "hurried", "nice"], "ly")
//➞ ["cleverly", "meekly", "hurriedly", "nicely"]
//addEnding(["new", "pander", "scoop"], "er")
//➞ ["newer", "panderer", "scooper"]
//addEnding(["bend", "sharpen", "mean"], "ing")
//➞ ["bending", "sharpening", "meaning"]

// function addEnding(arr, end){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = arr[i] + end;
//     }
// console.log(arr);
// }

// addEnding(["clever", "meek", "hurried", "nice"], "ly");
// addEnding(["bend", "sharpen", "mean"], "ing");


// *********correct*****
//Написати функцію, яка повертає true, якщо хоча б один елемент в масиві є більший за переданий аргумент .
//Наприклад:
//existsHigher([5, 3, 15, 22, 4], 10) ➞ true
//existsHigher([1, 2, 3, 4, 5], 8) ➞ false
//existsHigher([4, 3, 3, 3, 2, 2, 2], 4) ➞ true
//existsHigher([], 5) ➞ false

// function existsHigher(arr, num){
// let results = arr.filter(item => item >= num);
// console.log(results.length > 0);
// }

// existsHigher([5, 3, 15, 22, 4], 10);
// existsHigher([1, 2, 3, 4, 5], 8);
// existsHigher([4, 3, 3, 3, 2, 2, 2], 4);


// *********correct*****
//Написати функцію, яка видалить всі елементи що діляться на 13.
//Наприклад:
//unlucky13([53, 182, 435, 591, 637]) ➞ [53, 435, 591]
// 182 і 637 діляться на 13.
//unlucky13([24, 316, 393, 458, 1279]) ➞ [24, 316, 393, 458, 1279]
// Жодне число не ділиться на 13.
//unlucky13([104, 351, 455, 806, 871]) ➞ []
// Всі числа діляться на 13.


// function unlucky13(arr){
//     for(let i = 0; i < arr.length; i++ )
//     if (arr[i] % 13 === 0) {
//         let a = arr.indexOf(arr[i]);
//         arr.splice(a, 1);

//     }
//     console.log(arr);
// }
// unlucky13([53, 182, 435, 591, 637]);
// unlucky13([24, 316, 393, 458, 1279]);


// *********correct*****
//Написати функцію, яка порахує різницю між найменшим і найбільшим значенням.
//Наприклад:
//diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ➞ 82
//// Найменше число -50, найбільше 32.
//diffMaxMin([44, 32, 86, 19]) ➞ 67
//// Найменше 19, найбільше 86.

// function diffMaxMin(arr){
//      console.log(Math.max.apply(null, arr) - Math.min.apply(null, arr));
// }

// diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]);
// diffMaxMin([44, 32, 86, 19]) ;


// Написати функцію, яка видаляє всі елемнти, що не є цифрами і повертає новий масив,
// який складається лише з цифр.
// Наприклад:
// filterList([1, 2, 3, "x", "y", 10]) ➞ [1, 2, 3, 10]
// filterList([1, "a", 2, "b", 3, "c"]) ➞ [1, 2, 3]
// filterList([0, -32, "&@A", 64, "99", -128]) ➞ [0, -32, 64, -128]

// function filterList (arr){
// for ( let i = 0; i < arr.length; i++){
//     if (typeof(arr[i]) === "string") {
//             arr.splice(arr.indexOf(arr[i]), 1);
//     }
// }
// console.log(arr);
// }


function filterList (arr){
for (let i=arr.length-1; i>=0; i--) {
    if (typeof(arr[i]) == "string") {
             arr.splice(i, 1);        
    }
}
console.log(arr);
}

filterList([1, 2, 3, "x", "y", 10]);
filterList([1, "a", 2, "b", 3, "c", "93"]);
filterList([0, -32, "&@A", 64, "99", -128])

