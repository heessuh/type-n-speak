let myPets = [
    {name: "Mary", species: "dog", age: 2},
    {name: "Fofinha", species: "cat", age: 4},
    {name: "Diana", species: "cat", age: 1},
    {name: "Jake", species: "dog", age: 12}
  ]
  
  function onlyDogs(x) {
    return x.species == "dog"
  }
  
  function onlyBabies (x) {
    return x.age < 3
  }
  
  function nameOnly (x) {
    return x.name
  }

  function girlsOnly (x) {
    return x.name==="Mary" || x.name==="Diana" || x.name==="Fofinha"
  }
  
  let babyDogNames = myPets.filter(onlyDogs).filter(onlyBabies).map(nameOnly)

  let girls = myPets.filter(girlsOnly).map(nameOnly)
  
  console.log (babyDogNames)
  console.log(girls)
  
  console.log(myPets[1].age)//ouputs 2