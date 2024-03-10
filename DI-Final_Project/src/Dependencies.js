import {
    addRecipeScreen
} from './Screens/addRecipeScreen.js'
export const addrecipescreen = new addRecipeScreen('add recipe');

import {
    browseScreen
} from './Screens/browseScreen.js'
export const browsescreen = new browseScreen('browse');



import {
    homeScreen
} from './Screens/homeScreen.js'
export const homescreen = new homeScreen('home');
import {
    loginScreen
} from './Screens/loginScreen.js'
export const loginscreen = new loginScreen('login');
import {
    mainScreen
} from './Screens/mainScreen.js'
export const mainscreen = new mainScreen('main');
import {
    registerScreen
} from './Screens/registerScreen.js'
export const registerscreen = new registerScreen('register');
import {
    shoppingListScreen
} from './Screens/shoppingListScreen.js'
export const shoppinglistscreen = new shoppingListScreen('shopping list');
import {
    favoritesScreen
} from './Screens/favoritesScreen.js'
export const favoritesscreen = new favoritesScreen('favorites');
import{
    viewScreen
}from './Screens/viewScreen.js'
export const viewscreen=new viewScreen('view')

import{
    Recipe
 }from './Recipe.js';

export const recipes = [
    ["Spaghetti Carbonara", "ItalianFoodie23", [["Cook pasta", "Boil water and cook spaghetti until al dente."], ["Prepare sauce", "Fry pancetta until crispy, mix with eggs, cheese, and pepper."]], [["Spaghetti", "200g"], ["Pancetta", "100g"], ["Eggs", "2"], ["Parmesan cheese", "50g"], ["Black pepper", "to taste"]], 10, 15, [["meal type", "Main Course"], ["nationality", "Italian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Chicken Alfredo", "ChefJasmine", [["Cook chicken", "Season and grill chicken until fully cooked (about 10 minutes per side)."], ["Make sauce", "Combine cream, butter, and cheese in a saucepan."]], [["Chicken breast", "500g"], ["Heavy cream", "1 cup"], ["Butter", "100g"], ["Parmesan cheese", "100g"], ["Fettuccine pasta", "300g"]], 20, 20, [["meal type", "Main Course"], ["nationality", "Italian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Chocolate Chip Cookies", "BakingQueen87", [["Mix dough", "Combine flour, sugar, butter, and chocolate chips."], ["Bake cookies", "Drop spoonfuls onto baking sheet and bake until golden (about 10-12 minutes)."]], [["Flour", "2 cups"], ["Sugar", "1 cup"], ["Butter", "1/2 cup"], ["Chocolate chips", "1 cup"], ["Vanilla extract", "1 tsp"]], 15, 10, [["meal type", "Dessert"], ["nationality", "American"], ["meal time", "Any"], ["meal utensils", "normal"]]],
    ["Caesar Salad", "FreshEatsDaily", [["Prepare dressing", "Mix olive oil, lemon juice, garlic, anchovies, and Parmesan."], ["Assemble salad", "Toss romaine lettuce with dressing, croutons, and cheese."]], [["Romaine lettuce", "1 head"], ["Olive oil", "1/4 cup"], ["Lemon juice", "2 tbsp"], ["Garlic", "2 cloves"], ["Anchovies", "2 fillets"], ["Parmesan cheese", "1/4 cup"], ["Croutons", "1 cup"]], 15, 0, [["meal type", "Appetizer"], ["nationality", "International"], ["meal time", "Lunch"], ["meal utensils", "normal"]]],
    ["Beef Stir Fry", "StirFryMaster", [["Marinate beef", "Mix beef strips with soy sauce, ginger, and garlic, and marinate for 30 minutes."], ["Stir fry", "Cook beef with vegetables in a hot wok for 10-12 minutes."]], [["Beef sirloin", "500g"], ["Soy sauce", "1/4 cup"], ["Ginger", "1 tbsp"], ["Garlic", "2 cloves"], ["Mixed vegetables", "500g"], ["Cooking oil", "2 tbsp"]], 20, 15, [["meal type", "Main Course"], ["nationality", "Asian"], ["meal time", "Dinner"], ["meal utensils", "chopsticks"]]],
    ["Guacamole", "AvocadoLover", [["Mash avocados", "Combine avocados, lime juice, onions, tomatoes, and cilantro."]], [["Avocados", "3"], ["Lime juice", "2 tbsp"], ["Onion", "1/2"], ["Tomato", "1"], ["Cilantro", "2 tbsp"], ["Salt", "to taste"]], 10, 0, [["meal type", "Appetizer"], ["nationality", "Mexican"], ["meal time", "Any"], ["meal utensils", "normal"]]],
    ["Caprese Salad", "SimpleCuisine", [["Slice ingredients", "Layer sliced tomatoes, mozzarella, and basil leaves."], ["Season", "Drizzle with olive oil, balsamic vinegar, salt, and pepper."]], [["Tomatoes", "3"], ["Fresh mozzarella", "200g"], ["Fresh basil leaves", "1/2 cup"], ["Olive oil", "2 tbsp"], ["Balsamic vinegar", "1 tbsp"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 10, 0, [["meal type", "Appetizer"], ["nationality", "Italian"], ["meal time", "Lunch"], ["meal utensils", "normal"]]],
    ["Tiramisu", "DessertDreamer", [["Prepare coffee mixture", "Mix espresso with rum."], ["Assemble layers", "Layer coffee-soaked ladyfingers with mascarpone mixture."], ["Chill", "Refrigerate before serving."]], [["Ladyfingers", "200g"], ["Espresso", "1 cup"], ["Rum", "2 tbsp"], ["Mascarpone cheese", "250g"], ["Eggs", "2"], ["Sugar", "1/4 cup"], ["Cocoa powder", "for dusting"]], 30, 0, [["meal type", "Dessert"], ["nationality", "Italian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Chicken Tikka Masala", "SpiceMasterChef", [["Marinate chicken", "Mix chicken with yogurt and spices, and marinate for at least 1 hour."], ["Cook chicken", "Grill or bake chicken until cooked through (about 20 minutes)."], ["Prepare sauce", "Simmer tomatoes, cream, and spices until thickened."]], [["Chicken thighs", "600g"], ["Yogurt", "1 cup"], ["Tomatoes", "4"], ["Heavy cream", "1/2 cup"], ["Ginger", "1 tbsp"], ["Garlic", "3 cloves"], ["Garam masala", "2 tsp"], ["Cumin", "1 tsp"], ["Coriander", "1 tsp"], ["Turmeric", "1/2 tsp"], ["Cayenne pepper", "1/4 tsp"]], 25, 25, [["meal type", "Main Course"], ["nationality", "Indian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Margarita Pizza", "PizzaFanatic", [["Prepare dough", "Mix flour, water, yeast, and salt, and let rise."], ["Assemble pizza", "Spread tomato sauce, cheese, and basil on dough."], ["Bake", "Bake in a hot oven until crust is crispy and cheese is melted (about 15 minutes)."]], [["Pizza dough", "300g"], ["Tomato sauce", "1/2 cup"], ["Mozzarella cheese", "200g"], ["Fresh basil leaves", "1/2 cup"], ["Olive oil", "2 tbsp"], ["Salt", "to taste"], ["Yeast", "1 tsp"], ["Sugar", "1 tsp"]], 30, 15, [["meal type", "Main Course"], ["nationality", "Italian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Pad Thai", "ThaiFoodie", [["Soak noodles", "Soak rice noodles in warm water until softened (about 30 minutes)."], ["Stir fry", "Cook shrimp, tofu, and eggs, then add noodles and sauce."]], [["Rice noodles", "200g"], ["Shrimp", "200g"], ["Firm tofu", "150g"], ["Eggs", "2"], ["Bean sprouts", "1 cup"], ["Peanuts", "1/4 cup"], ["Green onions", "1/4 cup"], ["Garlic", "3 cloves"], ["Fish sauce", "2 tbsp"], ["Tamarind paste", "1 tbsp"], ["Palm sugar", "1 tbsp"], ["Lime", "1"], ["Chili flakes", "to taste"]], 30, 20, [["meal type", "Main Course"], ["nationality", "Thai"], ["meal time", "Dinner"], ["meal utensils", "chopsticks"]]],
    ["Margherita Flatbread", "FlatbreadFan", [["Prepare dough", "Mix flour, yeast, water, and salt, and let rise."], ["Assemble flatbread", "Spread tomato sauce, cheese, and basil on dough."], ["Bake", "Bake in a hot oven until crust is crispy and cheese is melted (about 12 minutes)."]], [["Flatbread dough", "300g"], ["Tomato sauce", "1/2 cup"], ["Fresh mozzarella", "200g"], ["Fresh basil leaves", "1/2 cup"], ["Olive oil", "2 tbsp"], ["Salt", "to taste"], ["Yeast", "1 tsp"], ["Sugar", "1 tsp"]], 25, 12, [["meal type", "Main Course"], ["nationality", "Italian"], ["meal time", "Lunch"], ["meal utensils", "normal"]]],
    ["Falafel", "MiddleEasternEats", [["Prepare chickpeas", "Soak chickpeas in water overnight."], ["Blend mixture", "Blend chickpeas with herbs and spices until smooth."], ["Form and fry", "Shape mixture into balls and fry until golden brown."]], [["Dried chickpeas", "1 cup"], ["Onion", "1"], ["Garlic", "2 cloves"], ["Fresh parsley", "1/4 cup"], ["Cumin", "1 tsp"], ["Coriander", "1 tsp"], ["Baking powder", "1/2 tsp"], ["Salt", "to taste"], ["Black pepper", "to taste"], ["Vegetable oil", "for frying"]], 30, 20, [["meal type", "Main Course"], ["nationality", "Middle Eastern"], ["meal time", "Lunch"], ["meal utensils", "finger food"]]],
    ["Tuna Salad Sandwich", "LunchBoxHero", [["Mix salad", "Combine tuna, mayonnaise, celery, and onions in a bowl."], ["Assemble sandwich", "Spread tuna salad between bread slices with lettuce and tomato."]], [["Canned tuna", "200g"], ["Mayonnaise", "1/4 cup"], ["Celery", "1 stalk"], ["Onion", "1/4"], ["Lettuce", "2 leaves"], ["Tomato", "1"], ["Bread slices", "4"]], 10, 0, [["meal type", "Main Course"], ["nationality", "American"], ["meal time", "Lunch"], ["meal utensils", "normal"]]],
    ["Pancakes", "BreakfastKing", [["Mix batter", "Combine flour, milk, eggs, and sugar until smooth."], ["Cook pancakes", "Pour batter onto hot griddle and cook until golden brown."]], [["Flour", "1 cup"], ["Milk", "1 cup"], ["Eggs", "2"], ["Sugar", "2 tbsp"], ["Butter", "2 tbsp"], ["Baking powder", "1 tbsp"], ["Salt", "1/2 tsp"], ["Vanilla extract", "1 tsp"]], 15, 15, [["meal type", "Breakfast"], ["nationality", "American"], ["meal time", "Breakfast"], ["meal utensils", "normal"]]],
    ["Chicken Parmesan", "ItalianClassics", [["Prepare chicken", "Coat chicken breasts in breadcrumbs and fry until golden brown."], ["Top with sauce", "Cover chicken with marinara sauce and mozzarella cheese."], ["Bake", "Bake at 180°C for 20 minutes until cheese is bubbly."]], [["Chicken breasts", "4"], ["Breadcrumbs", "1 cup"], ["Marinara sauce", "2 cups"], ["Mozzarella cheese", "200g"], ["Parmesan cheese", "1/2 cup"], ["Eggs", "2"], ["Flour", "1/2 cup"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 30, 30, [["meal type", "Main Course"], ["nationality", "Italian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Miso Soup", "JapaneseDelight", [["Prepare broth", "Dissolve miso paste in hot water."], ["Add ingredients", "Add tofu, seaweed, and green onions to the broth."], ["Simmer", "Simmer for 5 minutes until heated through."]], [["Miso paste", "3 tbsp"], ["Tofu", "100g"], ["Seaweed", "10g"], ["Green onions", "2"], ["Water", "4 cups"]], 10, 5, [["meal type", "Soup"], ["nationality", "Japanese"], ["meal time", "Lunch"], ["meal utensils", "normal"]]],
    ["Pulled Pork Sandwich", "BBQMaster", [["Season pork", "Rub pork with spices and let marinate for at least 1 hour."], ["Slow cook", "Cook pork in a slow cooker for 8 hours until tender."], ["Shred pork", "Pull pork apart with forks and mix with barbecue sauce."]], [["Pork shoulder", "1.5 kg"], ["Spice rub", "2 tbsp"], ["Barbecue sauce", "1 cup"], ["Hamburger buns", "4"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 30, 480, [["meal type", "Main Course"], ["nationality", "American"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Tom Yum Soup", "ThaiCuisine", [["Prepare broth", "Simmer lemongrass, galangal, and kaffir lime leaves in water."], ["Add ingredients", "Add shrimp, mushrooms, and tomatoes to the broth."], ["Season", "Season with fish sauce, lime juice, and chili paste."]], [["Shrimp", "200g"], ["Mushrooms", "100g"], ["Tomatoes", "2"], ["Lemongrass", "2 stalks"], ["Galangal", "3 slices"], ["Kaffir lime leaves", "4"], ["Fish sauce", "2 tbsp"], ["Lime juice", "3 tbsp"], ["Chili paste", "2 tbsp"], ["Water", "4 cups"]], 15, 15, [["meal type", "Soup"], ["nationality", "Thai"], ["meal time", "Lunch"], ["meal utensils", "normal"]]],
    ["Tomato Basil Bruschetta", "ItalianAntipasti", [["Prepare topping", "Mix chopped tomatoes, garlic, basil, and olive oil."], ["Toast bread", "Toast slices of baguette until crispy."], ["Top bread", "Top toasted bread with tomato mixture and serve."]], [["Tomatoes", "4"], ["Garlic", "2 cloves"], ["Fresh basil", "1/4 cup"], ["Baguette", "1"], ["Olive oil", "2 tbsp"], ["Balsamic vinegar", "1 tbsp"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 15, 10, [["meal type", "Appetizer"], ["nationality", "Italian"], ["meal time", "Any"], ["meal utensils", "normal"]]],
    ["Classic Hamburger", "BurgerEnthusiast", [["Form patties", "Shape ground beef into patties and season with salt and pepper."], ["Grill burgers", "Grill patties until cooked to desired doneness."], ["Assemble burgers", "Place patties on buns with lettuce, tomato, onion, and condiments."]], [["Ground beef", "500g"], ["Hamburger buns", "4"], ["Lettuce", "4 leaves"], ["Tomato", "1"], ["Onion", "1"], ["Ketchup", "2 tbsp"], ["Mustard", "2 tbsp"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 15, [["meal type", "Main Course"], ["nationality", "American"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Chicken Caesar Wrap", "WrapMaster", [["Prepare chicken", "Season and grill chicken until fully cooked."], ["Assemble wrap", "Spread Caesar dressing on tortillas, then add chicken, lettuce, and Parmesan cheese."], ["Wrap", "Roll up tortillas and serve."]], [["Chicken breast", "300g"], ["Flour tortillas", "4"], ["Romaine lettuce", "1"], ["Caesar dressing", "1/2 cup"], ["Parmesan cheese", "1/4 cup"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 15, [["meal type", "Main Course"], ["nationality", "American"], ["meal time", "Lunch"], ["meal utensils", "normal"]]],
    ["French Toast", "BrunchEnthusiast", [["Prepare batter", "Whisk together eggs, milk, sugar, and cinnamon."], ["Dip bread", "Soak slices of bread in the egg mixture."], ["Cook", "Cook bread slices on a hot griddle until golden brown."]], [["Bread slices", "8"], ["Eggs", "4"], ["Milk", "1 cup"], ["Sugar", "2 tbsp"], ["Cinnamon", "1 tsp"], ["Butter", "2 tbsp"], ["Maple syrup", "for serving"]], 15, 10, [["meal type", "Breakfast"], ["nationality", "American"], ["meal time", "Breakfast"], ["meal utensils", "normal"]]],
    ["Chicken Noodle Soup", "ComfortFoodie", [["Simmer chicken", "Simmer chicken with vegetables and herbs for 1 hour to make broth."], ["Add noodles", "Cook noodles in broth until tender."]], [["Chicken", "1 whole"], ["Carrots", "2"], ["Celery stalks", "2"], ["Onion", "1"], ["Garlic", "3 cloves"], ["Chicken broth", "8 cups"], ["Egg noodles", "200g"], ["Thyme", "1 tsp"], ["Bay leaves", "2"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 30, 60, [["meal type", "Soup"], ["nationality", "Comfort"], ["meal time", "Lunch"], ["meal utensils", "normal"]]],
    ["Lasagna", "ItalianComfort", [["Prepare meat sauce", "Cook ground beef with onions, garlic, and tomato sauce."], ["Layer lasagna", "Alternate layers of pasta, meat sauce, and cheese in a baking dish."], ["Bake", "Bake at 180°C for 45 minutes until bubbly."]], [["Lasagna noodles", "250g"], ["Ground beef", "500g"], ["Onion", "1"], ["Garlic", "3 cloves"], ["Tomato sauce", "2 cups"], ["Mozzarella cheese", "300g"], ["Ricotta cheese", "1 cup"], ["Parmesan cheese", "1/2 cup"], ["Egg", "1"], ["Basil", "1/4 cup"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 30, 45, [["meal type", "Main Course"], ["nationality", "Italian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["French Onion Soup", "FrenchCuisineLover", [["Caramelize onions", "Cook onions in butter over low heat for 45 minutes until golden brown."], ["Make broth", "Add beef broth and simmer for 30 minutes."], ["Serve", "Top with bread and cheese, then broil until cheese is bubbly."]], [["Onions", "4"], ["Butter", "3 tbsp"], ["Beef broth", "4 cups"], ["Baguette slices", "4"], ["Gruyere cheese", "1 cup"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 75, [["meal type", "Soup"], ["nationality", "French"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Pumpkin Soup", "FallFlavors", [["Roast pumpkin", "Roast pumpkin with onions and garlic until tender."], ["Blend", "Puree roasted vegetables with vegetable broth and cream."], ["Season", "Simmer soup with spices until flavors meld."]], [["Pumpkin", "1"], ["Onion", "1"], ["Garlic", "3 cloves"], ["Vegetable broth", "4 cups"], ["Heavy cream", "1 cup"], ["Nutmeg", "1/2 tsp"], ["Cinnamon", "1/2 tsp"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 45, [["meal type", "Soup"], ["nationality", "Fall"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Ratatouille", "RatatouilleFanatic", [["Slice vegetables", "Slice eggplant, zucchini, and tomatoes."], ["Layer", "Layer vegetables in a baking dish with herbs and garlic."], ["Bake", "Bake at 200°C for 45 minutes until vegetables are tender."]], [["Eggplant", "1"], ["Zucchini", "1"], ["Tomatoes", "2"], ["Garlic", "3 cloves"], ["Fresh thyme", "1 tbsp"], ["Olive oil", "2 tbsp"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 45, [["meal type", "Main Course"], ["nationality", "French"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Beef Wellington", "GourmetChef", [["Prepare beef", "Sear beef fillet until browned on all sides."], ["Wrap", "Wrap beef in puff pastry with mushrooms and pâté."], ["Bake", "Bake at 200°C for 25 minutes until pastry is golden brown."]], [["Beef fillet", "500g"], ["Puff pastry", "1 sheet"], ["Mushrooms", "200g"], ["Pâté", "100g"], ["Egg", "1"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 30, 25, [["meal type", "Main Course"], ["nationality", "French"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Chicken Curry", "CurryConnoisseur", [["Prepare spices", "Toast spices and grind into a powder."], ["Cook chicken", "Cook chicken with onions, garlic, and spices until browned."], ["Simmer", "Simmer chicken in coconut milk until cooked through."]], [["Chicken thighs", "600g"], ["Onion", "1"], ["Garlic", "3 cloves"], ["Ginger", "1 tbsp"], ["Curry powder", "2 tbsp"], ["Turmeric", "1 tsp"], ["Cumin", "1 tsp"], ["Coriander", "1 tsp"], ["Coconut milk", "1 can"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 25, 30, [["meal type", "Main Course"], ["nationality", "Indian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Beef Tacos", "TacoTuesday", [["Season beef", "Season beef with spices and cook until browned."], ["Prepare toppings", "Chop lettuce, tomatoes, and onions."], ["Assemble tacos", "Fill taco shells with beef, lettuce, tomatoes, and cheese."]], [["Beef", "500g"], ["Taco shells", "8"], ["Lettuce", "1/2 head"], ["Tomatoes", "2"], ["Onion", "1"], ["Cheddar cheese", "1 cup"], ["Taco seasoning", "1 packet"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 15, [["meal type", "Main Course"], ["nationality", "Mexican"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Sushi Rolls", "SushiMaster", [["Prepare sushi rice", "Cook rice and season with rice vinegar, sugar, and salt."], ["Prepare ingredients", "Slice fish, vegetables, and nori sheets."], ["Roll", "Spread rice on nori, add fillings, and roll tightly."]], [["Sushi rice", "2 cups"], ["Nori sheets", "5"], ["Salmon", "200g"], ["Tuna", "200g"], ["Cucumber", "1"], ["Avocado", "1"], ["Soy sauce", "for dipping"], ["Wasabi", "for dipping"], ["Pickled ginger", "for dipping"]], 30, 30, [["meal type", "Main Course"], ["nationality", "Japanese"], ["meal time", "Dinner"], ["meal utensils", "chopsticks"]]],
    ["Bolognese Pasta", "PastaLover", [["Prepare sauce", "Cook ground beef with onions, garlic, and tomato sauce until thickened."], ["Cook pasta", "Boil water and cook pasta until al dente."], ["Combine", "Mix pasta with sauce and serve."]], [["Pasta", "300g"], ["Ground beef", "300g"], ["Onion", "1"], ["Garlic", "3 cloves"], ["Tomato sauce", "2 cups"], ["Olive oil", "2 tbsp"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 15, [["meal type", "Main Course"], ["nationality", "Italian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Baked Salmon", "SalmonLover", [["Marinate salmon", "Marinate salmon with lemon juice, garlic, and herbs for 30 minutes."], ["Bake", "Bake salmon in a preheated oven until cooked through (about 15 minutes)."]], [["Salmon fillets", "4"], ["Lemon juice", "1/4 cup"], ["Garlic", "2 cloves"], ["Fresh herbs", "1/4 cup"], ["Olive oil", "2 tbsp"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 15, 15, [["meal type", "Main Course"], ["nationality", "International"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Egg Fried Rice", "AsianDelights", [["Cook rice", "Cook rice and let it cool completely."], ["Stir fry", "Stir fry rice with eggs, vegetables, and soy sauce until heated through."]], [["Cooked rice", "2 cups"], ["Eggs", "2"], ["Carrots", "1"], ["Peas", "1/2 cup"], ["Green onions", "2"], ["Soy sauce", "2 tbsp"], ["Sesame oil", "1 tbsp"], ["Cooking oil", "2 tbsp"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 15, [["meal type", "Main Course"], ["nationality", "Asian"], ["meal time", "Dinner"], ["meal utensils", "chopsticks"]]],
    ["Russian Borscht", "BorschtLover", [["Prepare vegetables", "Chop beets, cabbage, potatoes, and carrots."], ["Cook vegetables", "Simmer vegetables with beef broth until tender."], ["Add beets", "Add beets and simmer until soup is vibrant red."]], [["Beets", "3"], ["Cabbage", "1/4 head"], ["Potatoes", "2"], ["Carrots", "2"], ["Beef broth", "6 cups"], ["Onion", "1"], ["Garlic", "2 cloves"], ["Vinegar", "2 tbsp"], ["Sour cream", "for serving"], ["Dill", "for garnish"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 20, [["meal type", "Main Course"], ["nationality", "Russian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Chicken Quesadillas", "MexicanCuisine", [["Cook chicken", "Season and grill chicken until fully cooked."], ["Assemble quesadillas", "Layer tortillas with chicken, cheese, and salsa."], ["Grill", "Grill until cheese is melted and tortillas are crispy."]], [["Chicken breast", "300g"], ["Flour tortillas", "4"], ["Cheddar cheese", "1 cup"], ["Salsa", "1/2 cup"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 20, 15, [["meal type", "Main Course"], ["nationality", "Mexican"], ["meal time", "Dinner"], ["meal utensils", "normal"]]],
    ["Fettuccine Alfredo", "ItalianCuisine", [["Cook pasta", "Boil water and cook fettuccine until al dente."], ["Prepare sauce", "Heat cream, butter, and Parmesan cheese until smooth."]], [["Fettuccine pasta", "300g"], ["Heavy cream", "1 cup"], ["Butter", "100g"], ["Parmesan cheese", "100g"], ["Salt", "to taste"], ["Black pepper", "to taste"]], 15, 15, [["meal type", "Main Course"], ["nationality", "Italian"], ["meal time", "Dinner"], ["meal utensils", "normal"]]]
];
recipes.forEach((val,i,arr)=>{
val = new Recipe(val[0],val[1],val[2],val[3],val[4],val[5],val[6]);
arr[i]=val;
})


import {
    ScreenManager
} from './screenManager.js';
export const manager = new ScreenManager();


export function elementCreation(tag, host,text = null, ID = null,eventListenerArray=null,attributeArray=null) {
    let element = document.createElement(tag)
    if (text != null) {
        let textNode = document.createTextNode(text)
        element.appendChild(textNode)
    }
    if (ID != null) {
        element.setAttribute('id', ID)
    }
    if (eventListenerArray!=null){
        for(let i=0;i<=eventListenerArray.length-2;i+=2){
            element.addEventListener(eventListenerArray[i],eventListenerArray[i+1])
        }
    }
    if (attributeArray!=null){
        for(let i=0;i<=attributeArray.length-2;i+=2){
            element.setAttribute(attributeArray[i],attributeArray[i+1])
        }
    }
    host.appendChild(element)
    return element
}

