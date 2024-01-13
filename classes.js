

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

faisal.__proto__=employe
nadeem.__proto__=employe
naeem.__proto__=employe
