import { Router, Redirect, RouterConfiguration } from 'aurelia-router';

export class Product {

    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.map([
            { route: '', name: 'list', title: 'Overview', moduleId: './list/list' }
        ]);
        this.router = router;
    }
}