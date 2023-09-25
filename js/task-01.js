


const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.children;
console.log(`Number of categories: ${categoryItems.length}`);

for (const categoryItem of categoryItems) { 
    const categoryName = categoryItem.firstElementChild.textContent;
    const categoryElements = categoryItem.lastElementChild.children;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements.length}`);
}






// const categoriesList = document.querySelector('#categories');
// console.log(`Number of categories: ${categoriesList.children.length}`);

// categoriesList.querySelectorAll('li.item').forEach(category => { const categoryName = category.querySelector('h2').textContent;
// const categoryElements = category.querySelectorAll('li').length;

// console.log(`Categoty: ${categoryName}`);
// console.log(`Elements: ${categoryElements}`);
// });




