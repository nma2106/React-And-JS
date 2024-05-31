//way 1 for creating object , here we directly comit  towards the values 
let  obj_1  = {name:"Naman",age:23,add:"blr"}
console.log(obj_1)

// the second way 
// here we create an object as oops
let obj_2 = new Object();

obj_2.id = 1;
obj_2.name = "abc";
obj_2.tag = 12.34;
obj_2.greet = function(){
    console.log("hello ");
}

console.log(obj_2)
console.log(obj_2.greet)
