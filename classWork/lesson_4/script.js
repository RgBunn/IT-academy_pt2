'use strict';
// const obj= {
//     name: "John",
//     sayHello(phrase) {
//         console.log(`${phrase} ${this.name}!`);
//         // return `Hello, my name is  ${this.name}`;
//     },
//     getThis(){
//         return this;
//     }
// }
// console.log(obj.sayHello());
// console.log(obj.getThis());
// console.log(this)
// obj.secondName='Smith';
// console.log(obj)
//
//
// console.log(obj.sayHello())
// setTimeout(obj.sayHello,2000);
// const obj2={
//     name:"Stan"
// }
// obj2.sayHello=obj.sayHello.bind(obj2);
// obj2.sayHello();
// setTimeout(()=>{obj.sayHello();},2000);

// const CBWithContext=obj.sayHello.apply(obj,['Hello, my name is']);
// bind
// apply
// call

// setTimeout(CBWithContext,1000);
// obj.sayHello.call({
//     name:'Smith'
// },'Hello, my name is')


// function User(name, age) {
//     this.name = name;
//     this.age = age;
//
// }
//
// console.log(new User('Stan', 20))

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.sayHello=()=>{
//         console.log(`My name is ${this.name}`) ;
//     }
// }
//
// const person1=new Person("John",25);
// person1.sayHello();

// const obj={
//     name: "John",
//     secondName:'Smith',
//     get fullName(){
//         return `${this.name} ${this.secondName}`;
//     },
//     set fullName(fullName){
//         const[name,secondName]=fullName.split( ' ');
//
//         if(!name|| !secondName) throw new Error("Missing full name");
//
//         this.name=name;
//         this.secondName=secondName;
//     }
// }
// obj.fullName='test 223334'
//
// // obj.secondName="Smith";
// // console.log(Math)
// console.log(obj.fullName)

// const obj={
//     name:'John',
//     age:25,
// }

// Object.defineProperty(obj,'secondName',{
//     value:'Smith', writable:false,enumerable:true,configurable:false
// })

// Object.defineProperties(obj,{
// secondName: {
//     value :"Doe",
//         writable: false,
//         enumerable: true,
//         configurable: false,
// },
//     middleName:{
//     value: 'Eric',
//         writable: false,
//         enumerable: true,
//         configurable: false,
//     }
// })
// console.log(obj)

const obj={
    name:'John',
    secondName: 'Smith',
    get fullName(){
        return `${this.name} ${this.secondName}`;
    },
    set fullName(fullName) {
        const [name,secondName]=fullName.split(' ');

        if(!name ||!secondName) throw new Error('name is required');

        this.name=name;
        this.secondName=secondName;

    }
}
obj.fullName='test  12341'
console.log(obj.fullName)