let cat = {
    name: "Fofinha",
    age: 5,
    eyeColor: "green",
    foods:{
        favorite: "salmon",
        leastFavorite: "oatmeal"
    },
    meow(){
        console.log("meooow")
    }, //a function inside an object is called a method and it does not need the keyword function in front
    bark(){
        console.log("woof")
    }
}
console.log(cat.name, cat.age)
console.log(cat.foods.favorite)
cat.meow()
//bark() this will not be executed because we are not referencing the object of the method