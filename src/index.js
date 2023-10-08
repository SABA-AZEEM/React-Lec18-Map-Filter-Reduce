// var numbers = [3, 56,5, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.
// const newArr=numbers.map((no)=>{
//   return no*2;
// })
// console.log(newArr);
// //forEach - Create a new array by keeping the items that return true.
// const newArr2=[];
// numbers.forEach((no)=>{
//    newArr2.push(no*3);
// })
// console.log(newArr2);
// //filter - Create a new array by keeping the items that return true.
// const newArr3=numbers.filter((no)=>{
//   return no>10;
// })
// console.log(newArr3);
// //Reduce - Accumulate a value by doing something to each item in an array.
// const accNo=numbers.reduce((acc,no)=>{
//   return acc+no;
// },0);
// console.log(accNo);
// //Find - find the first item that matches from an array.
// const findNo=numbers.find((no,idx)=>{
//   return no===5;
// })
// console.log(findNo)
// //FindIndex - find the index of the first item that matches.
// const findIndex=numbers.findIndex((no,idx)=>{
//   return no===5;
// })
// console.log(findIndex)
import emojipedia from "./emojipedia";
const emojiDescription = emojipedia.map((item) => {
  return item.meaning.slice(0, 100);
});
console.log(emojiDescription);
