class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`Hello, my name is ${this.name}`);
    } 
}
let animal1 = new Animal('cat');
animal1.speak();

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Helllo, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
person1 = new Person('Kate', 32);
person1.greet();

class Car{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start(){
        console.log(`The ${this.make} ${this.model} is starting`);
    }
}
car1 = new Car('Nissan', 'Altima');
car1.start();

class Rectangular{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
}
rectangular1 = new Rectangular(6, 3);
console.log(rectangular1.getArea());

class Square extends Rectangular{
    constructor(sidelength){
        super(sidelength, sidelength);
        this.sidelength = sidelength;
    }
    getArea(){
        return this.sidelength * this.sidelength;
    }
}
square1 = new Square(5);
console.log(square1.getArea());

class BankAccount{
    constructor(accountNum, accountHolderName, balance){
        this.accountNum = accountNum;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount){
        if(amount > 0){
            this.balance += amount;
            console.log(`current balance is ${this.balance}`);
    }
}
}
bankAccount1 = new BankAccount('193', 'Mike', 400);
bankAccount1.deposit(300);

class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    sendEmail(message){
        console.log(`send this message: "${message}" to ${this.email}`);  
    }
}
person1 = new Person('Sam', 'Sam@gmail.com');
person1.sendEmail('appointment date');

class Product{
    constructor(name, price, description){
        this.name = name;
        this.price = price;
        this.description = description;
    }
    discount(percentage){
        return percentage / 100 * this.price;
    }
}
product1 = new Product('iphone', 800, 'new release');
console.log(product1.discount(10));