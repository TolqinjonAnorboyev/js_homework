// If1 
/*let a = Number(prompt("a ni qiymatini kirit"));
let b = Number(prompt("b ni qiymatini kirit"));
let c = Number(prompt("c ni qiymatini kirit"));
if(a < b && a < c) {
  console.log(a);
} else if(b < a && b < c) {
  console.log(b);
} else {
  console.log(c);
}

// If2

let a = Number(prompt("a ni qiymatini kirit"));
let b = Number(prompt("b ni qiymatini kirit"));
let c = Number(prompt("c ni qiymatini kirit"));
let middle;

if((a > b && a < c) || (a < b && a > c )){
  middle = a;
} else if((b > a && b < c) || (b < a && b > c)){
  middle = b;
} else {
  middle = c;
}
console.log("O'rtadagi son:", middle); 

// If3 1- usul

let a = 10;
let b = -4;
if(a > b){
  console.log(a);
} else if(b > a) {
  console.log(b);
} else {
  console.log(0);
} 
  
// If3 2- usul

let a = 70;
let b = 70;
if(a > b){
  console.log(a);
} else if(b > a) {
  console.log(b);
} else {
  console.log(0);
} 

  // If4

let x = Number(prompt("x o'qini kiriting"))
let y = Number(prompt("y o'qini kiriting"))
if (x ===0 || y ===0) {
  console.log("Bu kordinata dekart kordinatalar o'qida yotadi");
} else if (x > 0 && y > 0) {
  console.log("Bu nuqta I chorakda yotadi");
} else if (x < 0 && y > 0) {
  console.log("Bu nuqta II chorakda yotadi");
} else if (x < 0 && y < 0) {
  console.log("Bu nuqta III chorakda yotadi");
} else if (x > 0 && y < 0) {
  console.log("Bu nuqta IV chorakda yotadi");
} 

// If5 1- usul

let x = 0.5;
let fx;
if(x > 0) {
  fx = 2 * Math.sin(x);
} else {
  fx = x - 6;
} console.log(fx); 

// If5 2- usul

let x = -5;
let fx;
if(x > 0) {
  fx = 2 * Math.sin(x);
} else {
  fx = x - 6;
} console.log(fx); 

// If6 

let x = Number(prompt("x ning qiymatini kiriting"))
let fx;
if (x < -2 || x > 2) {
  fx = 2 * x;
} else {
  fx = -3 * x;
} console.log(fx); 

// If7

let x = Number(prompt("x ning qiymatini kiriting"))
let fx;
if (x <= 0) {
  fx = -x;
} else if (0 < x < 2) {
  fx = Math.pow(x, 2);
} else {
  fx = 4;
}
 console.log(fx); 

 // If8 1- usul

let a = 3;
let b = 4;
let c = 5;
if (a + b > c && a + c > b && b + c > a) {
  console.log("Yes");
} else {
  console.log("No");
} 

// If8 2- usul

let a = 7;
let b = 4;
let c = 2;
if (a + b > c && a + c > b && b + c > a) {
  console.log("Yes");
} else {
  console.log("No");
} 

// If9

let x = Number(prompt("x ning qiymatini kiriting:"))
if (x < 0) {
  console.log("Freezing");
} else if (x > 1 && x < 10) {
  console.log("Very Cold");
} else if (x > 11 && x < 20) {
  console.log("Cold");
} else if (x > 21 && x < 30) {
  console.log("Normal");
} else if (x > 31 && x < 40) {
  console.log("Hot");
} else if (x > 40) {
  console.log("Very Hot");
} 

// If 10

let a = Number(prompt("a ning qiymatini kiriting"))
let s;
if (a > 0 && a % 2 === 1) {
  s = "musbat toq son"
} else if (a > 0 && a % 2 === 0) {
  s = "musbat juft son"
} else if (a < 0 && Math.abs(a) % 2 === 1) {
  s = "manfiy toq son"
 } else if (a < 0 && Math.abs(a) % 2 === 0) {
  s = "manfiy juft son"
} else {
  s = "son 0 ga teng"
}
console.log(s); 

// If 11

let a = Number(prompt("a ning qiymatini kiriting"))
let s;
if (a > 0 && a < 100 && a % 2 === 1) {
  s = "Ikki xonali toq son"
} else if (a > 0 && a < 100 && a % 2 === 0) {
  s = "Ikki xonali juft son"
} else if (a > 0 && a < 1000 && Math.abs(a) % 2 === 1) {
  s = "Uch xonali toq son"
 } else if (a > 0 && a < 1000 && Math.abs(a) % 2 === 0) {
  s = "Uch xonali juft son"
} else {
  s = "son 0 ga teng"
}
console.log(s); 

// If 12

let n = Number(prompt("n ning qiymatini kiriting"));
let s;
s = Math.pow(n, 2);
console.log(s); 

// If 13

let money = Number(prompt("pulni qiymati kiritilsin"));
let price = Number(prompt("daftar qiymati kiritilsin"));
let isBreak = true
if (money >= price && isBreak) {
  console.log("Siz daftar olasiz");
}
else {
  console.log("Siz daftar ololmaysiz");
} 

// If 14

let n = Number(prompt("Ikki xonali son kiriting:"));

if (n < 10 || n > 99) {
  console.log("Iltimos, faqat ikki xonali son kiriting.");
} else {
  let x2 = n % 10;                // birliklar xonasi
  let x1 = Math.floor(n / 10);    // o‘nliklar xonasi
  let teskari = x2 * 10 + x1;     // raqamlar joyini almashtirish

  let natija = teskari <= n;
  console.log("Teskari son:", teskari);
  console.log("Natija:", natija); // true yoki false chiqadi
} 

// If 15

let n = Number(prompt("n ning qiymatini kiriting"));
let numberLength = String(n).length;

if (numberLength === 2) {
  console.log("Siz ikki xonali son kiritdingiz");
} else if (numberLength === 3) {
  console.log("Siz uch xonali son kiritdingiz");

} else if (numberLength === 4) {
  console.log("Siz to'rt xonali son kiritdingiz");
  
} else {
  console.log("Xato");
} 

  // If 16

  let n = Number(prompt("n ning qiymatini kiriting:"));

  if (n <= 0 || n >= 10000) {
    console.log("0 dan katta va 10000 dan kichik son kiriting.");
  } else {
    let sum = 0;
    let temp = n;
  
    while (temp > 0) {
      sum += temp % 10;       
      temp = Math.floor(temp / 10); 
    }
  
    console.log("Raqamlar yig'indisi:", sum);
  } 

   // If 17

   let n = Number(prompt("n ning qiymatini kiriting:"));

if (n <= 0 || n >= 10000) {
  console.log(" 0 dan katta va 10000 dan kichik son kiriting.");
} else {
  let sum = 0;
  let temp = n;

  while (temp > 0) {
    let raqam = temp % 10;
    if (raqam % 2 !== 0) {     
      sum += raqam;
    }
    temp = Math.floor(temp / 10);
  }

  console.log("Faqat toq raqamlar yig'indisi:", sum);
} 

// If 18

let a = Number(prompt("a ning qiymatini kiriting"));
let b = Number(prompt("b ning qiymatini kiriting"));
let c = Number(prompt("c ning qiymatini kiriting"));

if (a > b && a > c) {
  console.log("a =",a);
} else if (b > a && b > c) {
  console.log("b =",b);
} else {
  console.log("c =", c);
} 

// If 19

// Foydalanuvchidan 5 xonali son olish
let n = prompt("5 xonali butun son kiriting:");

// Musbat son uchun absolyut qiymat
n = Math.abs(parseInt(n));

// Sonni stringga aylantirib, har bir raqamni ajratib olish
let digits = n.toString().split('').map(Number);

// Eng katta raqamni topish
let maxDigit = Math.max(...digits);

// Natijani chiqarish
console.log("Eng katta raqam:", maxDigit);
alert("Eng katta raqam: " + maxDigit);
*/
