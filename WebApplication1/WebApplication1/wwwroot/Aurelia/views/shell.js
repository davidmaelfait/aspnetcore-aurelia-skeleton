var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { AppSettings } from '../models/appSettings';
export let Shell = class Shell {
    constructor() {
        this.httpClient = new HttpClient();
        this.httpClient.fetch('appsettings')
            .then(response => {
            if (response.ok) {
                return response.text();
            }
        }).then(uri => {
            this.appSettings = new AppSettings();
            this.appSettings.Uri = uri.toString();
        });
    }
};
Shell = __decorate([
    inject(AppSettings, HttpClient), 
    __metadata('design:paramtypes', [])
], Shell);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdzL3NoZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCO09BQzFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CO09BQ25DLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCO0FBR25EO0lBS0k7UUFFSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO2FBQy9CLElBQUksQ0FBQyxRQUFRO1lBQ1YsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUUzQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7WUFDUCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7WUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztBQUdMLENBQUM7QUF4QkQ7SUFBQyxNQUFNLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQzs7U0FBQTtBQXdCL0IiLCJmaWxlIjoidmlld3Mvc2hlbGwuanMiLCJzb3VyY2VSb290IjoiQXVyZWxpYS9Tb3VyY2UvIn0=
