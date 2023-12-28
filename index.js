/**
Task:
- Write the code to help a user choose the perfect Christmas dinner idea
  based on the number of people attending.
- Include a checkbox for the user to specify the meal 
  should be vegetarian-friendly.

Dinner suggestions (or choose your own!):
Vegetarian: Winter Squash Risotto
4 people or less: Ham
5+ people: Turkey

Stretch goals:
- Add more dietary options.
- Show recipes when the meal has been selected.
 */
const numPeopleInput = document.getElementById('num-input')
const vegetarianCheckbox = document.getElementById('vegetarian-input');
const mealSuggestion = document.getElementById('food');
const recipeLink = document.getElementById('recipeLink');
const mealImage = document.getElementById('mealImage');
const submitButton = document.getElementById('btn')

const mealIdeas = {
  loneWolf: {
    vegetarian: 'Roasted Vegetable Tart',
    nonVegetarian: 'Herb-Roasted Chicken with Root Vegetables',
  },
  nuclear: {
    vegetarian: 'Lentil Loaf with Cranberry Glaze',
    nonVegetarian: 'Honey-Glazed Ham with Maple-Glazed Carrots',
  },
  joint: {
    vegetarian: 'Stuffed Butternut Squash',
    nonVegetarian: 'Roast Turkey with Cranberry Sauce and Gravy',
  },
};

const recipeLinks = {
  'Roasted Vegetable Tart': 'https://www.archanaskitchen.com/roasted-vegetable-pesto-tart',
  'Herb-Roasted Chicken with Root Vegetables': 'https://www.kitchenstories.com/en/recipes/herb-roasted-chicken-with-root-vegetables',
  'Lentil Loaf with Cranberry Glaze': 'https://avirtualvegan.com/cranberry-mushroom-lentil-loaf/',
  'Honey-Glazed Ham with Maple-Glazed Carrots': 'https://lexiscleankitchen.com/maple-glazed-ham/',
  'Stuffed Butternut Squash': 'https://www.wellplated.com/stuffed-butternut-squash/',
  'Roast Turkey with Cranberry Sauce and Gravy': 'https://food.ndtv.com/recipe-roast-turkey-with-cranberry-sauce-953079',
};

const mealImages = {
  'Roasted Vegetable Tart': 'images/dish1.jpg',
  'Herb-Roasted Chicken with Root Vegetables': 'images/dish2.jpg',
  'Lentil Loaf with Cranberry Glaze': 'images/dish3.jpg',
  'Honey-Glazed Ham with Maple-Glazed Carrots': 'images/dish4.jpg',
  'Stuffed Butternut Squash': 'images/dish5.jpg',
  'Roast Turkey with Cranberry Sauce and Gravy': 'images/dish6.jpg',
};

function suggestMeal() {
  const numPeople = parseInt(numPeopleInput.value);
  var guests = '';
  if (numPeople <= 2) {
    guests = 'loneWolf'
  } else if (numPeople <= 4) {
    guests = 'nuclear'
  } else {
    guests = 'joint'
  }
  const isVegetarian = vegetarianCheckbox.checked;
  const mealType = isVegetarian ? 'vegetarian' : 'nonVegetarian';
  const suggestedMeal = mealIdeas[guests][mealType];

  mealSuggestion.textContent = suggestedMeal;
  recipeLink.href = recipeLinks[suggestedMeal];
  recipeLink.textContent = 'Get the recipe';
  mealImage.src = mealImages[suggestedMeal];
}

submitButton.addEventListener('click', function(event) {
  event.preventDefault()
  suggestMeal()
})
