var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from "aurelia-fetch-client";
import { inject } from 'aurelia-framework';
//import { Hosting } from '../models/Hosting';
import { GlobalDef } from '../utils/GlobalDef';
let ApiHttpClient = class ApiHttpClient extends HttpClient {
    constructor(globalDef) {
        super();
        this.globalDef = globalDef;
    }
    fetch(uri) {
        return this.getUri()
            .then(baseuri => {
            super.configure(config => {
                config.withBaseUrl(baseuri + '/');
            });
            return super.fetch(uri)
                .then(response => {
                if (response.ok) {
                    return response;
                }
            });
        });
    }
    getUri() {
        return new Promise((resolve, reject) => {
            if (this.globalDef.hosting.api == undefined) {
                super.fetch('hosting')
                    .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                    .then(hosting => {
                    this.globalDef.hosting = hosting;
                    resolve(hosting.api);
                });
            }
            else
                resolve(this.globalDef.hosting.api);
        });
    }
};
ApiHttpClient = __decorate([
    inject(GlobalDef),
    __metadata("design:paramtypes", [GlobalDef])
], ApiHttpClient);
export { ApiHttpClient };
//# sourceMappingURL=ApiHttpClient.js.map