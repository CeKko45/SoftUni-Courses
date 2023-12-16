export class DashboardComponent {
    constructor(factsService, renderHandler, templateFunction) {
        this.factsService = factsService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.showView = this._showView.bind(this);
    }

    async _showView() {
        let facts = await this.factsService.getAll();
        let template = this.templateFunction(facts);
        this.renderHandler(template);
    }
}