
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },

    
]

//Example function
// function findMexicanFood(){
//     let results = dishes.filter(function(el){
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

//     return results;
// }

// let mexicanFood = findMexicanFood();
// console.log('Mexican Foods: ', mexicanFood)



//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

// function problemOne(){
//     // result creates a new array with .filter
//     let results = dishes.filter(function(el){
//         if(el.cuisine === "Vegetarian"){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });


//     return results;
// }
// // getting the returned result from newly created array
// let vegetarianFood = problemOne();
// console.log('Vegetarian Foods', vegetarianFood)

//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
// function italianServingSize5(){

//     let results = dishes.filter( function(el){
//         if(el.cuisine === "Italian" && el.servings >= 5){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
//     return results;
// }

// let itlianFoodServing5 = italianServingSize5();
// console.log(itlianFoodServing5)
//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter
// function idMatchingServings(){

//     let results = dishes.filter(function(el){
//         if(el.id === el.servings){
//             return true;
//         }
//         else{
//             return false
//         }
//     });
//     return results;
// }

// let id2servings = idMatchingServings();
// console.log(id2servings);
//4. Create a function that will return only dishes whose serving count is even.
//Filter
// function serveringEvenNum(){

//     let results = dishes.filter(function(el){
//         if(el.servings % 2 == 0){
//             return true;
//         }
//         else{
//             return false;
//         }
//     })
//     return results
// }

// let evenServings = serveringEvenNum();
// console.log(evenServings)
//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter
// function ingreTomatoChesse(){

//     let results = dishes.filter(function(el){
//         if(el.ingredients[0] == 'tomato' && el.ingredients[1] == 'cheese'){
//             return true;
//         }
//         else{
//             return false;
//         }
//     });
//     return results
// }

// let tomatoChesse = ingreTomatoChesse();
// console.log(tomatoChesse)
//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Pizza', 'Spaghetti', ...]
//Map
function nameOfCuisineTypes(){
    
    let results = dishes.map(function(el){
        return el.name
    })
    return results;
}

console.log(nameOfCuisineTypes());
// BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array
function noDups(){

    let results = dishes.filter(function(el){
        if(el)
    })
}
//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter


//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

