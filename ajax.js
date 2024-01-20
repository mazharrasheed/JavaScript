console.log("helooo World")

let fetchbtn=document.getElementById("fechbtn");
let backupbtn=document.getElementById("bckbtn");
let pre=document.getElementById("mypre");

fetchbtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){

    console.log("fechbtn clicked and buttonClickHandler called" );
    
    // initiate a xhr object
    xhr=new XMLHttpRequest();

    // open xhr
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',false);

    xhr.onreadystatechange=function(){
        console.log('ready state is ',xhr.readyState)
    }

    // what to do on prodress (optional)
    xhr.onprogress=function(){

        if (this.status===200){
            console.log('on progrees please wait');
        }

        else{
            console.error('some error')
        }
        
    }
    // what to do when response ready
    xhr.onload=function(){
        obj=this.responseText;
        jsobj=JSON.parse(obj)

        // pre.innerHTML=jsobj.userId;
        // pre.innerHTML=jsobj.id;
        // pre.innerHTML=jsobj.title;
        // pre.innerHTML=jsobj.completed;

        console.log(jsobj);
        console.log(this.responseText);
        console.log(typeof this.responseText);
    }

    // send the request

    xhr.send();

    console.log('we are done')

}
