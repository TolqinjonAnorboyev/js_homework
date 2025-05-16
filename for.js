// 1- misol
/*
let k = 10;
let n = 6;
for(let i = 0; i < n; i++){
  console.log(k);
} 

// 2- misol

let a = 5;
let b = 15;
for( let i = a; i <= b; i++){
  console.log(i);
} 

// 3- misol

let a = 5;
let b = 15;
for( let i = b - 1; i > a; i--){
  console.log(i);
} 

// 4- misol

let n = 20000;

for(let i = 1; i <= 10; i++){
  console.log(i * n);
} 

// 5- misol

let n = 20000;

for(let i = 0.1; i <= 1; i += 0.1){
  console.log(i.toFixed(1) * n);
} 

  // 6- misol

let n = 20000;

for(let i = 1.2; i <= 2; i += 0.2){
  console.log(i.toFixed(1) * n);
} 

// 7- misol

let a = Number(prompt("a ning qiymatini kiriting"));
let b = Number(prompt("b ning qiymatini kiriting"));
let sum = 0;

for(let i = a; i <= b; i++){
  sum += i;
  console.log(i);
}
console.log("Natija", sum); 

// 8- misol

let a = Number(prompt("a ning qiymatini kiriting"));
let b = Number(prompt("b ning qiymatini kiriting"));
let product = 1;

for(let i = a; i <= b; i++){
  product *= i;
  console.log(i);
}
console.log("Ko'paytma:", product); 

// 9- misol

let a = 1;
let b = 10;
let sum =0;

for(let i = a; i <= b; i++){
  sum += Math.pow(i, 2);
  console.log(i);
}
console.log("Natija:", sum); 

// 10- misol

let n = Number(prompt("n ="));
let s = 0;

for(let i = 1; i <=n; i++){
  s += 1/i;
}
console.log(s); 

// 11- misol

let n = 10;
let S = 0;

for (let i = n; i <= 2 * n; i++) {
  S += i * i;
}

console.log("Natija:", S);

// 12- misol

let n = 2; 
let S = 1;

for (let i = 1; i <= n + 1e-9; i += 0.1) {
  S *= i;
}

console.log("S =", S.toFixed(2));



// 13- misol

let n = Number(prompt("n ="));
let s = 0;

for (let i = 11; i <= n * 10; i++) {
  let x = i / 10;

  if (i % 2 === 0) {
    s -= x;
  } else {
    s += x;
  }
}

console.log(s.toFixed(2)); 

// 14- misol

let n = Number(prompt("n=")) ;
let sum =0;

for(let i = 1, count = 0; count < n; i += 2){
  sum += i;
  count++;
  console.log(i); 
}
console.log("Natija:", sum); 
console.log("n*n=", n*n); 

// 15- misol

let n = Number(prompt("n="));
let a = Number(prompt("a="))
let result = 1;

for(let i = 1; i <= n; i++){
  result *= a;
}
console.log("Natija:", result); 

// 16- misol

let n = Number(prompt("n=")); 
let a = Number(prompt("a=")); 

for (let i = 1; i <= n; i++) {
  let power = a ** i; 
  console.log(`a^${i} = ${power}`);
} 

// 17- misol

let n = Number(prompt("n=")); 
let a = Number(prompt("a=")); 
let sum = 0;

for (let i = 0; i <= n; i++) {
  let power = a ** i;
  sum += power; 
  console.log(`a^${i} = ${power}`);
}
console.log("Natija:", sum); 

// 18- misol

let n = Number(prompt("n=")); 
let a = Number(prompt("a=")); 
let sum = 0;

for (let i = 0; i <= n; i++) {
  let term = ((-1) ** i) * (a ** i);
  sum += term; 
  console.log(`a^${i} = ${term}`);
}
console.log("Natija:", sum); 

// 19- misol

let n = Number(prompt("n ="));
let s = 1;

for (let i = 1; i <= n; i++) {
  s *= i;
}
console.log("n!=",s); 

// 20- misol

let n = Number(prompt("n ="));
let s = 0;

for (let i = 1; i <= n; i++) {
  let k = 1;
  
  for (let j = 1; j <= i; j++) {
    k *= j;
  }

  s += k;
}

console.log(s); 

// 21- misol

let n = Number(prompt("n ="));
let s = 1; 
let factorial = 1;

for (let i = 1; i <= n; i++) {
  factorial *= i;       
  s += 1 / factorial;     
}

console.log("Yig'indi:", s); 

// 22- misol

let x = Number(prompt("x ="));
let n = Number(prompt("n ="));
let sum = 1; 
let power = 1;     
let factorial = 1; 

for (let i = 1; i <= n; i++) {
  power *= x;       
  factorial *= i;   
  sum += power / factorial;
}

console.log(`e^${x} ning ${n}-darajagacha yaqinlashuvi:`, sum);
*/
