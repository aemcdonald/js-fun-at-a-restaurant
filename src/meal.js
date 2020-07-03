function nameMenuItem(food) {
  return "Delicious " + food;
  //var menuItemName = nameMenuItem("Pizza");
  //var burritoItem = nameMenuItem("Burrito");
  //var sushiItem = nameMenuItem("Pizza");
  //var tacoItem = nameMenuItem("Taco");
  //var frenchToastItem = nameMenuItem("French Toast") //added new code here
  //these files are instantiated in the test file
}

function createMenuItem(foodName, dollarPrice, itemType) {
  var menuItem = {
    name: foodName,
    price: dollarPrice,
    type: itemType
  };
  return (menuItem);
}

function addIngredients(food, ingredients) {
  if (ingredients.includes(food) == false) {
    ingredients.push(food);
  }
}

function formatPrice(initialPrice) {
  //return "$" + initialPrice.toString(); //concatenation
  return `$${initialPrice}`;      //interpolation
}

function decreasePrice(price) {
 return price * .9;
}

function createRecipe(title, ingredients, menuItemtype) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemtype
  };
  return recipe;

}









module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
