export class Product {
    configureRouter(config, router) {
        config.map([
            { route: '', name: 'list', title: 'Overview', moduleId: './list/list' }
        ]);
        this.router = router;
    }
}
//# sourceMappingURL=product.js.map