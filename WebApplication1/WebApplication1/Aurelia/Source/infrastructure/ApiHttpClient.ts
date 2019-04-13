import { HttpClient } from "aurelia-fetch-client";
import { inject, CompositionTransaction } from 'aurelia-framework';
//import { Hosting } from '../models/Hosting';
import { GlobalDef } from '../utils/GlobalDef';
import { Hosting } from "../models/Hosting";


@inject(GlobalDef)
export class ApiHttpClient extends HttpClient {

    globalDef: GlobalDef;

    constructor(globalDef: GlobalDef) {
        super();

        this.globalDef = globalDef;
    }



    public fetch(uri: string): Promise<Response> {
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

    getUri() : Promise<string> {

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
                    })
            }
            else
                resolve(this.globalDef.hosting.api);
        });
    }

}