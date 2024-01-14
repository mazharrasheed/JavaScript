
let student={
    fullName:'Ayesha Mazhar',
    class:'five',
    marks:208,
}

const employe={
    caltax(){
        console.log('tax rate is 10%');
    },
}
const faisal={
    sallary:50000,
    caltax(){
        console.log('tax rate is 20%') // periorty should be given to this function
    }
}
const nadeem={
    sallary:40000,
}
const naeem={
    sallary:20000,
}

faisal.__proto__=employe;
nadeem.__proto__=employe;
naeem.__proto__=employe ;

class CarsToyota{

    constructor(brand,model){
        this.brand=brand;                     
        this.model=model;
    }
    start(){
        console.log('car can start');
    }
    stop(){
        console.log('car can stop');
    }

    setBrand(brand){
        this.brand=brand
    }

    setModel(model){
        this.model=model
    }
}

let corola=new CarsToyota('corola','2024'); // constructor invoke automaitcally on creation of an object.
let yaris=new CarsToyota('yaris','2024');
let fortuner=new CarsToyota('fortuner');

const arr={class:"five",}


class Parent{
    heloo(){
        console.log('hello');
    }
}

class Chaild extends Parent {

}

let obj=new Chaild()

class Person{

    constructor(name){
        this.name=name
        this.species='home sapions'
    }
    eat(){
        console.log('eat');
    }
    sleep(){
        console.log('sleep');
    }

    work(){
        
        console.log('do nothing');
    }
}

class Engineer extends Person {

    constructor(branch,name){
        console.log("enter child constructor");
        super(name);
        this.branch=branch;
        console.log("exit child constructor");
    }

    work(){

        super.eat();
        console.log('solve problems');
    }
}

let engrobj=new Engineer('Mechenical Engr','mazhar');

// Practice quistion1

let data="some personl data"

class User{
    constructor(username,email){
    this.username=username;
    this.email=email;
    }

    viewdata(){
        console.log("data =", data)
    
    }
}

class Admin extends User {
    constructor(username,email){
        super(username,email)
   
    }
    editData(){

        data="some new data"
        console.log(data)
    }
}

let student1=new User('mazhar','mazhar@email.com')
let student2=new User('hadia','hadia@email.com')

let admin1=new Admin('admin','admin@email.com')

// error handling

let a=454
let b=434
console.log(a+b)
console.log(a+b)
console.log(a+b)
try{
    console.log(a+c)

}
catch(err){
    console.log (err)
}
console.log(a+b)
console.log(a+b)
console.log(a+b)
