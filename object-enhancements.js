// Same keys and values ES2015
/*
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  } 
  */
//  Same keys and values ES2015
const createInstructor = (firstName, lastName) => ({ firstName, lastName});
/************************************************************************ */
// Computed Property Names
/*
var favoriteNumber = 42;

var instructor = {
    firstName: "Colt"
}
*/
// Computed Property Names ES2015
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
/************************************************************************ */
// Object Methods
/*
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/
// Object Methods ES2015
const instructor = {
    firstName: 'Colt',
    sayHi() { return 'Hi!'; },
    sayBye() { return this.firstName + " says bye!"; }
}
/************************************************************************ */
// Animal function
const createAnimal = (species, verb, noise) => ({ 
    species,
    [verb]() { 
        return `${species} says ${noise}`
    } 
})
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"