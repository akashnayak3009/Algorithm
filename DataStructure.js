//Array Reversal

// function arrayReversal(arr){
//     var temp=[]
//     for(var i=0;i<arr.length;i++){
//         temp[i]=arr[arr.length-1-i];
//     }
//     return temp;
// }
// const array=[5,4,9,8,7,3];
// console.log(arrayReversal(array));

//Array reversal from given indexes

// function arrayReverseIndex(arr, a, b) {
//     var i = a;
//     var j = b;

//     while (i < j) {
//         var temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
//     return arr
// }

// const array = [5, 4, 9, 8, 7, 3];

// // Reverse the elements from index 2 to 3 (inclusive)
// console.log(arrayReverseIndex(array, 2, 3)); // Output: [5, 4, 8, 9, 7, 3]

// Palindrome Number-> Read the number same forward and same backward.

// function palindrome(num){
//      return num>0? num=== +num.toString().split('').reverse().join(""): false;  //through the javascript function
// }

// const nums=121;
// console.log(palindrome(nums))

//fibonaccci Number--> adding of digit and getting sum of their digit as their resulting digit.

// function fibonacci(x){

// FIRST METHOD
// return x<=1?x:fibonacci(x-1) + fibonacci(x-2); //by recursion

//second method
// if(x<0) return;
// const arr =[0,1];
// for (let i=2;i<=x;i++){
//     arr.push(arr[i-1]+arr[i-2]);
// }
// return arr[x];
// }
// console.log(fibonacci(6));

//Anaagram--> A anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original
//letters exactly once

//    function anagram(arr, ana){
//     var x=arr.split("").sort().join("");
//     var y=ana.split("").sort().join("");
//     return x.length===y.length? x===y : false;
//     }
//    const arr ="anagram";
//    const anag="nagaam"
//    console.log(anagram(arr, anag));

// Two sum
// function twoSum(arr, n) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === n) {
//                 return [arr[i], arr[j]]; // Return as an array
//             }
//         }
//     }
//     return []; // Return an empty array if no match is found
// }

// const nums = [5, 4, 7, 8, 7, 9];
// console.log(twoSum(nums, 13));

//Duplication of Number

// const originalArray=[1,2,2,3,4,5,6,6];
// const uniqueArray= originalArray.filter((value, index, self)=>{
//     return self.indexOf(value)===index;
// });
// console.log(uniqueArray);


//find the max and min number of array;

// const array=[4,5,7,8,1,9,0];

// const maxNumber=(arr)=>{
//   return arr.reduce((prev, next)=>{
//     return prev>next? prev:next;
//   })
// }

// console.log(maxNumber(array));

// const minNumber=(arr)=>{
//     return arr.reduce((prev,next)=>{
//         return prev<next?prev:next;
//     })
// }
// console.log(minNumber(array))


//SECOND LARGEST NUMBER

// function secondMax(arr){
//     let max =0;
//     let secondMax=0;

//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>max){
//             secondMax=max;
//             max=arr[i];
//         }else if (arr[i]>secondMax && arr[i] !==max){
//             secondMax= arr[i];
//         }
//     }
//     return secondMax;
// }

// const numbers =[5,2,-9,1,5,6];
// console.log(secondMax(numbers));

//missing values

// const missingValues=(arr)=>{
//     const n =arr.length +1;
//     const expectedValue = (n*(n+1)*(n+2))/6;
//     const actualValue=arr.reduce((acc, current)=>acc+current,0);
//     return expectedValue-actualValue;
// }

// const array=[1,2,3,4,5,6,7,9];
// console.log(missingValues(array));

//FACTORIAL OF NUMBER
// function factorial(n){
//     return n===0 ? 1 : n * factorial(n-1);
// }
// console.log(factorial(0));

//PRIME NUMBER

// function primeNumber(n){
//     if(n<1) return;
//     if(n<3) return "It's a prime Number"
//     if(n%2==0 || n%3==0 ) return "Not a prime";

//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) {
//           return "Not a prime";
//         }
//       }
    
//       return "It's a prime";

// }
// console.log(primeNumber(13))

// FIND THE VOWELS

// function vowelsCount(str){
//     const strArray=str.toLowerCase();
//     const vowels ="aeiou";

//     var count=0
//     for(var i=0;i<str.length;i++){
//         if(vowels.includes(strArray[i])){
//             count++
//         }
//     }
//     return count;
// }
// console.log(vowelsCount("my name is akash kumar nayak"));

//ARMSTRONG NUMBER

// function armstrong(num){
//     const  str= num.toString();
//     let sum=0;

//     for (var i =0;i<str.length;i++){
//         const digit = parseInt(str[i],10);
//         sum = sum + Math.pow(digit, str.length)
//     }
//     return  num===sum;
// }

// console.log(armstrong(47))