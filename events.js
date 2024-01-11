

mybtn=document.querySelector('#mybtn');

// evt is an event object, it has access to the event properties and methods.
mybtn.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
    console.log("button cliked thrugh js");
    let a=25;
    a++;
    console.log(a);
};

mydiv=document.querySelector('.box');
mydiv.onmouseover=(ev)=>{
    console.log(ev.type);
    console.log(ev.target);
    console.log(ev.clientX);
    console.log(ev.clientY);
    console.log('Your inside a div from js ');
}

// Envet Listners
element=document.querySelector('#btn');

// element.addEventListener("click", myFunction);

// function myFunction() {
//     console.log('I am Event Listner')
//   document.getElementById("demo").innerHTML = "Hello World,'I am Event Listner'";
// }

console.log(btn)
element.addEventListener('click',()=>{
    console.log('I am Event Listner 1');
});
element.addEventListener('click',()=>{
    console.log('I am Event Listner 2');
});

let handler3=()=>{
    console.log('I am Event Listner 3')
element.addEventListener('click',handler3)}

element.addEventListener('click',()=>{
    console.log('I am Event Listner 4');
});

element.removeEventListener('click',handler3);

btnToggle=document.querySelector('#toggle');
let mode='light';
body=document.querySelector('body')

btnToggle.onclick=()=>{

    if (mode==='light'){
        mode='dark';
        body.classList.add('dark')
        body.classList.remove('light')
    } else{
        mode='light';
        body.classList.add('light')
        body.classList.remove('dark')
    }

    console.log(mode)
}

