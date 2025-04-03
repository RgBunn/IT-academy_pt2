// document.querySelector('h1').onclick = () => {
//     console.log('clicked');
// }
///////////////////////////////////////////////

// document.querySelector('h1').addEventListener('click',()=>{
//     console.log('clicked');
// });
// //mousedown,mouseup,mouseover,mouseout, mousemove
// document.querySelector('#test-div').addEventListener('mousemove',()=>{
//     console.log('moved');
// });
///////////////////////////////////////////////
//keydown, keyup

// function cb(e){
//     console.log('CB clicked');
//     e.preventDefault();
//     console.log(this)
// }
// document.querySelector('a').addEventListener('click',cb);
// document.querySelector('a').removeEventListener('click',cb,{
//
// });



///////////////////////////////////////////////
// function cb(e){
//     console.log(e.currentTarget.id)
// }
//
//
// document.querySelector('#test-div1-l').addEventListener('click', cb)
// // document.querySelector('#test-div1-l').addEventListener('click', cb,true)
// document.querySelector('#test-div2-m').addEventListener('click', cb)
// // document.querySelector('#test-div2-m').addEventListener('click', cb,true)
// document.querySelector('#test-div3-s').addEventListener('click', cb)
// // document.querySelector('#test-div3-s').addEventListener('click', cb,true)

// function cb(e){
//     console.log(e);
//     // e.stopPropagation()
//     e.stopImmediatePropagation()
// }
// document.querySelector('#test-div1').addEventListener('click', cb)
// document.querySelector('#test-div3').addEventListener('click', cb)
/////////////////////////////////////////////////
// function cb(e){
//     console.log(e);
// }
// document.querySelector('button').addEventListener('click', cb);
/////////////////////////////////////////////////
// const ulEl=document.getElementById('test-ul');
// ulEl.addEventListener('click', cb);
//
// function cb(e){
//     if(e.target.closest('button')){
//         e.target.closest('li').remove()
//     console.log(e.target.innerText);
//
//     }
// }
/////////////////////////////////////////////////
function cb(e){
   e.preventDefault();
   const value=e.target.querySelector('input[name="task"]').value;
   if(!value) console.log('Please provide input') ;
   console.log(value);
    const taskEl=document.querySelector(`li[data-task="${value}"]`);
    if(taskEl)taskEl.remove();
    e.target.querySelector('input[name="task"]').value='';
}
document.querySelector('form').addEventListener('submit', cb);






