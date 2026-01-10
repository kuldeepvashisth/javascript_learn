/*const btn=document.querySelector(".learnmore");
console.log(btn);
methood 1--> we avoid it bcoz ek button pr multiple click events ni lga skte
btn.onclick=function(){
    console.log("you clicked");
}

so we used addEventListener(type--> kya event hai ,event mai kya krana hai)
function clickme(){
    console.log("u clicked me");
}
 btn.addEventListener("click",clickme)
        (oR)
btn.addEventListener("click",()=>{
 console.log("u clicked me via arrow");   
})
*/

//this keyword
/* 1.for normal function this vo hoga jo use call kr rha hai 
2.for arow function jo nearest this hoga mostly window jb bhar kuch or ni hia

btn.addEventListener("click",function(){
 console.log("u clicked me via arrow");   
console.log(this);
this.style.color="red";
})
*/

//to select multiple buttons
const allbut=document.querySelectorAll(".mybuton button")
console.log(allbut); //node list

/* 
if we give only class name then DOM search for which
Select all elements whose class is mybuton”

So the browser:

scans the DOM

finds only the div

returns a NodeList containing that div

//
for(let button of allbut){
    button.addEventListener("click",function(){
        console.log(this);
    })  
}

for(let i=0;i<allbut.length;i++){
    allbut[i].addEventListener("click",function(){
        console.log(this);
    })  
}

allbut.forEach(function(button)){
    button.addEventListener("click",function(){
        console.log(this);
    })
}
*/