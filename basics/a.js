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
*/