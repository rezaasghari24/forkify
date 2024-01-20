import View from './View.js';
import PreviewView from './previewView.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  _generateMarkup() {
    console.log(this._data[0]);
    return this._data.map(result => PreviewView.render(result, false)).join('');
  }
}

export default new ResultsView();
