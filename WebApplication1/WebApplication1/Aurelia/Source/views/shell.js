var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//@inject(Hosting)
export class Shell {
    constructor() {
    }
    activate() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('activated');
        });
    }
    attached() {
        console.log('attached');
    }
    deactivate() {
        console.log('deactivate');
    }
    configureRouter(config, router) {
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
//# sourceMappingURL=shell.js.map