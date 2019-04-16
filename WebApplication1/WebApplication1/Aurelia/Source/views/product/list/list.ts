import { inject } from 'aurelia-framework';
//import { Hosting } from '../../../models/Hosting';
import { Router, RouterConfiguration } from 'aurelia-router';
import { ProductApi } from '../productApi';
import { Product } from '../../../models/database/product';

@inject(ProductApi)
export class List {
    api: ProductApi;
    products: Product[];
    datum: Date;

    constructor(api: ProductApi) {
        this.api = api;
        
    }

    activate() {
        this.api.getProducts().then(products => {
            this.products = products;
        });

        //https://github.com/ghiscoding/Aurelia-Bootstrap-Plugins/tree/master/aurelia-bootstrap-datetimepicker
       
       
    }

    attached() {
       // $('#product-table').DataTable().
        //$('#datetimepicker1').datetimepicker();
        //$('#datetimepicker1').data("DateTimePicker")
        this.datum = new Date(Date.now());
    }

    create() {
        var d = this.datum;//$("#datetimepicker_activeFrom").find("input").val();
        console.log(d);
    }
}