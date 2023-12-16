export class DetailsComponent {
    constructor(authService, factsService, renderHandler, templateFunction) {
        this.authService = authService;
        this.factsService = factsService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.showView = this._showView.bind(this);
        this.deleteHandler = this._deleteHandler.bind(this);
    }

    async _showView(ctx) {
        let id = ctx.params.id;
        let fact = await this.factsService.getById(id);
        let currentUserId = this.authService.getUserId();
        let isOwner = currentUserId === fact._ownerId;
        let template = this.templateFunction(fact, isOwner, this.deleteHandler);
        this.renderHandler(template);
    }

    async _deleteHandler(id) {
        let result = confirm("Are you sure you want to delete this item?");
        if(result == false) {
            return;
        }

        let deleteResult = await this.factsService.delete(id);
        this.router.navigate("/dashboard");
    }
}