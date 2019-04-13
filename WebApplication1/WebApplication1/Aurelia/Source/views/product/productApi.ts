import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { ApiHttpClient } from '../../infrastructure/ApiHttpClient';
import { Product } from './product';

@inject(ApiHttpClient)
export class ProductApi {

    httpClient: ApiHttpClient;

    constructor(httpClient: ApiHttpClient) {
        this.httpClient = httpClient;
    }

    public getProducts()  {

        return this.httpClient.fetch('products')
            .then(response => {
                var result = response.json();
                console.log(result);
                return result;
            });
           // .then(prod => { return prod; });
    }

}