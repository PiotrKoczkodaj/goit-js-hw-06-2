const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');
 const item = document.createElement('li');
 console.log(list)
const markup = ingredients.map((ingredient) => `<li class"item">
${ingredient}</li>`).join("");

list.innerHTML = markup;

