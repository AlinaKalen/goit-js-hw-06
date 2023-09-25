const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
const liElements = ingredients.map(ingredient => { const li = document.createElement('li');
li.textContent = ingredient;
  li.classList.add('item');
  return li;
});

ingredientsList.append(...liElements);





// const ingredientsList = document.querySelector('#ingredients');
// ingredients.forEach(ingredient => {
// const li = document.createElement('li');

// li.textContent = ingredient; 

// li.classList.add('item');
// ingredientsList.appendChild(li); 



// });


