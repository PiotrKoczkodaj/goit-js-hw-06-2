const categories = document.querySelectorAll('.item');
const items = document.querySelectorAll('.item li ');

categories.forEach((category) => {
    const categoryHeader = category.h2;
    console.log(categoryHeader);
})
console.log('Number of categories:' + `${categories.length}`);