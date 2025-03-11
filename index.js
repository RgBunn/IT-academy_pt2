// console.log("hello");

// const variable =null;

// const object = {
//   name: "John",
//   age: 30,
//   married: true,
//   sayHello() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };
// console.log(object.name);
// object.sayHello();

// const func = (text) => {
//   console.log(text);
// };

// func("some text");
// //
// const obj={
//   key: 'value',
//       b:"value",
//   a:'value'
// }
// console.log(obj)
// const array=[1,2,3,4,5,6,7,8,9,10];
// console.log(array[10])
// const obj2=object;


// const array=[1,2,3,4,5,6,7,8,9,10];
// array.push(11)
// console.log(array.reverse())
// console.log(array.pop())
// const removed=array.pop()
// console.log(removed)
const array=[1,2,3,4,5,6,7,8,9,10];
// const el=array.indexOf(5)
//     array.splice(el,1,'five')
// console.log(array)

// function getSum(num1, num2) {
//   const sum=num1+num2;
//   return sum;
// }
// const sum=getSum(array[1],array[0])
// console.log(sum)
// const replaceInArray=(arr,from,to)=>{
//   // const newArr=arr.map((item)=>{
//     return arr.map((item)=>item===from?to:item
//     // if(item===from){
//     //   return to;
//     // }
//     // return item;
//   };
  // const index=arr.findIndex((value)=>value===from)
  // if(index>=0){
  //   array.splice(index,1,to)
  // }
  // return newArray;
// }
// replaceInArray(arr,5,"five")
// // const replacedArray=replaceInArray(array,5,"six")
// console.log(array)
// console.log(replacedArray)


const getDayName=(dayNumber)=>{
  switch (dayNumber){
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("There is only 7 days in a week!")
  }
}
getDayName(5)

