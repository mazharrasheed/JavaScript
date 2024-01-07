// Chapter 2
// Operatores and Conditional Statments

//this code prints hellow world

console.log('Chapter 2 Operatores and Conditional Statments')
console.log('Hello World')

// Arithmati Operators

let a=15
let b=12

console.log("a=",a)
console.log("b=",b)
console.log("a+b=",a+b)
console.log("a-b=",a-b)
console.log("a*b=",a*b)
console.log("a/b=",a/b)
console.log("a%b=",a%b)
console.log("a^b=",a**b)

// unary operator

console.log("a++=",a++)//15  //post increment , first print and then increment
console.log("b--=",b--)//12  //b--; post decrement , first print and then decrement
console.log("a=",a) //16
console.log("b=",b) //11

console.log("++a=",++a) //17 // pre increment: first increment and then print
console.log("--1=",--b) //10 // pre decrement first decrement and then print

// Asignment Operators

a +=4; // a=17+4
console.log(a) //21

a %=4; // a=21/4 remender 1
console.log(a) //21

a *=6; // a=1*6 = 6
console.log(a) //6

a **=2; // a=6^2 = 36
console.log(a) //36

// comparision operators

let c=5
let d=9

console.log("c",c)
console.log("d",d)
console.log("c==d",c==d)
console.log("c!=d",c!=d)
console.log("c<d",c<d)
console.log("c>d",c>d)
console.log("c>=d",c>=d)
console.log("c>=d",c>=d)

let f="55"
let g=55
console.log("f",f ,'str')
console.log("g",g,'num')
console.log("f===g",f===g,'can check type also') //can check type also
console.log("f!==g",f!==g,'can check type also') // can check type also

// logical Operator && || !

// logical Operator &&

let conditon1=c<d
let conditon2=c>d

console.log('conditon1  c<d',c<d)
console.log('conditon2  c>d',c>d)
console.log('conditon1 && conditon2',conditon1&&conditon2)

// logical Operator || 
console.log('conditon1  c<d',c<d)
console.log('conditon2  c>d',c>d)
console.log('conditon1 && conditon2',conditon1||conditon2)

// logical Operator !

console.log('(c<d)',(c<d))
console.log('!(c<d)',!(c<d)) 

// Conditional Statments

let personAge=68

{console.log('Person age', personAge)};
if(personAge>18){console.log(' Person can vote')};
if(personAge>18){console.log(' Person can vote')}else {console.log(' Person cannot vote')};

let mode="dark";
let color;

if(mode==='dark'){
    color='black' , console.log('in dark mode color is',color)
} else 
    {
        color='white', console.log('in light mode color is',color)
    } ;
let num=10;

if(num % 2 === 0){console.log(num, 'is even')}else{console.log(num, 'is odd')};

//Syntex--> Rules
{console.log('Person age', personAge)};
if (personAge <18){console.log("junior")} else if(personAge>60){console.log('senior')} else{console.log('middle')};

if (mode==='dark')console.log(mode);// can work but no recomended

// Ternary Operators
{console.log('Person age', personAge)};

let result=personAge>18 ? 'Adult':'not Adult' //simpler, compact if-else
console.log(result)
personAge>18 ? console.log('Adult'):console.log('not Adult') //simpler, compact if-else

let userName=prompt("hello!Enter your name")
console.log(userName)

// Question check a number entred by user is a multiple of 5


let user_num=prompt("Please enter a number");

if(user_num % 5 === 0){console.log(user_num, 'is multiple of', 5)}
else{console.log(user_num, 'is not multipal of', 5)};
