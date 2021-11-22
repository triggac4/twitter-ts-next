// console.log(/cat/.test('concatenate'))
// // → true
// console.log(/\bcat\b/.exec('con cat enate'))
// // → false
// class tryo {
//     #protect
//     constructor(value) {
//         this.#protect = value
//     }
//     get protected() {
//         return this.#protect
//     }
//     set protected(val) {
//         this.#protect = val
//     }
//     static value = 23
// }

// class tryoext extends tryo {
//     constructor(val) {
//         super(val)
//     }
// }

// let inst = new tryo(34)
// inst.protected = 46
// tryo.value = 4
// console.log('protected', tryo.value)

// let doe = new Promise((resolve, reject) => {
//     let val = true
//     console.log('start')
//     if (val) resolve('done')
//     else reject('error')
// })
// // async function dor() {
// //     try {
// //         await doe
// //     } catch (e) {
// //         console.log(e)
// //     }
// // }
// // dor()

// // let arr = { key: 3, lo: 4 }
// // let arr2 = { lo: 4, key: 3 }

// // let strArr = JSON.stringify(arr)
// // let strArr2 = JSON.stringify(arr2)

// // console.log(strArr === strArr2)
// async function doo(va) {
//     try {
//         await doe
//         return va
//     } catch (e) {
//         console.log(e)
//     } finally {
//         console.log('finally')
//     }
// }

// function promise_all(...array) {
//     let result = []
//     for (let promise of array) {
//         promise.then((val) => result.push(val))
//     }
//     return result
// }
// let re = promise_all(doo(3), doo(1), doo(4))
// console.log('promise_all', re)
// setTimeout(() => {
//     console.log('promise_all', re)
// })

// let arr = [10, 24, 31, 42, 35, 51, 62, 701, 81, 91]
// function filter(arr, func) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) result.push(arr[i])
//     }
//     return result
// }

// console.log(filter(arr, (val) => val % 2 === 0))

// function find(arr, func) {
//     for (let i of arr) {
//         if (func(i)) return i
//     }
//     return -1
// }

// console.log(
//     'find',
//     find(arr, (val) => val % 2 === 1)
// )

// function findLast(arr, func) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (func(i)) return arr[i]
//     }
//     return -1
// }

// console.log(
//     'find last',
//     findLast(arr, (val) => val % 2 === 1)
// )
// let v1 = [2, 1, 2, 0, 1]
// let v2 = [3, 3, 5, 0, 0, 3, 1, 4]
// let v3 = [[6, 1, 3, 2, 4, 7]]
// let maxProfit = function (prices) {
//     let max = []
//     let currentMax = 0
//     let min = prices[0]
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < min) {
//             min = prices[i]
//             max.push(currentMax)
//             currentMax = 0
//         }
//         let temp = prices[i] - min
//         if (temp > currentMax) currentMax = temp
//     }
//     max.push(currentMax)

//     if (max.length <= 1) {
//         if (max.length === 0) return 0
//         else return max[0]
//     } else {
//         max.sort((a, b) => a - b)
//         console.log(max)
//         return max[max.length - 1] + max[max.length - 2]
//     }
// }
// console.log('maxprof', maxProfit([...v3]))
