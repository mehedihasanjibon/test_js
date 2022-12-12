document.getElementById("demo").innerHTML = "Hello javascript";

function myfunction(){
    document.getElementById("demo1").style.fontSize = "45px";
}

function myfunction2(){
    document.getElementById("demo2").style.display = "none";
}

function mybtn(){
    document.getElementById("demo3").style.display = "block";
}

function mybtn2(){
    document.getElementById("demo4").innerHTML = "paragraph change";
}

// js output
document.write(5+5);

// window.alert(5+6);

console.log("Hello world");

document.getElementById("demo5").innerHTML = "Hello Dolly";
console.log(6);
console.log(5); 
document.write("Hello");    


document.getElementById("demo6").innerHTML = (5+6) * 10;
document.getElementById("demo7").innerHTML = "Mh" + " " + "Jibon"; 

var a = 5;
var b = 5;
var c = a + b;
document.getElementById("demo8").innerHTML = "The value of z is: " + c;

// js let
let a1 = 7;
if(true){
    let a1 = 6;
    console.log(a1);
};
console.log(a1);

let b1 = 2;
{
    let b1 = 2;
};
document.getElementById("demo9").innerHTML = b1;

carName = "volvo";
var carName;
console.log(carName);

// js const
const num = 10;
{
    const num = 2
}
document.getElementById("demo10").innerHTML = num;

// operators
let c1 = 5;
let d = 2;
let e = c1 + d;
document.getElementById("demo11").innerHTML = "the sum is c1 + d is: " + e;

let d1 = 10;
d1 += 7;
document.getElementById("demo12").innerHTML = d1;

let e1 = 5 +5;
let e2 = "5" + 5;
let e3 = "Hello" + 5;
document.getElementById("demo13").innerHTML = e1 + "<be>" + e2 + "<br>" + e3;

// arithmetic
let f = 5;
f--;
let f1 = f;
document.getElementById("demo14").innerHTML = f1;





