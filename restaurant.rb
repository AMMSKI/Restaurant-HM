user1 = {
  id: 1,
  name: "Tony",
}
user2 = {
  id: 2,
  name: "Sally",
}
res1 = {
  id: 1,
  name: "Spicy Thai",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: true,
  days_open: "mon,tues,wed,thur,fri,sat,sun",
  likes: 1000,
  dishes: [
    { name: "Pad Thai", price: 10.25, ingredients: ["noddles", "peppers"] },
    { name: "Drunken Noodle", price: 9.25, ingredients: ["noddles", "chicken"] },
  ],
  reviews: [
    { user_id: 1, rating: 5 },
    { user_id: 2, rating: 3 },
  ],
}
res2 = {
  id: 2,
  name: "Albertos",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: false,
  days_open: "mon,tues,wed,thur,fri,sat",
  likes: 500,
  dishes: [
    { name: "Tacos", price: 8.25, ingredients: ["tortilla", "carne"] },
    { name: "Quesidalla", price: 9.25, ingredients: ["tortilla", "cheese"] },
  ],
  reviews: [
    { user_id: 1, rating: 2 },
    { user_id: 2, rating: 4 },
  ],
}
res3 = {
  id: 2,
  name: "Jimmy Johns",
  location: {
    city: "SLC",
    state: "UT",
  },
  delivery: true,
  days_open: "mon,tues,wed,thur,fri,sat",
  likes: 700,
  dishes: [
    { name: "BLT", price: 7.25, ingredients: ["Bacon", "Lettuce", "Tamato"] },
    { name: "J.J. Gargantuan", price: 9.25, ingredients: ["Salami", "Capicola", "Turkey", "Roast beef", "Ham" "cheese"] },
  ],
  reviews: [
    { user_id: 1, rating: 9 },
    { user_id: 2, rating: 10 },
  ],
}

#--------------------------
#putting both data categories into arrays 

@users_arr = []
@users_arr.push(user1, user2)


@restaurants_arr = []
@restaurants_arr.push(res1, res2)

# access user1 name through user1.. user1 is now a hash in my users_arr and has an index of 0 
puts @users_arr[0][:name]

#access user1 name through looping the users_arr and checking for an id of 1 then puts the name for user1
@users_arr.each do |user|
  if user[:id] == 1
    puts user[:name]
  end
end

# access user1 name through res2.. check user_id from the reviews and matches it to the id in users_arr then puts the users name
def access_from_review(id_number)
  if @restaurants_arr[1][:reviews][0][:user_id] == id_number && @users_arr[0][:id] == 1
    puts @users_arr[0][:name]
  end
end

access_from_review(1)


# this prints the reviews data for user 1 at both restaurants by accessing the array of restaurants 
# then the individual restaurant in the array, then the variable: reviews which holds and array, then accessing the index of that array
#doing this for both restaurants with the .each mehtod
@restaurants_arr.each do |restaurant|
  if restaurant[:reviews][0][:user_id] == 1
    puts restaurant[:reviews][0]
  end
end

# what does this output res1[:dishes]
# puts out the values of both dishes objects and all of the key,value pairs
puts @restaurants_arr[1][:dishes]


# print out just the name of res1 dishes (each loop)
# running each on the dishes and just printing the value for the name key
@restaurants_arr[0][:dishes].each do |dish|
  puts dish[:name]
end

# print out just the name of res1 dishes along with ingredients (nested each loop)
# I don't think there is a need for a nested each loop with the way my data is structured into restaurants_arr *** 
@restaurants_arr[0][:dishes].each do |dish|
  puts dish[:name]
  puts dish[:ingredients]
end

# create a function that takes a user and return a string with the users name and id
#This was pretty fun.. creating a funciton that takes an object from and array using its index then returns values from the keys that I interpellated #{}
def user_discrip(user)
  puts "Your user id is #{user[:id]} and your user name is #{user[:name]}"
end

user_discrip(@users_arr[0])
user_discrip(@users_arr[1])

# create a method that takes a res and returns the menu of that res
#
#The commented out code below loops the whole @restaurants_arr and showes me both restaurants menus .. not what I wanted to do but could be helpful code later
def print_menu(res)
  puts "#{res[:name]}"
  # @restaurants_arr.each do |res|
    res[:dishes].each do |dish|
      puts "Here is your menu:     #{dish[:name]} $#{dish[:price]} "
    end
  # end
end

print_menu(@restaurants_arr[0])
print_menu(@restaurants_arr[1])

# create that takes a res and returns average review
# The print_rev function returns me the revies in a new array and the review average takes the review number rating and runs the calculation to get an average.
#then prints a message to the console 

def print_rev(res)
    rev_arr = []
    res[:reviews].each do |review|
      rev_arr.push(review)
    end
  return rev_arr
end

def review_average(res)
  total_rev = print_rev(res)[0][:rating] + print_rev(res)[1][:rating]
  review_ave = total_rev / 2
  "#{res[:name]}'s review average is: #{review_ave}"
end

puts review_average(@restaurants_arr[0])
puts review_average(@restaurants_arr[1])

# a simple that takes a restaurants and adds to your array
def add_rest(res)
  @restaurants_arr.push(res)
end

add_rest(res3)

# create an array of restaurants and do CRUD actions
@restaurants_arr[2][:days_open] = "Monday, Tuesday, Wednesday, Thursday, Friday, Closed Saturday (for flag day)"

puts @restaurants_arr[2][:days_open]


# loop through your restaurants and return those with likes > 500 (select/filter)
# the .each just returns the names of the restaurants that have over 500 likes
@restaurants_arr.each do |res|
  if res[:likes] > 500 
    puts res[:name]
  end
end

# this .select returns the whole restaurant hash that has over 500 likes and creates a new array 'high_likes' with only the restaurants with high likes
res
high_likes = @restaurants_arr.select do |res|
  res[:likes] > 500 
end

p high_likes

