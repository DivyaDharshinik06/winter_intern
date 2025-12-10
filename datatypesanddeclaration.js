/*
a=10
b="SECE"
c=true
d=undefined
g=a+b+c
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(g)
console.log(typeof(a), typeof(b), typeof(c), typeof(d), typeof(g))
e=10
f="SECE"
g=e+f
console.log(g)
h=10    
i=20
console.log(a+c+b)


let g=20; //Block Scope

g=10;
const c=10; //Block scope

var p=20;//number
var q="hello"//string
var bool=true;//boolean
var r;//undefine
var s=null;//null
big=12345678909876543223456789765n;
var y=Symbol('li')
console.log(typeof(p), typeof(q), typeof(bool), typeof(r), typeof(s))
//console.log(typeof(big), typeof(y)

arr=[1,2,3,4,5];//array
console.log(arr)

var oblect={
    name:"Divya",
    age:20
}
console.log( typeof arr);
console.log(typeof Object)

//Arithmetic operator
 var a=10;
 var b=20;
 console.log(a+b)
 console.log(a-b)
 console.log(a*b)
 console.log(a/b)
 console.log(a%b)

 //Relational operator
 var a=10;
 var b=20;
 console.log(a>b)
 console.log(a<b)
 console.log(a>=b)
 console.log(a<=b)
 console.log(a==b)
  console.log(a!=b)
  console.log(a===b)
    console.log(a!==b)
  console.log(a)

   var a=10;
 var b="20";
 console.log(a>b)
 console.log(a<b)
 console.log(a>=b)
 console.log(a<=b)
 console.log(a==b)
  console.log(a!=b)
  console.log(a===b)
    console.log(a!==b)
    console.log("end\n")
    //asign
    a=10
    console.log(a)
    a+=2
    console.log(a)
    a-=2
    console.log(a)
    a*=2
    console.log(a)
    a/=2
    console.log(a)
    a%=2
    console.log(a)

    //logical operator
    a=true;
    b=false;
    console.log(a&&b)
    console.log(a||b)
    console.log(!a)

    //for loop
    for( let i=1;i<=10;i++){
        console.log(i);
    }
    //while loop
    while(a!==5){
        a++;
        console.log(a)
    }
    console.log(a)
    console.log("end")
    //d0..while
    a=0;
    do{
        console.log(a);
    }while(a===1);
    console.log("end")

    //condition statement
    a=5;
    if(a%2===0){
        console.log("Even")
    }
    console.log("end")
    //if...else
    if(a%2===0) console.log("Even");
    else console.log("odd");

    //else...if
    var mar=90;
    if(mar>=90) console.log("O");
    else if(mar>=70) console.log("A");
    else if(mar>=50) console.log("B");
    else console.log("Fail");

    //switch
    day=1;
    switch(day){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default :
            console.log("invalid number");
           
    }

    // ternary operator
    console.log((a%2===0)?"Even":"odd");
    //else if using ternary operator
    var mark=90;
    var grade=mark>=90?"A grade":
    marks>=80?"B grade":
    mark>=70?"C grade":
    mark>=60?"D grade":
    "fail";
    console.log(grade); 

    //function
    function add(){
        console.log(10+20)
    }
    add();
    function addparam(a,b){
        console.log(a+b);
    }
    addparam(10,20)
    //
    var add=(a,b)=>{
        console.log(a+b)
    }
    //spread operator

    const w=[10,20,30];
    const v=[...w,40,50,60];
    console.log(w);
    console.log(v);

    //
    const [name,age,marks]=["Divya",19,90];
    console.log(name);
    console.log(age);
    console.log(marks);
 
   // for..in(index)
   var arr=[1,2,3,4,5];
   for(let i in arr){
    console.log(i)
   }

   //for...of(values)
   for(let j of arr){
    console.log(j)
   }
 
   //forEach
   arr.forEach((val,index)=>
{
    console.log(val,index);
})
      
     class person{
        name;
        age;
        constructor(name,age){
            this.name=name;
            this.age=age;
        }
        display(){
            console.log(this.name,this.age);
        }
     }
     var p1=new person("Divya",20);
     p1.display();
     

     //prime number
     var n=1;
     var flag=0
     for(let i=2;i<n;i++){
        if(n%i==0){
            flag=1
            break
        }
     }
     if(flag==0){
        console.log("Prime");
     }
     else{
        console.log("not a Prime");
     }
     //palindrome
     
var num=12321
var temp=num
var rev=0
while(num>0){
    var rem=num%10
    rev=rev*10+rem
    num=Math.floor(num/10)
}
if(temp===rev){
    console.log("Palindrome")
}
else{
  console.log("Not Palindrome")
}
  
 let a=10;
 let b=20;
 if(true){
    console.log(a);
 }
 console.log(a,b);
 //callback function
var demo=()=>{
    console.log("Demo -> Hello")
}
var main=(callback)=>{
    console.log("Main called")
    callback()
}
main(demo)

 
var demo=()=>{
    setTimeout(()=>{
 console.log("Processing...")
    },2000)
}
demo();

var demo=()=>{
    setTimeout(()=>{
 console.log("Processing...")
    },2000)
}
demo();
console.log("end")

//Template Literals
var name="Divya";
var age=20;
console.log("My name is "+name+" and my age is "+age);
console.log(`My name is ${name} and my age is ${age}`);
*/
//map
var arr=[1,2,3,4,5]
var double=arr.map(num=>num*2);
console.log(double)

//Filter
var even=arr.filter((num)=>(num%2==0))
console.log(even)

//Reducer
sum=0
var total=arr.reduce((Sum,num)=>(sum+num),0);
console.log(total)

var evenCount=arr.map(num=>num**3).filter(num=>num%2==0).reduce((sum,num)=>sum+1,0);
console.log(evenCount);

console.log("-------------------------------------------------------------------------------------------------------------------")

var student=[
    {name:"Dishu",marks:80},
        {name:"JD",marks:85},
        {name:"Vikram",marks:75},
        {name:"Raju",marks:50},
        {name:"Raj",marks:55},
        {name:"Rajkiran",marks:68},
]

var studentMark = student.filter(s=>s.marks>59);
console.log(studentMark);

//map
var studentName = student.map(s=>s.name);
console.log(studentName);

//reduce
var totlaMarks=student.reduce((sum,s)=>(sum+s.marks),0);
console.log(totlaMarks);

var avg=totlaMarks/student.length;
console.log(avg);

