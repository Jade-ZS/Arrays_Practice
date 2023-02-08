var characters = ['Micky', 'Minnie', 'Bruto', 'Donald'];
var numbers = [1, 2, 0, 4];
var isFemale = true;
var isSingle = false;
var isRich = false;
var isHungry = true;
var Booleans = [isFemale, isSingle, isRich, isHungry]

// Remove the last element ('Donald') from Array characters.
// Array characters will become ['Micky', 'Minnie', 'Bruto']
characters.pop();
// Remove one element starting from index 2 and insert integer 3 to Array numbers.
// i.e. remove integer 0 from the array, and add 3 to the array. 
// Array numbers array will be [1, 2, 3, 4]
numbers.splice(2, 1, 3);
// Turn Array Booleans into a string and store the string in a variable called BooleanString
// The value of BooleanString is 'true,false,false,true'
var BooleanString = Booleans.join();

// demonstrate understanding of index positions in the file
characters[2] // This is the third element in Array charactesr, the index of which is 2 and the value of which is Bruto.
numbers[0] // This is the first element in Array numbers, the index of which is 0 and the value of which is 1. 
Booleans[1] // This is the second element in Array Booleans, the index of which is 1 and the value of which is false. 
