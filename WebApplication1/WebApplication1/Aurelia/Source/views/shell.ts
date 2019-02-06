import { HttpClient } from 'aurelia-fetch-client';
import { inject } from 'aurelia-framework';
import { AppSettings } from '../models/appSettings';

@inject(AppSettings, HttpClient)
export class Shell {

    httpClient: HttpClient;
    appSettings: AppSettings;

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

    
}