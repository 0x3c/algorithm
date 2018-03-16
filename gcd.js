"use strict"
// GCD: greatest common divisor

const gcd=(m,n)=>{
    if(!n){
        return m;
    }else{
        return gcd(n,m%n);
    }
}
let m=10
let n=6;
console.log(`(${m},${n})的最大公约数为${gcd(m,n)}`)