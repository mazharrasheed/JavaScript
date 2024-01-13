
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