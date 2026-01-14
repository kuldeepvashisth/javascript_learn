/*
keypress event{
     hum jo bhi key press krenge vo pta chl jayengi by jo browser evnt ka bject return krega 
     usme key function mai  key ka naam hogan console mai
}

const body=document.body;
body.addEventListener("keypress",(e)=>{
 console.log(e.key);
})

//MOUSEOVER : jis  cheez/region pr lgaya hai ,jb us pr le kr jayenge mouse ko tb event ocur hoga 
//MOUSELEAVE : jb us  region se bhar honge wha event ocur hoga
*/
 
/*
EVENT BUBBLING/propogation :- jb kisi child elment pr event occur hota hai to 
     vo parent pr bhi hota hai and gradparent 
     iff:event name,type is same;    FLOW --> BOTTOM TO UP

 EVENT CAPTURING: flow of comntrol from top to down 
 and a third parameter also require in addeventlistner ->TRUE/FALSE
 FLOW --> top to down {top starts from ,jise true diya hai}
*/
const grandparent=document.querySelector(".grand");


const parent=document.querySelector(".parent");

const child=document.querySelector(".child");



parent.addEventListener("click",()=>{
     console.log("clicked parent");
},true)

child.addEventListener("click",()=>{
     console.log("clicked child");
})




grandparent.addEventListener("click",()=>{
     console.log("clicked grandparent");
})

// child.addEventListener("click",()=>{
//      console.log("clicked child by bubling");
// })


// parent.addEventListener("click",()=>{
//      console.log("clicked parent");
// })


// grandparent.addEventListener("click",()=>{
//      console.log("clicked grandparent");
// })