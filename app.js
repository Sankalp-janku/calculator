let btns = document.querySelectorAll("button");
let input  =document.querySelector("input");
let exp = "";
for(let btn of btns){
    btn.addEventListener("click",()=>{
        console.log(btn.innerText);

//equals
if(btn.innerText === "="){
    input.value=eval(exp);
}
//clear
else if(btn.innerText  === "Clr"){
    exp="";
    input.value="";
}
//delete
else if(btn.innerText === "del"){
    exp  = exp.slice(0,-1);
    input.value =exp;
}
//normal btn
else{
    exp+=btn.innerText;
    input.value=exp;
}
    })
}




