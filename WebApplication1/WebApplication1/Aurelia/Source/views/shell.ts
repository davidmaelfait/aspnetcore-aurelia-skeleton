
import { inject } from 'aurelia-framework';

import { Router, RouterConfiguration } from 'aurelia-router';

//@inject(Hosting)
export class Shell {

    router: Router;

    constructor() {

       
    }

    async activate() {
        console.log('activated');
    }

    attached() {
        console.log('attached');
    }

    deactivate() {
        console.log('deactivate');
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        this.router = router;

        config.title = "Sportstore";

        let routes = [
            {
                route: '',
                redirect: '/products'
            },
            {
                route: 'products',
                name: 'products',
                title: 'products',
                moduleId: './product/product'
            }
        ];
        config.map(routes);
    }
    
}