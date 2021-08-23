let user1 = {
  id: 1,
  name: "Tony",
}
let user2 = {
  id: 2,
  name: "Sally",
}
let res1 = {
  id: 1,
  name: "Spicy Thai",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: true,
  daysOpen: "mon,tues,wed,thur,fri,sat,sun",
  likes: 1000,
  dishes: [
    { name: "Pad Thai", price: 10.25, ingredients: ["noddles", "peppers"] },
    { name: "Drunken Noodle", price: 9.25, ingredients: ["noddles", "chicken"] },
  ],
  reviews: [
    { userId: 1, rating: 5 },
    { userId: 2, rating: 3 },
  ],
}
let res2 = {
  id: 2,
  name: "Albertos",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: false,
  daysOpen: "mon,tues,wed,thur,fri,sat",
  likes: 500,
  dishes: [
    { name: "Tacos", price: 8.25, ingredients: ["tortilla", "carne"] },
    { name: "Quesidalla", price: 9.25, ingredients: ["tortilla", "cheese"] },
  ],
  reviews: [
    { userId: 1, rating: 2 },
    { userId: 2, rating: 4 },
  ],
}
let res3 = {
  id: 3,
  name: "Jimmy Johns",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: true,
  daysOpen: "mon,tues,wed,thur,fri,sat",
  likes: 700,
  dishes: [
    { name: "BLT", price: 7.25, ingredients: ["Bacon", "Lettuce", "Tamato"] },
    { name: "J.J. Gargantuan", price: 9.25, ingredients: ["Salami", "Capicola", "Turkey", "Roast beef", "Ham", "cheese"] },
  ],
  reviews: [
    { userId: 1, rating: 9 },
    { userId: 2, rating: 10 },
  ],
}
let res4 = {
  id: 4,
  name: "Pizza Hut",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: true,
  daysOpen: "mon,tues,wed,thur,fri,sat",
  likes: 10000,
  dishes: [
    { name: "Pepperoni", price: 7.25, ingredients: ["Cheese", "Marinara Sauce", "Pepperoni"] },
    { name: "Cheese", price: 9.25, ingredients: ["Cheese", "Marinara Sauce"] },
  ],
  reviews: [
    { userId: 1, rating: 9 },
    { userId: 2, rating: 10 },
  ],
}

//Creating arrays and pushing the data
const restaurantArr = []
restaurantArr.push(res1, res2, res3)

const userArr = []
userArr.push(user1, user2)


// access user1 name through user1
let findUserName = (user) => {
  return user.name
}
console.log(findUserName(userArr[0]))

// access user1 name through res2 (user1 data is in reviews)
// this function matches the userId, matches it to the id of the userid in the restaurant array and returns the name of the match

let findUserReview = (userId) => {
  if(userId == restaurantArr[0].reviews[0].userId) {
    return userArr[0].name
  }
}
console.log(findUserReview(1))


// access res1 reviews
//selecting the first item in the restaurant array and printing the reviews from that item
console.log(restaurantArr[0].reviews)

// what does this output res1[:dishes]
// this returns the array of dish objects 
console.log(restaurantArr[0].dishes)

// print out just the name of res1 dishes (each loop)
//
restaurantArr[0].dishes.forEach((dish) => {
  console.log(dish.name)
})

//I used a nested forEach loop to loop over each restaurant and then loop over and print each dish name to get the dish names from all the resturants in the array
restaurantArr.forEach((restaurant) => {
  restaurant.dishes.forEach((dish) => {
    console.log(dish.name)
  })
})

// print out just the name of res1 dishes along with ingredients 
// this nested each loop prints the name of the dish and then ingredents for all of the dishes in the array of dishes. 
// I forEach the ingredients inside of each dish because dishes is an array with the array of ingredients inside of it. 

restaurantArr[0].dishes.forEach((dish) => {
  console.log(dish.name)
  dish.ingredients.forEach((ingredient) => {
    console.log(ingredient)
  })
})

// create a function that takes a user and return a string with the users name and id
// because my users are in the array I used the index of the 1st user in my userArr to print the name and id
// this funciton would still work if I passed in user1 instead of the userArr[0] because I put user1 into my array but user1 still exists outside of the array
let printUserInfo = (user) => {
  return `${user.name} has an id of ${user.id}`
}

console.log(printUserInfo(userArr[0]))

// create a method that takes a res and returns the menu of that res
// this function takes in a restaurant(either from the array of just resurant variable name) and prints me a message along with the name, price and ingredients for each dish
let printMenu = (restaurant) => {
  console.log("Here is your menu:")
  restaurant.dishes.forEach((dish) => {
    console.log(` ${dish.name}, $${dish.price}, ${dish.ingredients}`)
  })
}

printMenu(res3)

// create that takes a res and returns average review
// takes in a restaurant and adds the ratings together and divids them to get an average
let averageReview = (restaurant) => {
  let averageRev = (restaurant.reviews[0].rating + restaurant.reviews[1].rating) / 2
  console.log(`The reveiw average is ${averageRev}`)
}
averageReview(res1)


// create an array of restaurants and do CRUD actions
// mapped a new array with only the info of the restaurants that are open on sunday. Still working on how to remove the restaurant if it does not meet the if statements conditions
let openSunday = restaurantArr.map((restaurant) => {
  if(restaurant.daysOpen == "mon,tues,wed,thur,fri,sat,sun") {
    console.log("Here is a list of the places open on Sunday")
    return restaurant
  }else{
    //Remove restaurant from the array
  }

})

console.log(openSunday)


// a simple that takes a restaurants and adds to your array

let addRes = (res) => {
  restaurantArr.push(res)
}

addRes(res4)

console.log(restaurantArr)

//      a simple that takes restaurants and updates that to your array

// loop through your restaurants and return those with likes > 500 (select/filter)