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