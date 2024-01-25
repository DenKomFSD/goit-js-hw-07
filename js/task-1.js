const categoriesList = document.getElementById('categories');
const liItem = categoriesList.querySelectorAll('li.item');
const liItemCount = liItem.length;
console.log(`Number of categories: ${liItemCount}`);

liItem.forEach((elem) => {
  const elemName = elem.querySelector('h2').textContent;
  const allLiCount = elem.querySelectorAll('ul>li').length;

  console.log(`Categorie: ${elemName}`);
  console.log(`Elements: ${allLiCount}`);
});
