import { inject } from 'aurelia-framework';
import { Hosting } from '../models/Hosting';

@inject(Hosting)
export class GlobalDef {

    hosting: Hosting;

    constructor(hosting: Hosting) {
        this.hosting = hosting;
    }

}