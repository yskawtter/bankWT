// const data1 = [[3, 5, 2, 17, 7], [4, 1, 15, 8, 3]]
// const data2 = [[9, 16, 6, 8, 3], [10, 5, 6, 1, 4]]

// function checkDogs(data) {
//     // const teste = data.flatMap(x => x)
//     const dogJulia = data[0]
//     const dogKate = data[1]

//     const dogJuliaCopy = [...dogJulia]
//     dogJuliaCopy.shift()
//     dogJuliaCopy.pop()
//     dogJuliaCopy.pop()
//     console.log(dogJuliaCopy)
//     const dogsReal = dogJuliaCopy.concat(dogKate)
//     const dogPrint = dogsReal.map((dog, i) => dog <= 3 ? `Dog number ${i + 1} is puppy` : `Dog number ${i + 1} is adult`)
//     console.log(dogsReal)
//     console.log(dogPrint)
// }
// checkDogs(data2)

// const data1 = [5, 2, 4, 1, 15, 8, 3]
// const data2 = [16, 6, 10, 5, 6, 1, 4]

// function calcAverageHumanAge(age) {
//     const ageDogToHuman = age.map(a => a <= 2 ? a * 2 : 16 + a * 2)
//     console.log(ageDogToHuman)

//     const ageThan18 = ageDogToHuman.filter(age => age >= 18)
//     console.log(ageThan18)

//     const calculateAverage = ageThan18.reduce((acc, cur) => ((acc + cur)), 0) / ageThan18.length
//     console.log(calculateAverage)
// }
// calcAverageHumanAge(data1)

// const data1 = [5, 2, 4, 1, 15, 8, 3]
// const data2 = [16, 6, 10, 5, 6, 1, 4]

// function calcAverageHumanAge(age) {
//     const ageCalculate = age.map(a => a <= 2 ? a * 2 : 16 + a * 2)
//     .filter(a => a >= 18)
//     .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0)
//     console.log(ageCalculate)
// }
// calcAverageHumanAge(data1)

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
  ];

  //1
dogs.flatMap(dog => dog.recommendedFood = +(dog.weight ** 0.75 * 28).toFixed(2))

//2 
const findSarah = dogs.flatMap(dog => {
    const dogsOwner = dog.owners
    dogsOwner.flatMap(own => {own === 'Sarah' ? console.log(dog) : 'l'})
})
console.log(findSarah)

//3
const ownersEatTooMuch = dogs.flatMap(dog => dog).filter(dog => dog.curFood > dog.recommendedFood)
console.log(ownersEatTooMuch)
const ownersEatTooLittle = dogs.flatMap(dog => dog).filter(dog => dog.curFood < dog.recommendedFood)
console.log(ownersEatTooLittle)

//4
console.log(`${ownersEatTooLittle.flatMap(own => own.owners).join(' and ')} dog's little eat`)
console.log(`${ownersEatTooMuch.flatMap(own => own.owners).join(' and ')} dog's much eat`)

//5 
// const eatOkay = dogs.flatMap(dog => dog.curFood > (dog.recommendedFood * .90) && dog.curFood < (dog.recommendedFood * 1.10))
const eatItsOkay = dog => dog.curFood > (dog.recommendedFood * .90) && dog.curFood < (dog.recommendedFood * 1.10)
console.log(eatItsOkay)

//7
console.log(dogs.filter(eatItsOkay))

//8
const dogsCopy = dogs.slice().sort((a, b) => {
    return b.recommendedFood - a.recommendedFood
})
console.log(dogsCopy)