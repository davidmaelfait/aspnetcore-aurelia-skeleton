import { HttpClient } from "aurelia-fetch-client";
import { inject } from 'aurelia-framework';
import { Hosting } from '../models/Hosting';

@inject(Hosting)
export class ApiHttpClient extends HttpClient {

    hosting: Hosting;

    constructor(hosting: Hosting) {
        super();

        this.hosting = hosting;
    }

   

    public fetch(uri: string): Promise<Response> {
        return this.getUri()
            .then(baseuri => {
                this.configure(config => {
                    config.withBaseUrl(baseuri + '/');
                });

              return this.fetch(uri)
                    .then(response => {
                        if (response.ok) {

                            return response.json();
                        }
                    });
            });
    }

    getUri() : Promise<string> {

        return new Promise((resolve, reject) => {

            if (this.hosting.api == undefined) {
                this.fetch('hosting')
                    .then(response => {
                        if (response.ok) {

                            return response.json();
                        }

                    })
                    .then(hosting => {
                        this.hosting = hosting;
                        return hosting.api;
                    })
            }
            else
                return this.hosting.api;
        });
    }

}