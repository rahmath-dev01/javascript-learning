// Object Oriented Programming (OOP) Concepts

// Class (Blueprint of Object)
// Object (Instance of Class)
// Constructor (Object Initialization)
// this Keyword (Refers to Current Object)
// Prototype (Method Sharing Mechanism)

// class student {
//   constructor(name,age){
//     this.name = name
//     this.age = age
//   }
// }
// student.prototype.intro = function() {
//   console.log('Hello my name is ' + this.name)
// }

// let stud1= new student("Armaan" , 25)
// let stud2 = new student("Rahmath", 22)

// stud1.intro();
// stud2.intro();

//SECTION 1
class laptop {
  constructor(price,brand){
    this.price = price,
    this.brand = brand
  }
 
  incprice(){
    this.price *= 1.10;
    console.log(this.brand + "-" + this.price)
  }
}
let Dell = new laptop(80000,"DELL")
let Hp = new laptop(75000,"HP")
let Lanavo = new laptop(90000,"Lanavo")
let Macbook = new laptop(120000,"Macbook")
let xyz= new laptop (50000,"xyz")
let abc = new laptop (60000,"abc")
let cbx = new laptop (70000,"cbx")

Dell.incprice();
Hp.incprice();
Lanavo.incprice();
Macbook.incprice();
xyz.incprice();
abc.incprice();
cbx.incprice();


console.log("----SECTION 2, Classes and Objects (Reinforcement)-----")


//SECTION 2
class Employee {
  constructor(name,salary){
    this.name = name;
    this.salary = salary
  }
  ShowDetails (){
    console.log(this.name + "-" + this.salary)
  }
}

let emp1 = new Employee("Rahmath",55000)
let emp2 = new Employee("Liyakath",65000)
let emp3 = new Employee("shoukath",75000)

emp1.salary += 5000;

emp1.ShowDetails();
emp2.ShowDetails();
emp3.ShowDetails();

console.log("----SECTION 3 , Constructor and Initialization----")
 class Bankaccount {
  constructor (name,balance){
    this.accountHolderName = name;
    this.balance = balance
  }
  // DepositAmount(){
  //   this.balance = this.balance + (this.balance*0.10)
  //   console.log(this.balance)
  // }
  deposit(amount) {
  this.balance += amount;
 return this.balance
}

 }
 
 let account1 = new Bankaccount ("Mohiuddin", 2000)
 let account2 = new Bankaccount ("AmerThander", 20000)
 
 let NewBalance = account1.deposit(2000) ;

 account1.deposit(1000);
 console.log(account1.balance);


 console.log("Section 4 =>Understanding this ")
 //Diff behaveir if it used in function it shows window and if used in obj shows about

 console.log("SECTION 5 Constructor Function and Prototype ")
 // If prototype is inside the constructor => every about get its own copy , waste of memory
 // If prototype is outside the constructor => only one copy of method and shared by all the objects

 console.log("SECTION 6 => call Method Practice ");

 function ShowBrand (){
  console.log(this.brand)
 };

 let obj = {
  brand : "nike"
 }
 let obj1 = {
  brand : "addidas"
 }
 
 ShowBrand(obj)
 ShowBrand.call(obj1)

 // if we call a function normaly it shows window or undefined
 //usimg "call" can solve that prblm 
 //call() is used to control the value of this and reuse a function for different objects.


  console.log("SECTION 7 => apply Method Practice ");
 function  introduce(city,role){
  console.log(this.name)
  console.log(city)
  console.log(role)
 }

 let obj2 ={
  name : "Rahmath"
 }
 let obj3 ={
  name : "Armaan"
 }

 introduce.apply(obj2, ["hyd","developer"]);


 console.log("SECTION 8 => bind Method Practice");

 function Greet(){
  console.log("Hello " + this.name)
 }

 let object = {
  name : "Rahmath"
 }
 let greeting = Greet.bind(object)

 greeting();





 
 
