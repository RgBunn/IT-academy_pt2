// // console.log(window.localStorage.getItem("token"));
// localStorage.removeItem("token");
// localStorage.setItem("key1", 'skFgLSDKf');
// localStorage.setItem("key2", JSON.stringify({name:'key2',expires:2000}));
// localStorage.setItem("key3", [1,2,3]);
// // console.log(localStorage.length())
//
// // localStorage.clear();
// // for(let i=0; i<localStorage.length-1;i++){
// //     console.log(localStorage.key(i));
// // }
//
//
// const transformSecToMilliSec=(sec)=>sec*1000;
// const transformMinToMilliSec=(min)=>min*transformSecToMilliSec(60);
// const transformHoursToMilliSec=(min)=>min*transformMinToMilliSec(60);
//
// const setItemFromLocalStorage = (key,value,time)=>{
//     const item=JSON.parse(localStorage.getItem('myStorage') || {});
//     item[key]={
//         value,
//         expires:Date.now()+time,
//     }
//     localStorage.setItem('myStorage', JSON.stringify(item));
// }
// const getItemFromLocalStorage=(key)=>{
//     const itemFromLS=JSON.parse(localStorage.getItem(key));
//     const now=Date.now();
//
//     if(now < itemFromLS.expires){
//         return itemFromLS.value;
//     }else if(now > itemFromLS.expires){
// localStorage.removeItem(key);
// return null;
//     //     to fill later
//     }
// }
// setItemFromLocalStorage(('hello','world', transformMinToMilliSec(2)));
// setItemFromLocalStorage(('hello2','world2', transformMinToMilliSec(3)));
// getItemFromLocalStorage('hello')
////////////////////////////////////////////////////////

// window.addEventListener('storage', event => {
//     console.log(event)
// });
// window.onstorage=(event)=>{
//     console.log(event)
// }
////////////////////////////////////////////////////////
// localStorage.setItem('key','blah');
// console.log(localStorage.length);
// // localStorage.setItem('key','blahhhhhh');
// for(let i = 0; i < localStorage.length; i++){
//     console.log(localStorage.key(i));
// }
////////////////////////////////////////////////////////
// localStorage.setItem('key', {hello: 'world'})
// localStorage.setItem('key', [1,2,3])
////////////////////////////////////////////////////////
// const transformSecToMilliSeconds=(sec)=>sec*1000;
// const transformMinToMilliSeconds=(min)=>min*transformSecToMilliSeconds(60);
// const transformHoursToMilliSeconds=(hour)=>hour*transformMinToMilliSeconds(60);
//
// const setItemFromLocalStorage = (key,value,time) => {
//     const item=JSON.parse(localStorage.getItem('myStorage'))||{};
//     item[key]={
//         value,
//         expires:Date.now()+ time
//     }
//     localStorage.setItem('myStorage', JSON.stringify(item));
// }
// const getItemfromLocalStorage=(key)=>{
//     const item=JSON.parse(localStorage.getItem('myStorage'));
//     if(!item || !item[key]) return null;
//
//     const itemFromLS=item.key;
//     const now=Date.now();
//
//     if(now<itemFromLS.expires){
//         return itemFromLS.value;
//     }else{
//         delete itemFromLS[key];
//         localStorage.setItem('myStorage',JSON.stringify(item));
//         return null;
//     }
// }
//
// setItemFromLocalStorage('hello', 'world', transformMinToMilliSeconds(2));
// setItemFromLocalStorage('hello2', 'world2', transformMinToMilliSeconds(3));
// getItemfromLocalStorage('hello')
////////////////////////////////////////////////////////
// window.addEventListener('storage', (event) => {
//     console.log(event)
// })
////////////////////////////////////////////////////////
const LS_ITEM_PREFIX = 'FORM';
const createLSIemName=()=> `${LS_ITEM_PREFIX}- ${Math.random()*100}`;
const isLSItemName=name=> name.split('-')[0]===LS_ITEM_PREFIX
const createListItem=(value)=>{
    const container=document.querySelector('#container');
    const listItem=document.createElement('li');
    listItem.textContent=value;
    container.append(listItem);
}
document.forms[0].addEventListener('submit', function(e) {
    e.preventDefault();

    const value= e.target.elements.value.value;
    localStorage.setItem(createLSIemName(), value);
    console.log(value)
    createListItem(value)
    e.target.elements.value.value='';
})
window.addEventListener('DOMContentLoaded', ()=>{
    for(let i=0; i<localStorage.length; i++){
        const key=localStorage.key(i);
        if(isLSItemName(key)) createListItem(localStorage.getItem(key));

    }
})
window.addEventListener('storage', (e   ) => {
    if(e.newValue&&isLSItemName(e.key)) createListItem(e.newValue)
})
//////////////////////////////////

