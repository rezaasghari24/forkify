function e(e){return e&&e.__esModule?e.default:e}var r=globalThis,t={},i={},s=r.parcelRequire3a11;null==s&&((s=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){i[e]=r},r.parcelRequire3a11=s),(0,s.register)("27Lyk",function(e,r){Object.defineProperty(e.exports,"register",{get:()=>t,set:e=>t=e,enumerable:!0,configurable:!0});var t,i=new Map;t=function(e,r){for(var t=0;t<r.length-1;t+=2)i.set(r[t],{baseUrl:e,path:r[t+1]})}}),s("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.4e41bf8c.js","eyyUD","icons.c14567a0.svg"]'));var a={};a=new URL("icons.c14567a0.svg",import.meta.url).toString();class n{_data;render(e,r=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();if(!r)return t;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}update(e){this._data=e;let r=this._generateMarkup(),t=Array.from(document.createRange().createContextualFragment(r).querySelectorAll("*")),i=Array.from(this._parentEl.querySelectorAll("*"));t.forEach((e,r)=>{let t=i[r];e.isEqualNode(t)||e.firstChild?.nodeValue.trim()===""||(t.textContent=e.textContent),e.isEqualNode(t)||Array.from(e.attributes).forEach(e=>t.setAttribute(e.name,e.value))})}_clear(){this._parentEl.innerHTML=""}renderSpinner(){let r=`
        <div class="spinner">
        <svg>
            <use href="${e(a)}#icon-loader"></use>
        </svg>
        </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",r)}renderError(r=this._errorMessage){let t=`
      <div class="error">
        <div>
          <svg>
            <use href="${e(a)}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(r=this._message){let t=`
      <div class="message">
        <div>
          <svg>
            <use href="${e(a)}#icon-smile"></use>
          </svg>
        </div>
        <p>${r}</p>
      </div>
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}class o extends n{_parentEl=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one! ";_message="";addHandlerRender(e){["hashchange","load"].forEach(r=>window.addEventListener(r,e))}addHandlerUpdateServings(e){this._parentEl.addEventListener("click",function(r){let t=r.target.closest(".btn--update-servings");if(!t)return;let i=+t.dataset.updateTo;i>0&&e(i)})}addHandlerAddBookmark(e){this._parentEl.addEventListener("click",function(r){r.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`
        <figure class="recipe__fig">
            <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
            <h1 class="recipe__title">
                <span>${this._data.title}</span>
            </h1>
            </figure>

            <div class="recipe__details">
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                <use href="${e(a)}#icon-clock"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
                <span class="recipe__info-text">minutes</span>
            </div>
            <div class="recipe__info">
                <svg class="recipe__info-icon">
                <use href="${e(a)}#icon-users"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
                <span class="recipe__info-text">servings</span>

                <div class="recipe__info-buttons">
                <button data-update-to="${this._data.servings-1}"
                 class="btn--tiny btn--update-servings">
                    <svg>
                    <use href="${e(a)}#icon-minus-circle"></use>
                    </svg>
                </button>
                <button data-update-to="${this._data.servings+1}"
                 class="btn--tiny btn--update-servings" >
                    <svg>
                    <use href="${e(a)}#icon-plus-circle"></use>
                    </svg>
                </button>
                </div>
            </div>
            <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${e(a)}#icon-user"></use>
              </svg>
            </div>
            <button class="btn--round btn--bookmark">
                <svg class="">
                <use href="${e(a)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
                </svg>
            </button>
            </div>


            <div class="recipe__ingredients">
            <h2 class="heading--2">Recipe ingredients</h2>
            <ul class="recipe__ingredient-list">
                ${this._data.ingredients.map(e=>this._renderIngredient(e)).join("")}
            </ul>
            </div>

            <div class="recipe__directions">
            <h2 class="heading--2">How to cook it</h2>
            <p class="recipe__directions-text">
                This recipe was carefully designed and tested by
                <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
                directions at their website.
            </p>
            <a
                class="btn--small recipe__btn"
                href="${this._data.sourceUrl}"
                target="_blank"
            >
                <span>Directions</span>
                <svg class="search__icon">
                <use href="${e(a)}#icon-arrow-right"></use>
                </svg>
            </a>
            </div>
        `}_renderIngredient(r){return`
        <li class="recipe__ingredient">
            <svg class="recipe__icon">
                <use href="${e(a)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${r.quantity?r.quantity:""}</div>
            <div class="recipe__description">
                <span class="recipe__unit">${r.unit}</span>
                ${r.description}
            </div>
        </li>
    `}}var c=new o;const d="https://forkify-api.herokuapp.com/api/v2/recipes/",l="ed8ed486-9f90-4060-818f-bdafe018762b",u=async function(e,r){try{let t=r?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}):fetch(e),i=await Promise.race([t,new Promise(function(e,r){setTimeout(function(){r(Error("Request took too long! Timeout after 10 second"))},1e4)})]),s=await i.json();if(!i.ok)throw Error(`${s.message} (${i.status})`);return s}catch(e){throw e}},p={recipe:{},search:{query:"",results:[],page:1,resultsPerPage:15},bookmarks:[]},_=function(e){let{recipe:r}=e.data;return{id:r.id,title:r.title,publisher:r.publisher,sourceUrl:r.source_url,image:r.image_url,servings:r.servings,cookingTime:r.cooking_time,ingredients:r.ingredients,...r.key&&{key:r.key}}},g=async function(e){try{let r=await u(`${d}${e}?key=${l}`);p.recipe=_(r),p.bookmarks.some(r=>r.id===e)?p.recipe.bookmarked=!0:p.recipe.bookmarked=!1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},h=async function(e){try{p.search.query=e;let r=await u(`${d}?search=${e}&key=${l}`);p.search.results=r.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url,...e.key&&{key:e.key}})),p.search.page=1}catch(e){throw console.error(`${e} \u{1F4A5}\u{1F4A5}\u{1F4A5}`),e}},v=function(e=p.search.page){p.search.page=e;let r=(e-1)*p.search.resultsPerPage,t=e*p.search.resultsPerPage;return p.search.results.slice(r,t)},f=function(e){p.recipe.ingredients.forEach(r=>{r.quantity=r.quantity*e/p.recipe.servings}),p.recipe.servings=e},m=function(){localStorage.setItem("bookmarks",JSON.stringify(p.bookmarks))},k=function(e){p.bookmarks.push(e),e.id===p.recipe.id&&(p.recipe.bookmarked=!0),m()},b=function(e){let r=p.bookmarks.findIndex(r=>r.id===e);p.bookmarks.splice(r,1),e===p.recipe.id&&(p.recipe.bookmarked=!1),m()};!function(){let e=localStorage.getItem("bookmarks");e&&(p.bookmarks=JSON.parse(e))}();const y=async function(e){try{let r=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let r=e[1].split(",").map(e=>e.trim());if(3!==r.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[t,i,s]=r;return{quantity:t?+t:null,unit:i,description:s}}),t={title:e.title,publisher:e.publisher,source_url:e.sourceUrl,image_url:e.image,servings:+e.servings,cooking_time:+e.cookingTime,ingredients:r};console.log(t);let i=await u(`${d}?key=${l}`,t);p.recipe=_(i),k(p.recipe)}catch(e){throw e}};class w{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(r){r.preventDefault(),e()})}}var $=new w,E=new class extends n{_parentEl="";_generateMarkup(){let r=window.location.hash.slice(1);return`
    <li class="preview">
      <a class="preview__link ${this._data.id===r?"preview__link--active":""}" href="#${this._data.id}">
        <figure class="preview__fig">
          <img src="${this._data.image}" alt="${this._data.title}" />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${this._data.title}</h4>
          <p class="preview__publisher">${this._data.publisher}</p>
          <div class="preview__user-generated ${this._data.key?"":"hidden"}">
              <svg>
                <use href="${e(a)}#icon-user"></use>
              </svg>
          </div>
        </div>
      </a>
    </li>
    `}};class S extends n{_parentEl=document.querySelector(".results");_errorMessage="No recipes found for your query! Please try again ;)";_message="";_generateMarkup(){return this._data.map(e=>E.render(e,!1)).join("")}}var H=new S;class q extends n{_parentEl=document.querySelector(".pagination");addHandlerClick(e){this._parentEl.addEventListener("click",function(r){let t=r.target.closest(".btn--inline");t&&(console.log(t),e(+t.dataset.goto))})}_generateMarkup(){let e=Math.ceil(this._data.results.length/this._data.resultsPerPage),r=this._data.page;return 1===r&&e>1?this._generateNextBtn(r):e>1&&r===e?this._generatePerviousBtn(r):r>1&&r<e?`
        ${this._generatePerviousBtn(r)}
        ${this._generateNextBtn(r)}
      `:""}_generatePerviousBtn(r){return`
          <button data-goto="${r-1}"
           class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${e(a)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${r-1}</span>
          </button>
      `}_generateNextBtn(r){return`
          <button data-goto="${r+1}"
           class="btn--inline pagination__btn--next">
            <span>Page ${r+1}</span>
            <svg class="search__icon">
              <use href="${e(a)}#icon-arrow-right"></use>
            </svg>
          </button>
      `}}var x=new q;class A extends n{_parentEl=document.querySelector(".bookmarks__list");_errorMessage="No bookmarks yet. Find a nice recipe and bookmark it :)";_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>E.render(e,!1)).join("")}}var M=new A;class L extends n{_parentEl=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentEl.addEventListener("submit",function(r){r.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var P=new L;const T=async function(){try{let e=window.location.hash.slice(1);if(!e)return;c.renderSpinner(),H.update(v()),M.update(p.bookmarks),await g(e),c.render(p.recipe),console.log(p.recipe)}catch(e){c.renderError(),console.error(e)}},R=async function(){try{H.renderSpinner();let e=$.getQuery();if(!e)return;await h(e),H.render(v()),x.render(p.search)}catch(e){console.error(e)}},j=async function(e){try{P.renderSpinner(),await y(e),console.log(p.recipe),c.render(p.recipe),P.renderMessage(),M.render(p.bookmarks),window.history.pushState(null,"",`#${p.recipe.id}`),setTimeout(function(){P.toggleWindow()},2e3)}catch(e){console.error(e),P.renderError(e.message)}};M.addHandlerRender(function(){M.render(p.bookmarks)}),c.addHandlerRender(T),c.addHandlerUpdateServings(function(e){f(e),c.update(p.recipe)}),c.addHandlerAddBookmark(function(){p.recipe.bookmarked?b(p.recipe.id):k(p.recipe),c.update(p.recipe),M.render(p.bookmarks)}),$.addHandlerSearch(R),x.addHandlerClick(function(e){H.render(v(e)),x.render(p.search)}),P.addHandlerUpload(j);
//# sourceMappingURL=index.4e41bf8c.js.map
