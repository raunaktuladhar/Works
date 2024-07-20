// let b = Boolean(true)
// let n = Number(13)
// let bi = BigInt(89n)
// let s = String("Raunak")
// let u = undefined

// console.log(`${typeof b} : ${b}`)
// console.log(`${typeof n} : ${n}`)
// console.log(`${typeof bi} : ${bi}`)
// console.log(`${typeof s} : ${s}`)
// console.log(`${typeof u} : ${u}`)

// let b1 = Boolean(BigInt(Number("1234")))
// console.log(`${b} [${typeof b}]`)        // -> true [boolean]

// let b = true + false; 
// let n = 100 + 200; 
// let bi = 100n + 200n; 
// let s = "He" + "llo"; 
// let u = undefined + undefined; 
// console.log(`${b} [${typeof b}]`);        // 1 [number] 
// console.log(`${n} [${typeof n}]`);       //  300 [number]
// console.log(`${bi} [${typeof bi}]`);    //   300 [bigint]
// console.log(`${s} [${typeof s}]`);     //    Hello [string]
// console.log(`${u} [${typeof u}]`);    //     NaN [number]

let b1 = true + 100
console.log(b1)          // 101

let n1 = "text" + 42n
console.log(n1)          // text42

const str1 = 42 + "1"
console.log(str1)     // 421

const str2 = 42 + +"1"
console.log(str2)      // 43
