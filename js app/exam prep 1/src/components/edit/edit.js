export class EditComponent {
    constructor(shoesService, renderHandler, templateFunction, router) {
        this.shoesService = shoesService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
        this.editHandler = this._editHandler.bind(this);
    }

    async _showView(ctx) {
        let id = ctx.params.id;
        let shoe = await this.shoesService.getById(id);

        let template = this.templateFunction(shoe, this.editHandler);
        this.renderHandler(template);
    }

    async _editHandler(e, id) {
        e.preventDefault();

        let form = e.target;
        let formData = new FormData(form);

        let shoe = {
            brand: formData.get("brand"),
            model: formData.get("model"),
            imageUrl: formData.get("imageUrl"),
            release: formData.get("release"),
            designer: formData.get("designer"),
            value: formData.get("value")
        }

        if (shoe.brand == "" || shoe.model == "" || shoe.imageUrl == "" ||
         shoe.release == "" || shoe.designer == "" || shoe.value == "") {
            alert("All fields are required");
            return;
        }

        let result = await this.shoesService.edit(id, shoe);
        this.router.navigate(`/details/${id}`);
    }
}