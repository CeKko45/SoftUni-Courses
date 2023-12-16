export class CatalogPage {
    constructor(recipeService, templateFunction, renderHandler, navigate, modalService) {
        this.recipeService = recipeService;
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.navigate = navigate;
        this.modalService = modalService;
        this.detailedRecipes = {};

        this.recipes = [];
        this.showCatalog = this._showCatalog.bind(this);
        this.toggleCard = this._toggleCard.bind(this);
        this.searchHandler = this._searchHandler.bind(this);
    }

    async _showCatalog(ctx) {
        let queryParams = ctx.querystring
            .split("&")
            .map(text => text.split("="));
        let queryObj = queryParams.reduce((a, c) => {
            a[c[0]] = c[1];
            return a;
        }, {});

        let page = queryObj["page"] != undefined ? Number(queryObj["page"]) : 1;
        delete queryObj["page"];

        if (ctx.querystring) {
            this.recipes = await this.recipeService.getRecipesBySearch(page, queryObj);
        } else {
            this.recipes = await this.recipeService.getRecipesWithSelectedColumns(['_id', 'name', 'img']);
        }

        let count = await this.recipeService.getRecipesCount()
        let template = this.templateFunction(page, count, this.searchHandler, this.recipes, this.detailedRecipes, this.toggleCard, this.goToEdit);
        this.renderHandler(template);

        // let resilt = await this.modalService.showModal("Are you sure you want to delete this item?");
        // console.log(resilt);
    }

    _searchHandler(e) {
        let element = e.target;
        let value = element.value;
        this.navigate(`/?name=${value}`);
    }

    async _toggleCard(id) {
        // if (this.detailedRecipes[id] === undefined) {
        //     let recipe = await this.recipeService.getRecipeById(id);
        //     this.detailedRecipes[id] = recipe;
        // }

        // let template = this.templateFunction(this.recipes, this.detailedRecipes, this.toggleCard, this.goToEdit);
        // this.renderHandler(template);
        this.navigate(`/details/${id}`);
    }
}
