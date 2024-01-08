// loops and strings

//For Loop

for(let i=1;i<=10; i++){console.log('AyeshaMazhar')};

console.log('for loop ended');

// calculate sum of 1 to 5 numbers

let sum=0 ;

for(let i=0;i<=5;i++) {
    sum=sum+i;
}
console.log('sum of 1 to 5 numbers',sum)

// fectorial of 5

let fectorial=1;
for (let i=1;i<=5;i++){
    fectorial=fectorial*i;
}
console.log(fectorial);
// For Loop
console.log('For Loop');

// print 1 to 5

for(let i=1;i<=5;i++){
    console.log(i);
}
console.log('While Loop');
// while loop
let i=1;
while(i<=5){console.log(i);i++};

// do while loop

let j=20;
do{
    console.log('Ayesha');j++;
}while(j<=10);

//for of loop

let str='my_code';
let size=0;
for (let i of str){console.log('i',i);size++};// iterater

console.log(size);

//for in loop

let student={name:'Hadia',age:11,class:'five'};
for(let key in student){console.log('key',key ,'val',student[key]);};

//practice quiestion print 1 to 100 even nums

for (let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }}

// Practice quiestion 2 

let gameNum=25;

/*let userNum=prompt('guess the game number:');

while(userNum != gameNum){
    userNum=prompt('You enter the wrong game number enter agian:');};
console.log('congratulations you entered the correct num:');
*/

// strings

str="this is my string";

str.length;
console.log(str[0]);

// Template Literals

let specialString=`this is a special string`;

let obj={item:'pen',price:10
};

let output=`the coast of ${obj.item} is, ${obj.price} rupes`//like 'f' string in python 
console.log(output);

// String Methods

let mystr="I Love Codding ";
let nmystr=mystr.toLowerCase();
console.log(mystr);
console.log(nmystr);
let newmystr=mystr.toUpperCase();
console.log(newmystr);

// using trim method
let mystg="    I am learning JavaScript learning JavaScript is fun   "
console.log(mystg);
console.log(mystg.trim());
// string slicing
console.log(mystg.slice(4,10));

//string concatinate
console.log(mystg.concat(mystr));
console.log(mystr+mystg.trim());

//string replacing(search valu  ,  new value)
console.log(mystg.replace('JavaScript','Python'));
console.log(mystg.replaceAll('JavaScript','Python'));

//string charAt(index)
console.log(mystg.charAt(10));

// Practice Qs.1 

let username=prompt("Enter user name with out spaces")
let myusername=`@${username}${username.length}`
let myusername1='@'+username+username.length

console.log('UserName:'+ myusername)
console.log('UserName:'+ myusername1)
console.log('UserName:'+'@'+username+username.length)
