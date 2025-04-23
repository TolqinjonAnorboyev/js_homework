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
console.log(x);*/
