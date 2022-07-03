const fruits = ["Banana", "Orange", "Apple", "Mango"]

//join()

console.log(fruits.join()) // returns Banana,Orange,Apple,Mango
console.log(fruits.join(' and ')) // returns Banana and Orange and Apple and Mango
console.log(fruits.join('')) // returns BananaOrangeAppleMango

const fruits2 = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits2.fill("Kiwi")) // returns [ 'Kiwi', 'Kiwi', 'Kiwi', 'Kiwi' ]

const numbers = [4, 9, 16, 25]
const newArr = numbers.map(Math.sqrt) // returns 2, 3, 4, 5

const fruits3 = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits3.pop())   // removes last item and returns it
console.log(fruits3)

const fruits4 = ["Banana", "Orange", "Apple", "Mango"]
fruits4.push("Kiwi")   // Adds "Kiwi"

const fruits5 = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits5.shift()) //removes first item and returns it. returns Banana
console.log(fruits5) // returns [ 'Orange', 'Apple', 'Mango' ]

const fruits6 = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
const citrus = fruits6.slice(1, 3) // returns Orange, Lemon
console.log(citrus)

const animals = ["cat", "dog", "lion", "tiger"]

// At position 2, add 2 elements:
console.log(animals.splice(2, 1, "mouse")) // returns lion
console.log(animals) // returns [ 'cat', 'dog', 'mouse', 'tiger' ]