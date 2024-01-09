
// let heading=document.getElementById("heading-class");

// console.dir(heading);
// let headings=document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(headings);

// let button=document.getElementsByClassName("mybutton");

// let paras=document.getElementsByTagName("p");
// console.dir(paras);

// let elm=document.querySelector('p');
// let elms=document.querySelectorAll('p');
// let class_elms=document.querySelectorAll('.myclass');
// let id_elms=document.querySelector('#mybutton');
// console.dir(class_elms);
// console.dir(id_elms);

// let child=document.querySelector("div").children;


// let div1=document.querySelector("div");

// console.dir(div1);

let hd2=document.querySelector("h2");
hd2.innerText=hd2.innerText+ " from me and company";


let dives=document.querySelectorAll('.box');

idx=1
for (let div of dives){
    div.innerText=`New uniqe text ${idx}`;
    idx++;
}
document.body.childNodes[13].innerHTML=document.body.childNodes[13].innerHTML+'<p>New para from javascrit</p>'


// practice quistion create a button with background color red and text color white 'click me'

let new_btn=document.createElement('button');
new_btn.innerText="click me";
new_btn.style.backgroundColor='red';
new_btn.style.color='white';
document.querySelector("body").prepend(new_btn);

let para=document.querySelector('p')
para.classList.add('newclass')

