
// function introduce(){
//     console.log(`my name is ${this.name}`);
// }
// const user1={
//     name:"kd",
//     age:18,
//     intro:introduce
// }
// const user2={
//     name:"kunal",
//     age:12,
//     intro:introduce
// }
 //user1.intro() //->give desired output

 //->give desired output as well as udeined bcoz introduce not return anything 
 //  // so return undefined so console.log(undefined) gives undefined aditonaly

// console.log(user1.intro());      

// const myfunc=user1.intro();
// console.log(myfunc);

// myfunc()
// console.log(myfunc);

/*
const usermethood={
    abt:function(){
        return `my name is ${this.name}`
    },
    isadult:function(){
        return this.age>=18
    }
}*/
function createuser(name,age,id){
    const user=Object.create(createuser.prototype);
       user.name=name;
         user.age=age;
       user.id=id;
       return user;
}

//    const user1=createuser("kd",21,3);
// console.log(user1);
// console.log(user1.isadult());

// createuser.prototype.abt=function(){
//         return `my name is ${this.name}`
// 


// const user2=createuser("kunal",12,4);
// console.log(user2.abt);   

// createuser.prototype.isadult=function(){
//         return this.age>=18
//     }


/* ***************USING NEW KEYWORD *************** */ 

// function createuser(name,age,id){
//     const user=Object.create(createuser.prototype);
//        this.name=name,
//        this.age=age,
//        this.id=id
// }



//     const user1=new createuser("kd",21,3);
//     console.log(user1);
    
// createuser.prototype.abt=function(){
//         return `my name is ${this.name}`
//     }
//     console.log(user1.abt());
    



/* ***************USING CLASS *************** */ 
class Animal{
    constructor(name,age,id){
           this.name=name,
        this.age=age,
        this.id=id       
    }

    abt(){
        return `its name is ${this.name},and age is ${this.age}`
    }
}
const animal1=("lion",34,5)
console.log(animal1.abt());
