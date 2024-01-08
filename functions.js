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
nums.forEach(calsqr);