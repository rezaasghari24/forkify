import RecipeView from './views/recipeView.js';
import * as model from './model.js';
import SearchView from './views/SearchView.js';
import ResultsView from './views/resultsView.js';
import PaginationView from './views/paginationView.js';

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
    // 2) Rendering Recipe
    RecipeView.render(model.state.recipe);
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
    ResultsView.render(model.getSearchResultsPage());
    PaginationView.render(model.state.search);
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goto) {
  ResultsView.render(model.getSearchResultsPage(goto));
  PaginationView.render(model.state.search);
  console.log('btn click');
};

const controlServings = function (newServings) {
  // Update the servings (in state)
  model.updateServings(newServings);

  // Update recipe view
  RecipeView.update(model.state.recipe);
};

const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  RecipeView.addHandlerUpdateServings(controlServings);
  SearchView.addHandlerSearch(controlSearchResults);
  PaginationView.addHandlerClick(controlPagination);
};
init();
