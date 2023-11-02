const foodData = require('./food.json');


// 1. List all the food items
function listAllFoodItems() {
  return foodData.map(food => food.foodname);
}

// 2. List all the food items with category "Vegetables"
function listVegetables() {
  return foodData.filter(food => food.category === 'Vegetable');
}

// 3. List all the food items with category "Fruit"
function listFruits() {
  return foodData.filter(food => food.category === 'Fruit');
}

// 4. List all the food items with category "Protein"
function listProteins() {
  return foodData.filter(food => food.category === 'Protein');
}

// 5. List all the food items with category "Nuts"
function listNuts() {
  return foodData.filter(food => food.category === 'Nuts');
}

// 6. List all the food items with category "Grain"
function listGrains() {
  return foodData.filter(food => food.category === 'Grain');
}

// 7. List all the food items with category "Dairy"
function listDairy() {
  return foodData.filter(food => food.category === 'Dairy');
}

// 8. List all the food items with calorie above 100
function listCalorieAbove100() {
  return foodData.filter(food => food.calorie > 100);
}

// 9. List all the food items with calorie below 100
function listCalorieBelow100() {
  return foodData.filter(food => food.calorie < 100);
}

// 10. List all the food items with highest protein content to lowest
function listHighToLowProteins() {
  return foodData.slice().sort((a, b) => b.protiens - a.protiens);
}

// 11. List all the food items with lowest carb content to highest
function listLowToHighCarbs() {
  return foodData.slice().sort((a, b) => a.cab - b.cab);
}

// Testing the functions
console.log("All Food Items:", listAllFoodItems());
console.log("Vegetables:", listVegetables());
console.log("Fruits:", listFruits());
console.log("Proteins:", listProteins());
console.log("Nuts:", listNuts());
console.log("Grains:", listGrains());
console.log("Dairy:", listDairy());
console.log("Calorie Above 100:", listCalorieAbove100());
console.log("Calorie Below 100:", listCalorieBelow100());
console.log("High to Low Proteins:", listHighToLowProteins());
console.log("Low to High Carbs:", listLowToHighCarbs());
