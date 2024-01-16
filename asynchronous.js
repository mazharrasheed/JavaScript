// console.log("code1")
// console.log("code2")
// console.log("code3")

// setTimeout(() => {

//     console.log("i m deleyed function")

// }, 1000);

// console.log("code4")
// console.log("code5")

// call backs hell

function getData(dataid,getNextdata){
    setTimeout(()=>{
        console.log('data',dataid)
        if (getNextdata){
            getNextdata();
        }
    },3000)
}

// getData(1,()=>{
//     console.log ('getting data 2...')
//     getData(2,()=>{
//         console.log ('getting data 3...')
//         getData(3,()=>{
//             console.log ('getting data 4...')
//             getData(4)
//         })
//     });
// })

// Promisise
/*
function asycnfunc(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('some data');
            resolve('success');
        },4000);
    })
}
console.log('feching data 1 from asyncfunc')
let p1=asycnfunc();
p1.then((res)=>{
console.log(res) // res = resolve(Success) passed in asyncfunc above
let p2=asycnfunc()
    p2.then((res)=>{
    console.log(res)
})
})
*/

// async await

function Api(){
    return new Promise((resolve, reject) => {   
    setTimeout(()=>{
        console.log ("weather data");
        resolve("Success")
},2000)
    })
}
async function getwWeatherData(){
    await Api()
}

function getData(dataid){
    return new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('data',dataid);
        resolve('success');
    },3000);
})
}

async function getallData(){
    console.log('geting data 1 .....')
    await getData(1);
    console.log('geting data 2 .....')
    await getData(2);
    console.log('geting data 3 .....')
    await getData(3);

}

//IIFE

/*
(async function(){
    console.log('geting data 4 .....')
    await getData(4);
    console.log('geting data 5 .....')
    await getData(5);
    console.log('geting data 6 .....')
    await getData(6);
})();

*/