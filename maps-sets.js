// Maps and Sets
// Quick Question #1
new Set([1,1,2,2,3,4]) // returns => { 1,2,3,4 }
// Quick Question #2
[...new Set("referee")].join("") // return => "ref"
// Quick Questions #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true); // => 0: [1, 2, 3] = true
m.set([1,2,3], false); // => 1: [1, 2, 3] = false

// hasDuplicate
const hasDuplicate = arr => new Set(arr).size !== arr.length;

// vowelCount
const vowelCount = str => {
    const vowels = 'aeiou';
    const map = new Map();
    Array.from(str.toLowerCase())
        .forEach(char => {
            if(vowels.indexOf(char) !== -1) {
                if(map.get(char) === undefined){
                    map.set(char, 1);
                } else {
                    map.set(char, map.get(char) + 1);
                }
            }
        });
    return map;
}
/************************************************************ */