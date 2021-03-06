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
import { ProductApi } from '../productApi';
let List = class List {
    constructor(api) {
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
        var d = this.datum; //$("#datetimepicker_activeFrom").find("input").val();
        console.log(d);
    }
};
List = __decorate([
    inject(ProductApi),
    __metadata("design:paramtypes", [ProductApi])
], List);
export { List };
//# sourceMappingURL=list.js.map