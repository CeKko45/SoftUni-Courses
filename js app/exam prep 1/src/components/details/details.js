export class DetailsComponent {
    constructor(authService, shoesService, renderHandler, templateFunction, router) {
        this.authService = authService;
        this.shoesService = shoesService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
        this.deleteHandler = this._deleteHandler.bind(this);
    }

    async _showView(ctx) {
        let id = ctx.params.id;
        let shoe = await this.shoesService.getById(id);
        let currentUserId = this.authService.getUserId();
        let isOwner = currentUserId === shoe._ownerId;
        let template = this.templateFunction(shoe, isOwner, this.deleteHandler);
        this.renderHandler(template);
    }

    async _deleteHandler(id) {
        let result = confirm("Are you sure you want to delete this item?");
        if(result == false) {
            return;
        }

        let deleteResult = await this.shoesService.delete(id);
        this.router.navigate("/dashboard");
    }
}