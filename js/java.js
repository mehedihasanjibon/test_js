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
    document.getElementById("demo4").innerHTML = "change paragraph";
}

document.getElementById("demo6").innerHTML = (6+5) * 10;
document.getElementById("demo7").innerHTML = "Mh" + " " + "Jibon";

var x = 5;
var y = 5;
var z = x + y;
document.getElementById("demo8").innerHTML = "The value of z is:" + z;

// let js  
// let x = 7; 
// if(true){
//     let x = 6;
//     console.log(x)
// }
// console.log(x);


carName = "Volvo"
var carName;
console.log(carName);

const c = 10;
{
    const c = 2
}
console.log(c);

