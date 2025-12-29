/*
let arr=["apple",1,2,3,false,null];
console.log(arr,typeof arr) //--> typeof = obj
console.log(Array.isArray(arr));
arr.push("kd"); //add at last
//here pop function delete and return as well as
let my=arr.pop(); console.log(my);

console.log(arr);
arr.unshift("whiskey") //push at begin
console.log(arr);
var beginseremove=arr.shift();// pop from begin;
console.log(arr);

clonning a array => so taht change in 1 not reflect to other array
by slicng
arr1=["apple",1,2,3];
let arr2=arr1.slice(0);
console.log(arr1 === arr2);

M2.by concatinate:-  arr2=[].concat(arr1);
new way:- spread operator
let arr1=["apple","kn","ghj"];
we can ad as many as array
let arr2=[...arr1, ...arr3];
console.log(arr1===arr2);

arr2 mai arr1 to chaiye hi but kuch or element bhi chaiye 
1.clone then add
let arr2=arr1.slice(0).concat(["hello","item3"]);
console.log(arr2);

let arr2=[...arr1].concat(["hello"]);
console.log(arr2);
const arr2=[];
for(let i=0;i<arr1.length;i++){
    arr2.push(arr1[i].toUpperCase());
}
console.log(arr2);

try to create array with const and we can push in const but cant update

For of loop
let arr1=["apple","kn","ghj"];
const arr2=[];
for(it of arr1){
console.log(it);
}

for in loop => same syntac=x as for off but now "it" is index not elemne

for(it in arr1){
console.log(arr1[it]);
}

//ARRAY DESTRUCTING -->only used whe
let arr1=[5,6,7,8,9,"helo","world"];
var [var1,var2,...arr2]=arr1; 
console.log("value of var1 is ",var1,"and value of var2 is",var2);
console.log(arr2);
*/

//objects
const my="email";
const person={
    nme:"kd",
    age:22,
    gender:"male"
}
// console.log(person.nme);
// console.log(person["gender"]);
// person[my]="abc@gmail.com";
// console.log(person["email"],"&",person[key]);

//sqaure bracket :- agr while iteration hum acesing mai person.key likhenge to vo search krega
// ki koy key naam se "key" hai kya ni milegi to vo undefined dega 
// islie square bracket used

// for(var key in person){ //to print key value pair
//     console.log(`${key} and value is ${person[key]}`);
// }

// const key1="objkey1";
// const key2="objkey2";

// const value1="val1";
// const value2="val2";
 
// // to take key1 variable as key and val1 its value similly for key 2

// const obj={
//       [key1]:value1,
//       [key2]:value2
// };
// console.log(obj);

//spread operator
const arr1=[1,2,3];
const arr2=[4,5,6];

//agr sprrading(...) ni lgaya to arr2 ko ye pyra ek element lega spread ni krega
//const myarr=[...arr1,...arr2,89,76];
//spread operator spread the string[i] as element of array becoz they are iterable 
// const newarr=[..."abc",..."1234"];
// console.log(newarr); 
// in a obje no key can repeat or stay twice in a object.

// when string or array is given in_an object then the idex value wil beocme KeyboardEvent
// and value at that idx is value_of that key!
// agr 2 array ya string di to last_one overwrites first_one 

// const new_obj={..."abc",...["hello",8,9]}

// console.log(new_obj);


// const obj1={
//     key1:"value1",
//     key2:"value2"
// }
// const obj2={
//     key1:"value5",
//     key3:"value8",
//     key4:"value9",
// }
// const new_obj={...obj1,...obj2,"name":"kuldeep"};
// console.log(new_obj)



// destructoion in object => shortcut to make variable from object
// const band={
//     bandname:"fgh",
//     song:"dj",
//     year:1897,
//     u:"my"
// }

// let {bandname:var1,song:var2}=band;
// console.log(var1,var2);
// by default jo name obj mai hota hai usi naam se variable bnta hai
// but hm khud ka bhi bna skte hai ,here var1

// let {bandname,song}=band;

//objects inside arrays
const users=[
    {userid:1,name:"kd",sex:"M"},
     {userid:2,name:"jk",sex:"M"},
      {userid:3,name:"lm",sex:"hj"},
]
// for(user of users){
//     //now user is an object
//     console.log(user);
//     console.log(user.sex);
// }

// nested destructing
// we want name of first user and gender of 3rd user object
// cosnt[]==>[]bcoz array se chaiye vo variable ki value
// cosnt{}==>[]bcoz object se chaiye vo variable ki value



// const[{name:var1,userid:idxee},{userid:idx2} ,{sex:my_gender}]=users;
// console.log(var1," :: ",my_gender,"::",idxee,"::",idx2);



const band={
    bandname:"fgh",
    song:"dj",
    year:1897,
    u:"my"
}

const{bandname:myname,...newobj}=band;
console.log(myname);
console.log(newobj);
//console.log(song);