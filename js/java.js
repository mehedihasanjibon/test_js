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

// assignment
let f2 = 10;
f2 += 5;
document.getElementById("demo15").innerHTML = f2;

// Data type
let f3 = 45 + 5 + "volvo";
document.getElementById("demo16").innerHTML = f3;

let f4 = "Mehedi" + 2 + 2;
document.getElementById("demo17").innerHTML = f4;

let g;
g = 5;
g = "hasan";
document.getElementById("demo18").innerHTML = g;

let g1 = 22.00;
let g2 = 34;
let g3 = 22.342;
document.getElementById("demo19").innerHTML = g1 + "<br>" + g2 + "<br>" + g3;  

let h = 1234;
let h1 = 123-4;
document.getElementById("demo20").innerHTML = h + "<br>" + h1;

let h2 = 5;
let h3 = 5;
let h4 = 6;
document.getElementById("demo21").innerHTML = (h2 == h3) + "<br>" + (h2 == h4);

// the typeof
var tst = 5;
var tst1 = 4;
var tst2 = 3;
var myObject = {tst:5, tst1:4, tst2:3};
console.log(typeof myObject);

// JS Function
function sleep(){
    console.log("Sabiha is sleeping from 10 pm");
}
sleep();
console.log("My name is jibon");

function sleep(name){
    console.log(name + " is sleeping from 8pm");
}
sleep("Mehedi");
sleep("MOsharof");
sleep("Mosha");

function sleep(name , time){
    console.log(name + " is sleeping from " +time);
}
sleep("jahid" , "7pm");
sleep("Munna" , "6pm");
sleep("shaon" , "5pm");

// return
function mybtn3(){
    return "Hello return";
}
document.getElementById("demo22").innerHTML = mybtn3();

let i = Myfunction3(15, 5);
document.getElementById("demo23").innerHTML = i;

function Myfunction3(a, b){
    return a * b;
}

let carNames = "BMW";
function myfunction4(){
    let carNames = "volvo";
    console.log(carNames);
}
console.log(carNames);
myfunction4();

// Object

const car = {
    type: "fiat" ,
    model: 500,
    color: "white",
}
document.getElementById("demo24").innerHTML = "The car type is " + car.type;

const person = {
    firstName: "Mh",
    lastName: "jibon",
    age: 22,
    eyeColor: "blue",
};

document.getElementById("demo25").innerHTML = person.firstName + " is " + person.age + " years old";

const cars = {
    name: "Fiat", 
    model: 500,
    weight: "white",
    start: function(){
        this.drive();
        console.log("car has started");
    },
    drive: function(){
        console.log("car is driving");
    },
};
console.log(cars.weight);
console.log(cars['name']);
cars.start();

function displayDate(){
    document.getElementById("demo27").innerHTML = Date();
}

// js strings

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

// escape charcter
let text1 = "We are the so-called \"Vikings\" from the north";
console.log(text1);


let text2 = 'It\'s alright.';
console.log(text2);

let text3 = "The character \\ is called backlash";
console.log(text3);

document.getElementById("demo28").innerHTML = "Hello\
jibon!";

let i1 = "john";
let i2 = new String("john");
document.getElementById("demo29").innerHTML = typeof i1 + "<br>" + typeof i2;


// js methods

const i3 = {
    name: "Bangladesh",
    districts: 64,
};
const i4 = "Bangladesh";
console.log(i4.length);

let str = "Apple, Banana, Kiwi";
console.log(str.slice(7,13));

let str2 = "Apple, Banana, Kiwi";
console.log(str2.slice(-12, -6));

// Replacing string content
let str3 = "I love sabiha";
let nil = str3.replace("sabiha" , "nil");

console.log("nil");

function myfunt() {
    let text = document.getElementById("demo30").innerHTML;
    document.getElementById("demo30").innerHTML = text.replace("Microsoft", "w3schools");
};

function ourfunction(){
    let upe = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML = upe.toUpperCase();
}

function ourfunction2(){
    let lw = document.getElementById("lower").innerHTML;
    document.getElementById("lower").innerHTML = lw.toLowerCase();
}

// concat

let lan1 = "Hello";
let lan2 = "concat";
let lan3 = lan1.concat(" " , lan2);
document.getElementById("concat").innerHTML = lan3


// trimstart
let trm1 = "    Hello java world     ";
let trm2 = trm1.trimStart();
document.getElementById("trim").innerHTML = "lenght text1= " + trm1.length + " <br> lenght.text2= " + trm2.length; 

// trimend.
let end1 = "        Hello java trimend      ";
let end2 = end1.trimEnd();
document.getElementById("trimend").innerHTML = "lenght text1= " + end1.length + "<br> lenght text2= " + end2.length;

// charAt
let cAt = "Hello java";
document.getElementById("char").innerHTML = cAt.charAt(0);

let cAt1 = "hello java";
console.log(cAt1.charAt(500));
console.log(cAt1.charAt[500]);

// split()
let texts = "Hello world";
console.log(texts.split(","));

let test = "Hello";
const myArr = test.split("");
test = "";
for (let i = 0; i < myArr.length; i++){
    test += myArr[i] + "<br>";
}
document.getElementById("split").innerHTML = test;

// indexof
let text4 = "Please locate where 'locate' occurs!";
document.getElementById("demo31").innerHTML = text4.indexOf("locate");

//lastindexof
let last = "Please locate where 'locate' occurs!";
document.getElementById("demo32").innerHTML = last.lastIndexOf("where");

// search()method
let ser = "Mehedi hasan jibon chowdhury";
document.getElementById("demo33").innerHTML = ser.search("jibon");

// match
let text5 = "the rain is SPAIN stays mainly in the plain";
const myArr1 = text5.match("ain");
document.getElementById("demo34").innerHTML = myArr1; 

let text6 = "the rain is SPAIN stays mainly in the plain";
const myArr2 = text6.match(/ain/g);
document.getElementById("demo35").innerHTML = myArr2.length + " " + myArr2;

let text7 = "the rain is SPAIN stays mainly in the plain";
const myArr3 = text7.match(/ain/gi);
document.getElementById("demo36").innerHTML = myArr3.length + " " + myArr3;

// includes()
let inc = "Hello world, welcome to the universe.";
document.getElementById("demo37").innerHTML = inc.includes("world");

let inc1 = "Hello world, welcome to the unicerse";
document.getElementById("demo38").innerHTML = inc1.includes("world" , 12);

// startsWith()
let start = "Hello world, welcome to the unicerse";
document.getElementById("demo39").innerHTML = start.startsWith("Hello");

// endswith method
let end = "Mehedi hasan";
document.getElementById("demo40").innerHTML = end.endsWith("hasan");

let endsec = "Hello world, welcome to the universe.";
document.getElementById("demo41").innerHTML = endsec.endsWith("world" , 11);

let bt = `Hello java`;
document.getElementById("demo42").innerHTML = bt;

let multi = `The quick
brown fox
jumps over
the lazy dog.`;
document.getElementById("demo43").innerHTML = multi;











