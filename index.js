/**
 * @param a
 * @param b
 * @returns {number}
 */
function fun1(a = 1, b = 2) {
  return a + b
}

let x = 3
let y = 4
let z = 5

fun1()
fun1(x, y)

if (x === y) {
  console.log(
    x + "long long long long long long long long long long long string",
  )
}

if (z === 5) {
  x = z
}

let myPromise = new Promise((resolve, reject) => {
  resolve(1)
})

myPromise
  .then(r => r)
  .then(r => r)
  .then(r => r)
  .then(r => r)
  .then(r => r)
  .then(r => r)
  .then(r => r)
  .catch(e => e)
  .finally(() => {})

function manyParamsCheck(param1, param2, param3, param4, param5) {
  console.log(param1)
}

function trailingCommasCheck(
  param1,
  param2,
  param3,
  param4,
  param5,
  param6,
  param7,
  param8,
  param9,
  param10,
) {
  console.log(param1)
}

let longNamedVariable1 = 1
let longNamedVariable2 = 1
let longNamedVariable3 = 1
let longNamedVariable4 = 1
let longNamedVariable5 = 1
let longNamedVariable6 = 1

if (
  longNamedVariable1 ||
  longNamedVariable2 ||
  longNamedVariable3 ||
  longNamedVariable4 ||
  longNamedVariable5 ||
  longNamedVariable6
) {
  console.log("Something!")
}
