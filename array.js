
const marks=[86,93,75,68,79,74];
const heroes=['hulk','thor','batman','ironman','doremon'];

console.log(marks);
console.log(marks.length);

console.log(heroes);
console.log(heroes.length);
// for loop on arry
let ln=heroes.length;

for(i=0;  i<ln;  i++){
    console.log(heroes[i]);
}; 

// for of loop (generaly we use this loop on array)

for(el of marks){console.log(el)};

// Practice Qs.1
console.log('Practice Q1')

let student_marks=[85,97,44,48,79];

let sum=0;

for(val of student_marks){(sum=sum+val);
}
let avg=sum/student_marks.length
console.log('Averge Marks of Class:',avg)

//practice Q2
console.log('Practice Q2')
const prices=[250,465,845,530,870];
const new_price=[];
let per=10;
for(i of prices){
    i -= i*per/100;
    new_price[new_price.length]=i;   
};
console.log('prices',prices);
console.log('10% off Offer Prices',new_price);

/*
let indx=0
for(let val of prices){
    let offer = val*per/100;
    prices[indx]=prices[indx]-offer;
    console.log('10% off Offer Prices:',prices[indx]);
    indx++;
};
console.log(prices);
*/

for(let i=0;i<prices.length;i++){
   let offer= prices[i]*per/100;
   prices[i] -= offer;
}
console.log('10% off Offer Prices:',prices);
// Array methods
const food_items=['apple','banana','mango'];
console.log(food_items);
food_items.push('chips','patatos');
console.log(food_items);
isDeleted=food_items.pop();
console.log(food_items,isDeleted);
console.log(food_items.toString());
let conlist=prices.concat(food_items,marks);
console.log(conlist);
//shift() delete from start
//unshift() add at start
//slice(startinsex,endindex) no changes in orignal array
//splice(startindex,deletecount,new elements) changes in orignal array

let arr=[1,2,3,4,5,6,7]
console.log(arr)
arr.splice(2,2,104,303) //delet and add
arr.splice(5,0,203,202) //add only
arr.splice(7,1,205) //replace only
//arr.splice(5) delete all item from index 5 to end
//arr.splice() no changes

console.log('After splice',arr)

//pranctice Q3

console.log('Practice Q3')

const companies=['descon','febcone','honda','suzuki','yamaha','kawasaki','ebikes'];
console.log(companies);
companies.shift();// remove descon
console.log(companies)
companies.splice(1,1,'samsung');// remove honda and added samsung
console.log(companies)
companies.push('amazon');// add at end amazon
console.log(companies)


