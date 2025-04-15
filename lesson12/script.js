// console.log("Hello World!");
//
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     body: JSON.stringify({
//         hello: 'world',
//     })
// })
// .then(res => {
//     console.log(res.headers.get('content-type'));
//     if(res.ok) return res.json();
// })
// .then(json => console.log(json))

///////////////////////////////////
// const controller =new AbortController();
// // console.log(controller);
// controller.signal.addEventListener('abort', ()=>{
//     console.log('Canceled');
// });
// controller.abort();
////////////////////////////////////////
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method: 'POST',
//     signal:controller.signal,
//     headers:{
//         'Content-Type': 'application/json',
//     }
//     // body: JSON.stringify({
//     //     hello: 'world',
//     // })
// })
// .then(res => {
//     console.log(res.headers.get('content-type'));
//     if(res.ok) return res.json();
// })
// .then(json => console.log(json))
//
// controller.abort();
////////////////////////////////////////
// const url='https://www.google.com/search/search?q=kjdhgksl';
//     fetch(url)
//         .then(res => res.json())
//         .then(data => console.log(data))

