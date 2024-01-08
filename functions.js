function myfunction(a,b){
    sum=a+b;
    return sum;
}
val=myfunction(5,4);
console.log(val);

// Arrow functions like lembdas in python

const arrfun=(a,b)=>{return a*b};
console.log(arrfun(5,8));

function contVovels(str){
    let count=0;
    for(const char of str){
        if ( char==='a'|| char==='e'||char==='i'||char==='o'||char==='u'){
            count++;
        }
    }
    console.log(count);
}
contVovels('ayesha hadia');

// forEach  Function(loop in arry)

const arr=[1,2,3,4,5,6,7,8,9,10];

arr.forEach(function printval(val) {
    console.log(`5x${val}=${val*5}`)
} );
arr.forEach((val) => {
    console.log(`Square of ${val} = ${val*val}`)
});
let nums=[65,78,37];
let calsqr=(num)=>{
    console.log(num*num)
}

//map function
nums.forEach(calsqr);
const n_nums=[87,34,52,22];
let new_arr=n_nums.map((val)=>{
    return(val*val)
})
console.log(new_arr);

// filter
let arr1=[1,2,3,4,5,6,7,8,9]
let evenarr=arr1.filter((val)=>{
    return val%2===0;
});
console.log(evenarr);

// reduce
let arr2=[1,2,3,4]
let output=arr2.reduce((prev,crunt)=>{
    return prev+crunt
});
console.log(output);

let arr3=[5,7,15,4,18]
let outpt=arr3.reduce((prev,crunt)=>{
    return prev>crunt?prev:crunt;
});

console.log(outpt);

let n=prompt("eneter a number here");

let arr4=[];

for(let i=1;i<=n;i++){
    arr4[i-1]=i;
}
let sum1=arr4.reduce((res,cur)=>{
        return res+cur;
})
console.log(sum1)

let nn=prompt("eneter a number here");

let arr5=[];

for(let i=1;i<=n;i++){
    arr4[i-1]=i;
}
let fectorial=arr4.reduce((res,cur)=>{
        return res*cur;
})
console.log(fectorial)