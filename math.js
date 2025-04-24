/*/ Integer7 1- qiymat
let z;
let x1 = -1.4;
let y1 = 7.9;
let x2 = 6.1;
let y2 = 9.9;
z = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2 );
console.log(z);

// Integer7 2- qiymat
let s;
let a1 = -3.9;
let b1 = -8.2;
let a2 = -1.3;
let b2 = -2.9;
s = Math.sqrt((a2 - a1) ** 2 + (b2 - b1) ** 2 );
console.log(s);

// Integer8 

console.log("Hello console");

let x1 = Number(prompt("x1 ni kiriting"));
let y1 = Number(prompt("y1 ni kiriting"));
let x2 = Number(prompt("x2 ni kiriting"));
let y2 = Number(prompt("y2 ni kiriting"));
let x3 = Number(prompt("x3 ni kiriting"));
let y3 = Number(prompt("y3 ni kiriting"));

console.log(`[${x1},${y1}]`);
console.log(`[${x2},${y2}]`);
console.log(`[${x3},${y3}]`);

// Masofa formulasi
let AB = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log("AB =", AB);

let BC = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2);
console.log("BC =", BC);

let CA = Math.sqrt((x3 - x1) ** 2 + (y3 - y1) ** 2);
console.log("CA =", CA);

// Uchburchak shartini tekshiramiz
if (AB + BC > CA && AB + CA > BC && BC + CA > AB) {
  console.log("Bu nuqtalar orqali uchburchak hosil bo'ladi");

  let P = AB + BC + CA;
  console.log("Uchburchak perimetri =", P);

  let p = P / 2;
  let S = Math.sqrt(p * (p - AB) * (p - BC) * (p - CA));
  console.log("Uchburchak yuzi =", S);
} else {
  console.log("Bu nuqtalar orqali uchburchak hosil qilib bo'lmaydi");
}


//Integer9 
let x;
let a = -0.5;
x = Math.sin(a);
console.log(x);

//Integer10
let x;
let a = 0.5;
x = Math.cos(a);
console.log(x);

//Integer11 
let a = Number(prompt("Qiymat kiriting:"));
let x1 = a % 10;
let x2 = (a - x1) / 10;
console.log("Ikki xonali son yig'indisi", x1+x2);
console.log("Ikki xonali son ko'paytmasi", x1*x2);

// Integer12
let n = 12;
let s;
s = 2 * Math.pow( n + 3, 2);
console.log(s);

// Integer13

let n = 5;
let s;
s = Math.pow( ((3 + n) / 2), 2);
console.log(s);

// Integer14

let n = 4;
let x = 2;
let s;
s = Math.pow(n, x) + Math.pow(6, x);
console.log(s);

// Integer15

let x1 = -8;
let x2 = -56;
let x3 = -45;
let a1 = Math.abs(x2);
let a2 = Math.abs(x1);
let a3 = Math.abs(x3);
console.log(a1);
console.log(a2);
console.log(a3);

// Integer 16

let m1 = 3.456;
let m2 = 5.678;
let m3 = 7.5;
let s1;
let s2;
let s3;
s1 = Math.round(m1 * 100) / 100;
s2 = Math.round(m2 * 100) / 100;
s3 = Math.round(m3 * 100) / 100;
console.log(s1);
console.log(s2);
console.log(s3); 

// Integer 17

let x = 2;
let y = 3;
let s;
s = Math.pow(x, 4) + 5 * Math.pow(x, 2) + Math.pow(x, 3) * y;
console.log(s); 

// Integer 18

let x = 2;
let y = 3;
let s;
s = 6 * Math.pow(x, 3) * Math.pow (y, 5) + 4 * Math.pow(x, 4) * Math.pow(y, 3) - 24 * x * y;
console.log(s); 

// Integer 19 

let a = Number(prompt("Qiymat kiriting:"));
let x1 = a % 10;
let x2 = ((a / 10) % 10) | 0;
let x3 = (a / 100) | 0;
console.log("Uch xonali son yig'indisi", x1+x2+x3);
console.log("Uch xonali son ko'paytmasi", x1*x2*x3); 

// Integer 20

let s;
s = Math.abs(5 / 3 - 13 / 4);
console.log(s); */

