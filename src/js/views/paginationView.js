import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      console.log(btn);
      const goto = +btn.dataset.goto;
      handler(goto);
    });
  }

  _generateMarkup() {
    const numPage = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const curPage = this._data.page;

    // Page 1, and there are another pages
    if (curPage === 1 && numPage > 1) {
      return this._generateNextBtn(curPage);
    }

    // last page
    if (numPage > 1 && curPage === numPage) {
      return this._generatePerviousBtn(curPage);
    }

    // middle pages
    if (curPage > 1 && curPage < numPage) {
      return `
        ${this._generatePerviousBtn(curPage)}
        ${this._generateNextBtn(curPage)}
      `;
    }

    // Page 1, and No another pages
    return '';
  }
  _generatePerviousBtn(curPage) {
    return `
          <button data-goto="${curPage - 1}"
           class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>
          </button>
      `;
  }
  _generateNextBtn(curPage) {
    return `
          <button data-goto="${curPage + 1}"
           class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
      `;
  }
}

export default new PaginationView();
