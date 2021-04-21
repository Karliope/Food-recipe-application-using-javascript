//selectors
const formWrapper = document.querySelector(".search-wrapper");
const formSearch = formWrapper.querySelector(".search");
const foodContainer = document.querySelector(".foods");
const input = formSearch.querySelector("input");
const listContainer = document.querySelector(".food-recipe");
const button = document.querySelector(".btn-class.hide");
let bannerText = document.querySelector(".banner");

//EventListeners
formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
});

//display foods once the DOM contents are loaded
window.addEventListener("DOMContentLoaded", () => {
  displayFoods(foods);
});

//search for foods and display the results
input.onkeyup = (e) => {
  const searchString = e.target.value.toLowerCase();
  let displayRecipe = foods.filter((recipeItems) => {
    return recipeItems.food.toLocaleLowerCase().includes(searchString);
  });
  displayFoods(displayRecipe);
};

//functions
function displayFoods(foodItems) {
  let displayFood = foodItems
    .map((items) => {
      return `<div class="food" id=${items.id} onclick="displayAnswer(this)">
              <p class="food-item">${items.food}</p>
              <img src=${items.src} alt="">
            </div>`;
    })
    .join("");
  foodContainer.innerHTML = displayFood;
}

//to populate the recipes
foods.forEach((recipe) => {
  const list = document.createElement("li");
  list.classList.add("rec");
  list.classList.add("hide");
  list.innerText = recipe.recipe;
  list.id = recipe.id;
  listContainer.appendChild(list);
});

function displayAnswer(element) {
  //to display only the recipe of the food selected
  const id = element.id;
  const recipe = listContainer.childNodes[id];
  foodContainer.classList.add("hide");
  listContainer.classList.remove("hide");
  recipe.classList.remove("hide");
  button.classList.remove("hide");
  formSearch.classList.add("hide");
  bannerText.classList.add("hide");

  //back button
  button.addEventListener("click", () => {
    listContainer.className = "food-recipe hide";
    recipe.classList.add("hide");
    foodContainer.classList.remove("hide");
    button.classList.add("hide");
    formSearch.classList.remove("hide");
    bannerText.classList.remove("hide");
  });
}
