export class EditComponent {
    constructor(factsService, renderHandler, templateFunction, router) {
        this.factsService = factsService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
        this.editHandler = this._editHandler.bind(this);
    }

    async _showView(ctx) {
        let id = ctx.params.id;
        let fact = await this.factsService.getById(id);

        let template = this.templateFunction(fact, this.editHandler);
        this.renderHandler(template);
    }

    async _editHandler(e, id) {
        e.preventDefault();

        let form = e.target;
        let formData = new FormData(form);

        let fact = {
            category: formData.get("category"),
            imageUrl: formData.get("imageUrl"),
            description: formData.get("description"),
            moreInfo: formData.get("moreInfo")

        }

        if (fact.category == "" || fact.imageUrl == "" ||
            fact.description == "" || fact.moreInfo == "") {
            alert("All fields are required");
            return;
        }

        let result = await this.factsService.edit(id, fact);
        this.router.navigate(`/details/${id}`);
    }
}