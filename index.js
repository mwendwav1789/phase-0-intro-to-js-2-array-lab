// Initial array of cats
let cats = ["Milo", "Otis", "Garfield"];

// Destructive Functions

// Function to destructively append a cat to the end of the array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Function to destructively prepend a cat to the beginning of the array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Function to destructively remove the last cat from the array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Function to destructively remove the first cat from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-Destructive Functions

// Function to append a cat to the array and return a new array (without modifying the original array)
function appendCat(name) {
  return [...cats, name]; // Spread the cats array and add a new cat at the end
}

// Function to prepend a cat to the array and return a new array (without modifying the original array)
function prependCat(name) {
  return [name, ...cats]; // Spread the cats array and add a new cat at the beginning
}

// Function to remove the last cat from the array and return a new array (without modifying the original array)
function removeLastCat() {
  return cats.slice(0, -1); // Create a new array by slicing off the last element
}

// Function to remove the first cat from the array and return a new array (without modifying the original array)
function removeFirstCat() {
  return cats.slice(1); // Create a new array by slicing off the first element
}

// Export the functions if needed for testing or other modules
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat,
};
