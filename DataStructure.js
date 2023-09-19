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

//PANAGRAM

// function isPanagram(str){
//     const alpha='abcdefghijklmnopqrstuvwxyz'
//     const lowerStr = str.toLowerCase();

//     for(const char of alpha){
//         if(!lowerStr.includes(char)){
//             return false;
//         }
//     }
//     return true;
// }

// const sentence =" The quick brown fox jumps er the lazy dog";

// console.log(isPanagram(sentence));

// function isPanagram(str){
//     const newStr = str.toLowerCase().replace(/[^a-z]/g, '');

//     const uniqueChars =new Set(newStr);

//     return uniqueChars.size === 26;
// }

// const sentence =" The quick brown fox jumps over the lazy dog";

// console.log(isPanagram(sentence));

// function rotate(nums, n) {
//     const N = nums.length;
//     const newArray = [];
//     const B = n % N;
//     for (var i = 0; i < N; i++) {
//       const expectedPosition = (i + N - B) % N;
//       newArray[expectedPosition] = nums[i];
//     }
//     return newArray;
//   }

//   console.log(rotate([5, 4, 6, 7, 2, 1], 4).join(" "));

// function maxandmin(arr){
//     let max=arr[0];
//     let min=arr[0];
//     for(var i =0; i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//          else if(arr[i]<min){
//             min=arr[i];
//         }
//     }
//     return [max,min]
// }
// console.log(maxandmin([45,10,8,7,90,56,9,1]));

// function findArray(arr,n){
//     for (var i=0;i<arr.length;i++){
//         if(n===arr[i]) {
//             return "INDEX AT: " + i;
//         }
//     }
//     return "Not found";
// }
// const arr=[78,8,89,1,2,7,5];
// console.log(findArray(arr,78))

// function secondLargest(nums){
//     let max=nums[0];
//     for(var i=0;i<nums.length;i++){
//         if(nums[i]>max){
//             max=nums[i];
//         }
//     }
//     const secondArr= arr.filter(number=>number!=max);
//     let secMax=nums[0];
//     for(var i=0;i<secondArr.length;i++){
//         if(secondArr[i]>secMax){
//             secMax=secondArr[i];
//         }
//     }
//     return secMax;
// }
// const arr=[78,8,89,1,2,7,5];
// console.log(secondLargest(arr))

// function maxSubractMin(nums){

//     let max= nums[0];
//     let min= nums[1];

//     for(var i=0; i<nums.length;i++){
//        if(i%2==0){
//         if(arr[i]>max){
//             max=arr[i];
//         }
//        }else{
//         if(arr[i]<min){
//             min=arr[i];
//         }
//        }
//     }
//     return max-min;
// }
//  const arr=[8,99,1,92,7,95,80,91];
//  console.log(maxSubractMin(arr));

// function oddAndEven(nums){
//     let odd=[];
//     let even=[];

//     for(var i=0;i<nums.length;i++){
//         if(nums[i]%2===0){
//             even[i]=nums[i];
//         }
//         else{
//             odd[i]=nums[i];
//         }
//     }
//     const newOdd=odd.filter(number => number !== undefined && number !== null && number !== '');
//     const newEven=even.filter(number => number !== undefined && number !== null && number !== '');
//     return{newOdd, newEven};
// }
// const arr=[8,99,1,92,7,95,80,91];
// console.log(oddAndEven(arr));

// function sumArray(num, a, b) {
//     if (a > b || a > num.length || b > num.length || a === b)
//         return "Wrong Input";
//         let sum = 0;
//         for (var i = a - 1; i < b; i++) {
//             sum += num[i];
//         }
//         return sum;
//     }

// const arr = [8, 99, 1, 92, 7, 95];
// console.log(sumArray(arr, 4, 5));

// function isOver(num,n,m){
//     if(n>m) return "wrong input"
//     let sum =0;
//     for(var i=n-1; i<m-1;i++){
//         sum = num[m-1]-num[n-1]
//     }
//     return sum;
// }

// const input =[1,2,3,4,50,6,70,8,90,10];
// console.log(isOver(input,5,9));

// function equilibrium(nums, q) {
//     if (q > nums.length) return "Wrong input";

//     let sum = 0;
//     let sum1 = 0;

//     for (var i = 0; i < q; i++) {
//         sum += nums[i];
//     }

//     for (var i = q; i < nums.length; i++) {
//         sum1 += nums[i];
//     }

//     return sum1===sum ? "This is equilibrium index" : "Not equilibrium index";

// }

// const input = [3, 4, 3, 5, 5];
// console.log(equilibrium(input, 3));


// function allEvenNoIndexSum(nums){
//     let sum=0;

//     for(var i=0; i<nums.length;i++){
//         if(i%2===0){
//             sum += nums[i];
//         }
//     }
//     return sum;
// }

// const input = [3, 4, 3, 5, -5];
// console.log(allEvenNoIndexSum(input));



// function allOddNoIndexSum(nums){
//     let sum=0;

//     for(var i=0; i<nums.length;i++){
//         if(i%2!==0){
//             sum += nums[i];
//         }
//     }
//     return sum;
// }

// const input = [3, 4, 3, -5, -5];
// console.log(allOddNoIndexSum(input));


// function equilibrium(nums){
//     let totalSum=0;
//     for(var i=0;i<nums.length;i++){
//      totalSum +=nums[i];
//     }
//     let leftSum=0;
//     for(var i=0;i<nums.length;i++){
//         rightSum = totalSum  - leftSum -nums[i];
//         if(rightSum === leftSum){
//             return i;
//         }
//         leftSum+=nums[i];
//     }
//     return -1;
// }
// const number = [-7, 1, 5, 2, -4, 3, 0];
// console.log(equilibrium(number));

// function countIndices(arr) {
//     const n = arr.length;
//     let evenSum = 0;
//     let oddSum = 0;
//     let count = 0;
  
//     // Calculate the sum of even-indexed and odd-indexed elements
//     for (let i = 0; i < n; i++) {
//         if (i % 2 === 0) {
//             evenSum += arr[i];
//         } else {
//             oddSum += arr[i];
//         }
//     }
  
//     // Initialize the prefix sums
//     let prefixEvenSum = 0;
//     let prefixOddSum = 0;
  
//     // Iterate through the array and check if removing an element satisfies the condition
//     for (let i = 0; i < n; i++) {
//         if (i % 2 === 0) {
//             if (prefixEvenSum + oddSum - prefixOddSum === prefixOddSum + evenSum - prefixEvenSum - arr[i]) {
//                 count++;
//             }
//             prefixEvenSum += arr[i];
//         } else {
//             if (prefixEvenSum + oddSum - prefixOddSum - arr[i] === prefixOddSum + evenSum - prefixEvenSum) {
//                 count++;
//             }
//             prefixOddSum += arr[i];
//         }
//     }
  
//     return count;
// }

// // Example usage:
// const input1 = [2, 1, 6, 4];
// const input2 = [1, 1, 1];

// console.log(countIndices(input1)); // Output: 1
// console.log(countIndices(input2)); // Output: 3


// function findSum(array, D) {
//     const result=[];
//    for(let i=0;i<D.length;i++){
//     const [L, R] = D[i];
//     let sum=0;
//     for(let j=L;j<=R;j++){
//         sum +=array[j];
//     }
//     result.push(sum)
//    }
//    return result;
//   }

// const A = [1, 2, 3, 4, 5]
// const B = [[0, 3], [1, 2]]
// console.log(findSum(A,B))

// const C = [2, 2, 2]
// const D = [[0, 0], [1, 2]]
// console.log(findSum(C,D))


// function minimumTime(A){
//     let totalSum=0;
//     let max=0;
//     let B=0;
//     for(let i=0;i<A.length;i++){
//         totalSum += A[i];
//         if(max<A[i]){
//             max=A[i];
//         }
//          B = max*A.length;
//     }
//     return B-totalSum;
// }

// const A =[2, 4, 1, 3, 2];
// console.log(minimumTime(A))

// function productArray(A){
//     const result=[];
//     const productAll= A.reduce((prev,curr)=>prev*curr);
//     for(var i=0;i<A.length;i++){
//         result.push(productAll/A[i]);
//     }
//     return result;
// };

// const B = [1,2,3,4,5];
// console.log(productArray(B));

// function twoPair(str){
//     let count =0;
//     for(var i=0;i<str.length;i++){
//         if(str[i]=='a'){        
//             for(var j=i+1;j<str.length;j++){
//                 if(str[j]==='g' && str[i]<str[j]){
//                     count ++
//                 }
//             }
//         }
//     }
//         return count;
// }

// const alpha =['a','d','g','a','g','a','g','f','g'];
// console.log(twoPair(alpha))

// function twoPair(str){          //more optimised one
//     let count=0;
//     let sum=0;
//     for(i=str.length-1; i>=0;i--){
//         if(str[i]=='g'){    
//             count++;
//         }
//         else if(str[i]=='a'){
//             sum=sum+count;
//         }                                          
//     }
//     return sum;
// }
// const alpha =['a','d','g','a','g','a','g','f','g'];
// console.log(twoPair(alpha))

// function twoPair(str){
//     let count =0;
//     for(var i=0;i<str.length;i++){
//         if(str[i]==='a'){
//             if(str[i+1]==='g'){
//                 count ++;
//             }
//         }
//     }
//     return  count;
// }
// const alpha =['a','d','f','a','d','e','a','g','g'];
// console.log(twoPair(alpha))



