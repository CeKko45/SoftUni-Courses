export class CreateComponent {
    constructor(factsService, renderHandler, templateFunction, router) {
        this.factsService = factsService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
        this.createHandler = this._createHandler.bind(this);
    }

    async _showView() {
        let template = this.templateFunction(this.createHandler);
        this.renderHandler(template);
    }

    async _createHandler(e) {
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

        let result = await this.factsService.create(fact);
        this.router.navigate("/dashboard");
    }
}