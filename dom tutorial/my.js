let h1=document.querySelector(".heading"); // give object
/*let h1=document.querySelector("div.headline h2");
means vo div Select kro jisme clas hai "headlne" us class ka h2 select kro
*/
console.log(h1);
h1.innerText="Website"
console.log(h1);
// h1.style.backgroundColor="beige"; //"-" ki jgha camel case use
h1.style.color="red";

/*attribute=> 1.gives extra information of elemnt like{src,href,alt,tittle}
            2.written under opening tag
*/
//getattribute= give value of attribute
//querySelectorAll=give array like object 

// const link=document.querySelectorAll("a") //--> select first anchor tag
// console.log(link[1].getAttribute("href"))
// console.log(typeof(link));
//setattribute = change value of attribute
// link[0].setAttribute("href","dikki")
// console.log(link[0].getAttribute('href'))


// link[0].setAttribute("href","https://www.onlinegdb.com/online_c++_compiler")
// console.log(link[0].getAttribute('href'))
// console.log(link[2].getAttribute('href')) // -> give #home
//  //to get only home use silice(1) means start from idx1   
// console.log(link[2].getAttribute('href').slice(1)) // -> give #home
                                        

/* we can use for of ,simple for loop on array like object but can't use for each*/
//  const nav=document.getElementsByTagName("a"); //html collection or array like object(here)

 // const nav=document.querySelectorAll(".navitems"); //nodelist 

//nodelist mai 3no loop use kr ske hai d u ewhdor c kn o nxkc cl g; sddoc sd;/Nxmwef ,sm x,am,sm

// for(let i=0;i<nav.length;i++){
//     const item=nav[i];
//     console.log(item);
    
//     item.style.backgroundColor="yellow";
//       item.style.color="black";
// }

/*
for(let navi of nav){
    navi.style.backgroundColor="black";
    navi.style.fontWeight="bold";
    navi.style.color="white";
    
}    
to convert HTMLCollection into Array
navi=Array.from(navItems);
 now navi is an array and we can apply for each and all array methoods on in it
*/

//INNER HTML--> content inside a html element including all tags and all

const header=document.querySelector(".my");
console.log(header.innerHTML);
//change the inside content

header.innerHTML="kullu vashisth" //phle kuldeep vashisth and button of learn more
header.innerHTML+="<button class=\"learnmore\">learn more</button>"
console.log(header.innerHTML);

//browser store all in adocument object ,where document is a root node and html{root-elemnt} its child and so on

const rootnode = document.getRootNode();
console.log(rootnode);
// const htmlelements=rootnode.childNodes;//node list
//  console.log(htmlelements);

//parent to child
const html=rootnode.childNodes[0]; 
// console.log(html);
console.log(html.childNodes); //NodeList(3) [head, text, body]
const head=html.childNodes[0];
console.log(head);

/* DOM TRAVERSING */

// child to parent
// console.log(head.parentElement); //parent node gives html structure and elemnt give  
 
// console.log(head.nextSibling)//---->text
// console.log(head.nextSibling.nextSibling);// --->text--->body

//nextSibling. -----> ye text ko bhi as a sibling count krta hai 
//nextElementSibling  ------>but if e wnat dirct next element excluding text

// console.log(head.nextElementSibling);
 

// const heading=document.getElementsByClassName("h2");
// heading[0].parentNode.style.color="yellow";

/*
1. new class hmesha kisi na kisi ke andr likhi jayegi
2.to give class via js use {.add('new class name')} 
3.classlist ---> give no of classes
4.to check exist or not use contains ----> TRUE
*/

const navi=document.querySelector(".navitems");
navi.classList.add("newclass");
console.log(navi.classList);

navi.classList.remove("newclass");
console.log(navi.classList);

//.toggle ----> if class exists then remove it and if don't then remove it

/*
when should innerHTML use or
we should avoid innerhtml to add elements becoz jitne items hum add krneg browser purane code ko bhi utni bar hi render krega
we should use it when ---> we ned to chnge the whole inner html or content ,avoid to add 
*/ 

// instead of it we use .createElement
// const newitem=document.createElement("li")
