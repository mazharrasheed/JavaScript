
let boxes=document.querySelectorAll('.btn');
let resetbtn=document.querySelector('#reset-btn');
let newgame=document.querySelector('#new-game');
let msg_cont=document.querySelector('.msg-container');
let msg=document.querySelector('#msg')

let turnO=true

const winpattrens=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const reset=()=>{
    boxes.forEach((box)=>{
    turnO=true
    box.innerHTML="";
    box.disabled=false
    msg_cont.classList.add('hide')
        })
}

resetbtn.addEventListener('click',reset)
newgame.addEventListener('click',reset)

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        // console.log('box cliked');
        if (turnO){
            box.innerHTML="O";
            turnO=false;
        } else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;

        checkwinner();
    })
})
const disablebboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{

    msg.innerText=`Congratulations, Winner is ${winner}`;
    msg_cont.classList.remove('hide')
    disablebboxes()
}

const checkwinner=()=> {
    for(let pattren of winpattrens){
        // console.log(pattren[0],pattren[1],pattren[2])
        // console.log(
        //     boxes[pattren[0]].innerText,
        //     boxes[pattren[1]].innerText,
        //     boxes[pattren[2]].innerText
        //     );
        let pos1val=boxes[pattren[0]].innerText;
        let pos2val=boxes[pattren[1]].innerText;
        let pos3val=boxes[pattren[2]].innerText;

        // console.log(pos1val,pos2val,pos3val)
        // console.log(pos1val===pos2val,pos2val===pos3val)

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if (pos1val===pos2val && pos2val===pos3val){
            // console.log('winner',pos1val);
            showwinner(pos1val);
            }
            
            }

    }
    
}