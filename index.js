/*
QUESTION 1:
Mutating array methods modify the original array, while non-mutating array methods do not modify the original array but instead return a new array.

Mutating array methods:
- push() - adds one or more elements to the end of an array.
- pop() - removes the last element from an array.
- shift() - removes the first element from an array.
- unshift() - adds one or more elements to the beginning of an array.
- splice() - adds or removes elements from an array at a specified index.

Non-mutating array methods:
- concat() - joins two or more arrays and returns a new array.
- slice() - returns a new array that contains a portion of the original array.
- filter() - creates a new array with all elements that pass a test implemented by the provided function.
- map() - creates a new array with the results of calling a provided function on every element in the calling array.
- reduce() - applies a function against an accumulator and each element in the array to reduce it to a single value. It returns a new value and does not modify the original array.
*/

// QUESTION 2:
let arr = ['C#', 'Javascript', 'Ruby', 'PHP', 'Python']

// Add 'Kotlin' to the end of the array
arr.push('Kotlin')

// Add 'Java' after 'Ruby'
arr.splice(3, 0, 'Java')

// Remove the first item in the array
arr.shift()

// Add 'Scala' and 'Swift' to the beginning of the array
arr.unshift('Scala', 'Swift')

// Replace 'PHP' with 'Go' and 'Rust'
arr.splice(arr.indexOf('PHP'), 1, 'Go', 'Rust')

console.log(arr)
// Output: ['Scala', 'Swift', 'C#', 'Javascript', 'Ruby', 'Java', 'Go', 'Rust', 'Python', 'Kotlin']

// QUESTION 3:
// What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana']
function changeFruit(fruit) {
  fruit[2] = 'orange'
  return fruit
}
console.log(changeFruit(fruit))
// The value of fruit after calling the changeFruit() function will be ['apple', 'mango', 'orange'].

// QUESTION 4:
function max(arr) {
  let maxValue = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }
  return maxValue
}
console.log(max([4, 5, 12, -2])) // Output: 12

// QUESTION 5:
const valTimesIndex = (arr) => arr.map((item, idx) => item * idx)
console.log(valTimesIndex([1, 2, 3])) //Output: [ 0, 2, 6 ]
console.log(valTimesIndex([5, 10, 15])) // Output: [0, 10, 30]
