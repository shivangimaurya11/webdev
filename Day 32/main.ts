// var a=10;
// a="hello"
// let a;
// a=10;
// a="hello";
// let a=[1,2,3];
// a.push("hello")
// let a :number[]=[1,2,3];
let s :string[]=["a","b","c"];
let a :(number|string)[]=[1,2,3];
 a.push("hello")
// a.push(false)

// console.log(a);


                              //objects

const users={
    name:"swechchha",
    age:21
}
// user.name = 4

interface User {
    name:string,
    age:number
}
let user:User = {
    name: "John",
    age: 30,
}

 console.log(user);

        // typescript in object oriented programming

 class App{
     printHello(){
         console.log("hello");
     }
 }       
 const app = new App();
 app.printHello()

 let uusername : string | null = "";
 console.log(uusername);
      //  custom data type

 type Door = "open" | "close";
 let door:Door= "open";
 console.log(door);

 let aa:any;
aa=10
aa="hello"
aa=false
console.log(aa);


//function



function add(a,b)
{
    return a+b

}
console.log(add(1,2));
console.log(add(1,"2"));


  export {}