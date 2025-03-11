let num=4;

// while(num>0){
//     console.log(num)
//     num--;
// }
// do{
//     console.log(num);
//     num--;
// }while(num>0)

// let arr=[1,2,3,4,5];
// let index=0;
// while(index<arr.length){
//     console.log(arr[index]);
//     index++;
// }

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let index=0;
// for(let index=0; index<arr.length; index++){
//     const item =arr[index];
//     // console.log(arr[index])
//
//     if(item%2!==0) break;
//
//         console.log(item)
//
// }
// for(;;){
//     const item =arr[index];
//     if(index<arr.lenth)break
//     if(item%2!==0) console.log(item)
//     // index++;
// }

let array=[1,2,3,4,5,6,7,8,9,10];

// function getSum(arr){
//     let sum=0;
//
//     for(let i=0; i<arr.length; i++){
//         const item=arr[i];
//
//         // if(typeof item ==="string") {
//         //     sum += +arr[i];
//         //     continue
//         // }
//         // else if(typeof item !=="number") continue;
//
//         sum+=item;
//     }
//     return sum;
// }
// gonst getSomething=(arr)=>{
//     return arr[Math.floor(Math.random()*arr.length)];
// }
// function getSum(arr){
// if(arr.length===0)return 0;
//     return arr[0]+getSum(arr.slice(1))
// }
// console.log(getSum(array))

// const pow =(a,b)=>{
// if(b===1) return a;
//     return a*pow(a,b-1)
// }
// console.log(pow(2,3))

const doSomething=( ...params)=>{
    console.log(params)
    const res=params.reduce((acc,cur,i)=>{
        return acc+cur;
    },0)
    console.log(res)
    // console.log(par1+par2+par3)
}
doSomething(1,2,3,4,5,6,7)