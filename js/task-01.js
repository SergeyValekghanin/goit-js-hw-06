console.log("Number of categories:", document.querySelectorAll("li.item").length);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});
