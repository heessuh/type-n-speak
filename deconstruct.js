let deconstruct = function (number) {
    return {
        integral: Math.trunc(number),
        fractional: Number(number.toString().split('.')[1] || 0)
    }
}
//using arrow function with only one parameter
/* let deconstruct = number => {
    return {
        integral: Math.trunc(number),
        fractional: Number(number.toString().split('.')[1] || 0)
    }
} */

console.log(deconstruct(23.67))