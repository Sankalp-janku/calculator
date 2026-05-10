let input = document.querySelector("input");
let btns = document.querySelectorAll("button");
let exp="";
for(let btn of btns){
    btn.addEventListener("click",()=>{
        console.log("btn cLIcked");
        console.log(btn.innerText);
         
        //evaluate
        if(btn.innerText ==="="){
            input.value=eval(exp);
        }
        else if(btn.innerText === "del"){
            
        }

    })
}