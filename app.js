//global selectors
const formWrapper = document.querySelector(".search-wrapper");
const formSearch = formWrapper.querySelector(".search");
const foodContainer = document.querySelector(".foods");
const input = formSearch.querySelector("input");
const listContainer = document.querySelector(".food-recipe");

//EventListeners
formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
});

window.addEventListener("DOMContentLoaded", () => {
  displayFoods(foods);
});

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

foods.forEach((recipe) => {
  const list = document.createElement("li");
  list.classList.add("rec");
  list.classList.add("hide");
  list.innerText = recipe.recipe;
  list.id = recipe.id;
  listContainer.appendChild(list);
});

function displayAnswer(element) {
  const id = element.id;
  const recipe = listContainer.childNodes[id];
  foodContainer.classList.add("hide");
  listContainer.classList.remove("hide");
  recipe.classList.remove("hide");
}
