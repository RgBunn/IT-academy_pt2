// const response=[];
//
// class BasketError extends Error{
//     constructor(message='BasketError'){
//         super(message );
//         this.basket=true;
//     }
// }
// class EmptyBasketError extends BasketError{
//     constructor(message='EmptyBasketError'){
//         super(message);
//         this.emptyBasket=true;
//     }
// }
// const basketError=new BasketError();
// const emptyBasketError=new EmptyBasketError();
//
// console.log(basketError instanceof BasketError);
// console.log(emptyBasketError instanceof EmptyBasketError);
// try{
//     try{
//         try {
//             if(!response.length)throw emptyBasketError;
//         }catch(e){
//
//             if(!e instanceof EmptyBasketError) throw e;
//             console.error(e, 'level3');
//         }
//     }catch(e){
//         if(!e instanceof BasketError) throw e;
//         console.error(e, 'level2');
//     }
//
// }catch(e){
//     console.error(e, 'level1');
// }
//
//
//
// class DivisionError extends Error{
//     constructor(){
//         super('Division by zero is not allowed');
//     }
// }
// const division=(a,b)=> {
//     if (b === 0) throw new DivisionError;
//     return a / b;
// }
// try{
//     console.log(division(4,0));
// }catch(e){
//     console.error(e, );
// }

/////////////////////////////////////
// const divide=function(a,b){
//     if(b===0){
//         throw new Error('divisionError');
//     }
//    return a/b;
// }
//
// try{
// console.log(divide(4,0));
// }catch(e){
//     console.error(e, 'divisionError');
// }
///////////////////////////////////

// const date = new Date(0);
//
// console.log(date);
/////////////////////////////////////////
// const date1=Date.now();
// console.log(date1);
// console.time('timeout');
// console.time('timeout2');
//
// const cb=()=>{
//     console.timeEnd('timeout');
// };
// // const cb2=()=>{
// //     console.timeEnd('timeout2');
// // };
// //
// // for(let i=0; i<1999; i++){
// //     document.body.append(i)
// // };
// setTimeout(cb, 2000);
// setTimeout(cb, 1000,'timeout2');

// const timerId=setTimeout(cb, 1000);
// clearTimeout(timerId);
/////////////////////////////////////////

// let count=0;
// console.time('interval');
// const id=setInterval(()=>{
//     count++;
//     if(count>10) clearInterval(id)
//     console.timeLog('interval')
// },1000);
/////////////////////////////////////////

// const counterFunction=function(num){
//     if(num > 0){
//         setTimeout(console.log(num),1000);
//         counterFunction(num--);
//     }
//
//
// }
// counterFunction(10);
/////////////////////////////////////////
// console.time('interval');
// let count=0;
//
// const cb=()=>{
//     console.timeLog('interval',count);
//     count++;
// }
//
// const id=setTimeout(()=>{
//     if(count>10){
//         clearTimeout(id);
//         console.log('Interval cleared')
//     }else{
//         setTimeout(cb,1000)
//     }
// });
// setTimeout(cb, 1000);

const counter=function(count){
    const id=setTimeout(()=>{
        console.log(count);
        count--;
        if(count>0){
            counter(count);
        }
    },1000)
}
counter(10);
