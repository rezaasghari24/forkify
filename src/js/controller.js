import RecipeView from './views/recipeView.js';
import * as model from './model.js';
import SearchView from './views/SearchView.js';
import ResultsView from './views/resultsView.js';

// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    // 1) Rendering Data
    RecipeView.renderSpinner();

    await model.loadRecipe(id);
    const { recipe } = model.state;
    // 2) Rendering Recipe
    RecipeView.render(recipe);
  } catch (err) {
    RecipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    ResultsView.renderSpinner();
    // 1) Get Search query
    const query = SearchView.getQuery();
    if (!query) return;

    // 2) Load Search Results
    await model.loadSearchResults(query);

    // ResultsView.render(model.state.search.results);
    ResultsView.render(model.getSearchResultsPage(2));

    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  SearchView.addHandlerSearch(controlSearchResults);
};
init();
