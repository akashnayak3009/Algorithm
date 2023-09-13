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
