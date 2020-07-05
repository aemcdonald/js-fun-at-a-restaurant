
function createRestaurant(name) {
  var object1 = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return object1
}

function addMenuItem(restaurant, item) {
  if (item.type === "breakfast") {
    if (restaurant.menus.breakfast.includes(item) == false) {
    restaurant.menus.breakfast.push(item)
    }
  } else if (item.type === "lunch") {
      if (restaurant.menus.lunch.includes(item) == false) {
      restaurant.menus.lunch.push(item)
      }
  } else if(item.type === "dinner") {
      if (restaurant.menus.dinner.includes(item) == false) {
        restaurant.menus.dinner.push(item)
      }
  }
}
//return statement not necessary because test is not asking for a variable

//What am I doing: adding a string to an array within my object
//I want to add bbq pizza object to the array at position 0 in my lunch key
//in my menus object that's in my pizza restaurant

//if (!restaurant.menus.breakfast.includes(item)) more concise way of writing
//reads: if restaurant.menus.breakfast.includes(item) does not include

function removeMenuItem(restaurant, menuItem, menuType) {
  if (menuType === "breakfast") {
    restaurant.menus.breakfast.pop();
    return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
  } else if (menuType === "dinner") {
    restaurant.menus.dinner.pop();
    return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
  } else if (menuItem.includes(menuItem) == true) {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`;
  } else{
    
  }
};
  //restaurant.menus.dinner.pop();
  //restaurant.menus.breakfast.pop(); //works for "bacon & eggs pizza", "breakfast"

  //for (var i = 0; i < restaurant.length, i++) {}
  //splice()
  //return `No one is eating our Veggie Pizza - it has been removed from the dinner menu!`




module.exports = {
   createRestaurant,
   addMenuItem,
   removeMenuItem
}
