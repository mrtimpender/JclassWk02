//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.
//
var cities = ["Catonsville", "College Park" , "Beacon Falls", "Baltimore", "Denver"];

console.log("Question 1");
console.log("var cities = ["Catonsville", "College Park" , "Beacon Falls", "Baltimore", "Denver"];")

// 2. Add an additional item to the beginning of your Array.
console.log("Question 2");
console.log(cities.unshift("Space");)

// 3. Remove the second and third items.
console.log("Question 3");
console.log(cities.splice(1,2);)

// 4. Add two new items after the second item.
console.log("Question 4");
console.log(cities.splice(2, 0, "Golden", "Fort Collins");)

// 5. Write 'The current length of the array is....' using the .length method
console.log("Question 5");
console.log(cities.length);

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'
console.log("Question 6");
console.log(things.splice(2,1,"keyboard");)


// 7. Combine all of the elements of the array into a string.
console.log("Question 7");
console.log(things[0]+things[1]+things[2]+things[3]+things[4]);

// 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, on at the beginning and one at the end.
console.log("Question 8");
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];
var lastItem = [things.pop()];
lastItem.unshift("moustache");
lastItem.push("beard");

// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.
console.log("Question 9");
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];
var itemLast = [things[4], things[3], things[2], things[1], things[0]];

// OR

var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];
var itemLast = things.reverse();
console.log(itemLast);



// 10. Remove the first item of itemLast.
console.log("Question 10");
itemLast.shift();
console.log(itemLast);


// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)
console.log("Question 11");
var itemLast = ['mug', 'book', 'mouse', 'plant', 'sunglasses']
itemLast.splice(0,4);
console.log(itemLast);

// OR

var itemLast = ['mug', 'book', 'mouse', 'plant', 'sunglasses']
itemLast.splice(0, itemLast.length);
console.log(itemLast);


// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
console.log("Question 12");

var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

var numberPets = [[firstArray], [secondArray]];
console.log(numberPets);

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
console.log("Question 13");
people.push('Tim', 'George');


// 14. Remove everybody except 'Andrea' and 'Ted'
console.log("Question 14");
people.splice(0,1);
people.splice(1,1);
people.splice(2,3);
console.log(people);

// 15. Add a new person to the beginning of the Array
console.log("Question 15");
people.unshift('Carl');

// 16. Arrange the items alphabetically. Store this Array as orderedPeople
console.log("Question 16");
var orderedPeople = people.sort();


// 17. Create an array of arrays with the following three arrays:
console.log("Question 17");

var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

var array4 = [array1, array2, array3];
console.log(array4);

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

// 18. Remove "Sparky" and "White" from the above array of arrays.
console.log("Question Bonus 1");
array1.splice(3,1);
array3.splice(0,1);
consle.log(array4);

// BONUS 1: Try to arrange the following items from smallest to largest:
console.log("Question 2");
var sortingNumbers = [2, 5, 98, 55, 77, 300];
// Explain why it doesn't sort as expected.
sortingNumbers.sort();
console.log(sortingNumbers);

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
console.log("Question Bonus 2");
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

var array2 = [array1[4], array1[6], array1[0], array1[3], array1[1]];
console.log(array2);

//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
