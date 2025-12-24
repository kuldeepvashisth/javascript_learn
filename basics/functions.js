//syntax for function declaration
//"function" function_name(parameters)

// function sing(){
//     console.log("la la la la");
// }
// function sum(a,b){
//     return a+b;
// }

// var result = sum(2,3);
// console .log(result);

// sing(); 

// function iseven(num){
//     // if(num%2==0){
//     //     return true;
//     // }
//     // return false;
//     return num%2===0;
// }
// console.log("is 5 even? Ans: ",iseven(5));
// let s=lets("hello");
// console.log(s); //or console.log(lets("hello"));

// function find(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i;
//         }
//     }    return -1;
// }

//function expression => function ko variable mai assign krna  
// "variable type" f(n)name = "function"(parameter) 

// const sum=function (a,b){
//     return a+b;
// }

/*jb koi return value ni hoti to vo undefined return krega */

//number in a white color mens its a string
// let num=200.08979;
// console.log(num.toExponential());
// console.log(num.toFixed(3)); //->> 200.000

//big number after decimal tk we want some fix numbers

// console.log(num.toPrecision(6));//->output mai total 6 digits no more
// let str="abc";
// console.log(str.replaceAll("a","x")); //xbc

// "." lga kr sbke methods aate hai str,num ke
// Math. -->maths methood


// u tube prdikhata hai na ki kb post kri so basically it has methods 
// which keep track of time
// let date= new Date()
// console.log(date.getMinutes());


// console.log(date.getDay());


/*arrow function => function in one line
const f(n) name = (parameter if)=>{working of function}
2.if single parameter we can write it without()
3.if 1 hi line mai return kr rhe hai to return hta skte hai 
ex:-const iseven= num => num%2===0;
*/
 const iseven = num => num%2===0;
// const iseven=(num)=>{ return num%2===0;}
console.log(iseven(5));

/*hoisting-: f(n) calling first and declare baad mai 
1.this can be only done in declaration not in f(n) expession,arrow f(n),const,let
*/

hello();
console.log(myword);
function hello(){
    console.log("hello");
}
var myword="world";

/* function inside function 
1.jo fun() andr likhe hai vo andr se hi call honge

const myfun=function(){
    const fun2 =() => console.log("how r u");
    
    function fun3(num1,num2){
        return num1+num2;
    }
    console.log("kkrh");//ye my func ki_working hai
    fun2();
    console.log(fun3(5,8));

}
console.log(myfun());
*/


/* lexical scope , default_parametr,rest_parameters
1.read from n_book

*/



/*parameter destructing-: used for objects

const person={
    name:"kf",
    gender:"male"
}
function parameter_destructing({name,gender}){
    console.log(name);
    console.log(gender);
}
parameter_destructing(person);
*/



/* fucntion callback
1.callback f(n) vo hota hai jo dusre kisi f(n) ko as a parameter le


function first(){
    console.log("i am from first");
}
function second(a){
    console.log("inside second function");
    a();
}
second(first); //second is callback function
*/

/* functionn returning function */

// function myfun(){
//     console.log("hello i am func 2");
// }
// function func(){
//     return myfun;
// }
// let ans=func();
// console.log(ans());



// function func2(){
//    function myfunc(){
//     return "hello i am func 2"
// }
// return myfunc;
// }    
// let ans2=func2();
// console.log("this i 2nd output",ans2());
// ans2();