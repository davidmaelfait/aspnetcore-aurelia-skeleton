var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from 'aurelia-framework';
import { ApiHttpClient } from '../../infrastructure/ApiHttpClient';
let ProductApi = class ProductApi {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getProducts() {
        return this.httpClient.fetch('products')
            .then(response => {
            var result = response.json();
            console.log(result);
            return result;
        });
        // .then(prod => { return prod; });
    }
};
ProductApi = __decorate([
    inject(ApiHttpClient),
    __metadata("design:paramtypes", [ApiHttpClient])
], ProductApi);
export { ProductApi };
//# sourceMappingURL=productApi.js.map