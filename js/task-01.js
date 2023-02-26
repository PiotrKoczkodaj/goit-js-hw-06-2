const categories = document.querySelectorAll('.item');

console.log('Number of categories:' + `${categories.length}`);

categories.forEach((category) => {
    console.log('Category:' + category.childNodes[1].textContent);
    console.log(category.children[1].children.length);
})

