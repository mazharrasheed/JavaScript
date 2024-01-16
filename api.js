const URL= "https://cat-fact.herokuapp.com/facts"

const factpara=document.querySelector("#fact")
factpara.innerHTML="fgfgret6546566"

const btn=document.querySelector("#btn")



const getfacts= async()=>{
    let response=await fetch(URL);
    console.log(response); // Json formate
    let data=await response.json(); // java script formate
    console.log(data[0].text);
    factpara.innerHTML=data[0].text;
}

btn.addEventListener('click',getfacts);
// btn.onclick=getfacts
