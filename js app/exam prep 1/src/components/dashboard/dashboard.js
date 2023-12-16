export class DashboardComponent {
    constructor(shoesService, renderHandler, templateFunction) {
        this.shoesService = shoesService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.showView = this._showView.bind(this);
    }

    async _showView() {
        let shoes = await this.shoesService.getAll();
        let template = this.templateFunction(shoes);
        this.renderHandler(template);
    }
}