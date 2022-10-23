// Rest
const filterOutOdds = (...args) => args.filter( num => num % 2 === 0 );

// FindMin
const findMin = (...args) => Math.min(...args)

// mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...args].reduce((all, next) => [...all, next * 2],[...arr])

// Slice and Dice!

/* removes a random element in the items array
and returns a new array without that item. */
const removeRandom = items => {
    let random = Math.floor(Math.random() * items.length)
    return items.filter((num, idx) => idx !== random )
}

/* Returns a new array with every item in array1 and array2. */
const extend = (array1, array2) => [...array1, ...array2];

/* Returns a new object with all the keys and values
from obj and a new key/value pair */
const addKeyVal = (obj, key, value) => ({...obj, [key]: value});

/* Returns a new object with a key removed. */
const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key];
    return newObj;
}

/** Combines two objects and returns a new object. */
const combine = (obj1, obj2) => ({...obj1, ...obj2})

/** Returns a new object with a modified key and value. */
const update = (obj, key, val) => ({ ...obj, [key]: val })