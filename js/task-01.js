


//const items = document.querySelectorAll('.item');
//console.log(items);


//const items = document.getElementsByClassName('item')
//console.log(items);


const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);

categoriesList.querySelectorAll('li.item').forEach(category => { const categoryName = category.querySelector('h2').textContent;
const categoryElements = category.querySelectorAll('li').length;

console.log(`Categoty: ${categoryName}`);
console.log(`Elements: ${categoryElements}`);
});




