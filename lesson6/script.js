// const user={
//     name: "John",
// };
// Object.setPrototypeOf(user,null)
// console.log(Object.getPrototypeOf(user));


// function UserFn(name,email,password){
//     this.name=name;
//     this.email=email;
//     this.password=password;
//
//     UserFn.prototype.sayHello=function(){
//         return "Hello" + this.name;
//     }
// }

class Human{
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        if(name.length<4){
            console.error("Name can't be short");
            return;
        }
        this._name = name;
    }
    sayHello(){
        return this.name
    }
}
class UserClass extends Human {
    constructor(name,age,email,password){
        super(name,age)

        this.email=email;
        this.password=password;
    }
    sayHello(){
        return "Hello" + this.name;
    }
}
// const userFn=new UserFn('UserFn', 'email','password');
const userClass = new UserClass('Us', 22, 'password','nsjfg');
// console.log(userClass);
// console.log(userFn);


// console.log(userFn.sayHello());
// console.log(userClass.sayHello())
//
// const john=new Human('Jo',22);
// console.log(john)
// console.log(userClass)
//////////////////////////////////////////////////////////////////
const generateId=()=>(Date.now()-Math.random() *1000).toString(36).substring(2,8);

class Book{
    constructor(title,author){
        this.title=title;
        this.author=author;
        this.ID=generateId();
        this.isAvailable=true;
    }
    borrow(){
        if(this.isAvailable){
            console.log(`${this.title} has been borrowed`);
            return this.isAvailable=false;
        }
    }
    returnBook(){
        if(!this.isAvailable){
            console.log(`${this.title} is available`)
            return this.isAvailable=true;
        }
    }
    static isBook(book){
        return book instanceof Book;
    }
}
const book1=new Book('Some book1', 'Some author1');
const book2=new Book('Some book2', 'Some author1');
const book3=new Book('Some book3', 'Some author3');
const book4=new Book('Some book4', 'Some author4');


book1.borrow();
book1.returnBook();
console.log(book1);

function isLibrary(){
    return this instanceof Library;
}

class Library{

       #books=[];


addBook(book){
        if(!Book.isBook(book)){
            console.log(`${book.toString()} is not a book`);
            return;
        }

        this.#books.push(book);
    console.log(`Book "${book.title}" added to the library.`);
}
removeBook(id){
        const bookId=this.#books.findIndex(book=>book.id === book.id);
        if(bookId===-1){
            console.log(`Book with id ${bookId} not found`);
            return;
        }
    this.#books[bookId].returnBook();
    this.#books.splice(bookId, 1);
    console.log(`Book with ID ${id} removed from the library.`);
}
    findBookByTitle(title){
        const book = this.#books.find(book => book.title === title);
        if(!book){
            console.log(`Book with title ${title} not found`);
            return null;
        }
        return book;
    }
    findBooksByAuthor(author){
        return this.#books.filter(book=>book.author === author);
    }
    listAvailableBooks(){
        return this.#books;
    }
}



const myLibrary= new Library;
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
// myLibrary.removeBook(book3.ID);
console.log(myLibrary);

console.log(myLibrary.listAvailableBooks());
console.log(myLibrary.findBooksByAuthor('Some author1'));

Library.prototype.isLibrary=isLibrary;
console.log(myLibrary.isLibrary());