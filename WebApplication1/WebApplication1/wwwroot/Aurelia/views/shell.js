//import { bindable, inject, BindingEngine } from 'aurelia-framework';
//import { Router, Redirect, RouterConfiguration, RouteConfig, NavModel } from 'aurelia-router';
//import { FetchConfig, AuthorizeStep } from 'aurelia-auth';
//import { UserService } from '../services/UserService';
//import { SiteApi } from './sites/site/siteApi';
//import { Site } from '../models/database/site';
//import { HostingParameters } from '../config/hostingConfig';
//import { GlobalDef } from '../utils/GlobalDefinitions';
//import { Claim } from '../utils/Utils';
//import { I18N, BaseI18N } from 'aurelia-i18n';
//import * as Cookies from 'js-cookie';
//@inject(SiteApi, BindingEngine, UserService, FetchConfig, AuthorizeStep, GlobalDef, HostingParameters, I18N)
//export class Shell {
//    api: SiteApi;
//    router: Router;
//    user: UserService;
//    globalDef: GlobalDef;
//    fetchConfig: FetchConfig;
//    authorizeStep: AuthorizeStep;
//    bindingEngine: BindingEngine;
//    hostingParameters: HostingParameters;
//    translator: I18N;
//    // Variables
//    subscription1: any;
//    subscription2: any;
//    isRequesting: boolean;
//    dbVersion: string;
//    webVersion: string;
//    constructor(api: SiteApi, bindingEngine: BindingEngine, user: UserService, fetchConfig: FetchConfig, authorizeStep: AuthorizeStep, globalDef: GlobalDef, hostingParameters: HostingParameters, translator: I18N) {
//        this.fetchConfig = fetchConfig;
//        this.authorizeStep = authorizeStep;
//        this.globalDef = globalDef;
//        this.user = user;
//        this.translator = translator;
//        this.bindingEngine = bindingEngine;
//        this.isRequesting = false;
//        this.api = api;
//        this.hostingParameters = hostingParameters;
//        //  this.webVersion = this.hostingParameters.Version;
//        // Subscribe to api request events and show loading screen accordingly
//        this.subscription1 = bindingEngine.propertyObserver(this.globalDef, 'pendingRequests')
//            .subscribe((newValue, oldValue) => {
//                if (newValue > 0) {
//                    this.isRequesting = true;
//                }
//                else {
//                    this.isRequesting = false;
//                }
//            });
//        // Subscribe to authentication events (login/logout)
//        this.subscription2 = bindingEngine.propertyObserver(this.user, 'isAuthenticated')
//            .subscribe((newValue, oldValue) => {
//                if (this.user.isAuthenticated) {
//                    this.getResources().then(() => {
//                        window.location.href = this.hostingParameters.Web + '/#/Sites/' + this.globalDef.currentSite.ID + '/Dashboard'; //Redirect
//                        window.location.reload(true);//refresh navigation events
//                    });
//                }
//                else {
//                    window.location.href = this.hostingParameters.Web + '/#/welcome'; //Redirect
//                }
//            });
//    }
//    async activate() {
//        var cookie = Cookies.get('language');
//        var lang = (cookie == undefined || cookie == '' ? 'en-GB' : cookie);
//        this.globalDef.language = lang;
//        await this.api.getAppVersion().then(appVersion => {
//            this.webVersion = appVersion;
//        })
//        if (this.user.isAuthenticated) {
//            await this.getResources().then(() => {
//                this.fetchConfig.configure();
//            });
//        }
//        else {
//            this.fetchConfig.configure();
//            window.location.href = this.hostingParameters.Web + '/#/welcome'; //Redirect
//        }
//    }
//    attached() {
//        //$(document).ready(function () {
//        //    $(window).keydown(function (event) {
//        //        if (event.keyCode == 13) {
//        //            event.preventDefault();
//        //            return false;
//        //        }
//        //    });
//        //});
//    }
//    deactivate() {
//        this.subscription1.dispose();
//        this.subscription2.dispose();
//    }
//    /* Get all neccessary resources for a working application from the API */
//    getResources() {
//        console.log("Get initial resources");
//        return Promise.all([
//            this.api.getDefaultSite().then(site => {
//                this.globalDef.currentSite = new Site();
//                this.globalDef.currentSite.ID = site.ID;
//                this.globalDef.currentSite.Name = site.Name;
//            }),
//            this.api.getAll().then(sites => {
//                this.globalDef.sites = sites;
//            }),
//            this.api.getClaims().then(claims => {
//                this.globalDef.claims = [];
//                for (var i = 0; i < claims.length; i++) {
//                    var claim = new Claim(claims[i].Type, claims[i].Value);
//                    this.globalDef.claims.push(claim);
//                }
//            }),
//            this.api.getVersion().then(version => {
//                this.globalDef.dbVersion = version;
//                this.dbVersion = version;
//            }),
//            this.api.getType().then(type => {
//                this.globalDef.dbType = type;
//            }),
//        ]);
//    }
//	/**
//	* Configure the head router
//	* @param {RouterConfiguration} config - the router configuration
//	* @param {Router} router - the router
//	*/
//    configureRouter(config: RouterConfiguration, router: Router) {
//        this.router = router;
//        config.title = "ATPlatform";
//        config.addPipelineStep('authorize', this.authorizeStep);
//        let routes = [
//            //logout
//            {
//                route: 'logout',
//                name: 'logout',
//                title: 'Logout',
//                moduleId: './security/logout',
//                nav: false,
//                config: {
//                    auth: false
//                },
//                settings: {
//                    claim: new Claim('read', 'site'),
//                    translation: "ID_LOGOUT"
//                }
//            },
//            //error
//            {
//                route: 'error',
//                name: 'error',
//                title: '500 Error',
//                moduleId: './error/500',
//                nav: false,
//                config: {
//                    auth: false
//                },
//                settings: {
//                    claim: new Claim('read', 'site'),
//                    translation: "ID_LOGOUT"
//                }
//            },
//            {
//                route: 'welcome',
//                name: 'welcome',
//                title: 'welcome',
//                moduleId: './welcome/welcome',
//                nav: false,
//                config: {
//                    auth: false
//                },
//                settings: {
//                    claim: new Claim('read', 'site'),
//                }
//            },
//            {
//                route: '',
//                redirect: '/sites',
//                nav: false,
//                config: {
//                    auth: false
//                },
//                settings: {
//                    claim: new Claim('read', 'site')
//                }
//            },
//            //Site
//            {
//                route: 'sites',
//                name: 'site',
//                title: 'Sites',
//                moduleId: './sites/site',
//                auth: true,
//                settings: {
//                    claim: new Claim('read', 'site'),
//                    img: '../Assets/AT/images/icons/Sites.png',
//                    translation: "ID_SITES_ALT"
//                }
//            }
//        ];
//        config.map(routes);
//        config.mapUnknownRoutes({
//            route: '404',
//            name: 'not_found',
//            title: '404 Not Found',
//            moduleId: './error/404',
//            nav: false,
//            config: {
//                auth: false
//            },
//            settings: {
//                claim: new Claim('read', 'site'),
//                translation: "ID_LOGOUT"
//            }
//        });
//        this.globalDef.currentRouter = router;
//        console.log("Configured router");
//    }
//} 

//# sourceMappingURL=data:application/json;base64,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Q0FBa0M7QUFDbEMsZ0RBQWdEO0FBQ2hELDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsaUNBQWlDO0FBQ2pDLG9CQUFvQjtBQUNwQiw2QkFBNkI7QUFDN0IsdURBQXVEO0FBQ3ZELDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBRWhCLHFCQUFxQjtBQUNyQixlQUFlO0FBQ2YsaUNBQWlDO0FBQ2pDLGdDQUFnQztBQUNoQyxxQ0FBcUM7QUFDckMsMENBQTBDO0FBQzFDLDZCQUE2QjtBQUM3QiwyQkFBMkI7QUFDM0IsaUNBQWlDO0FBQ2pDLG9CQUFvQjtBQUNwQiw2QkFBNkI7QUFDN0IsdURBQXVEO0FBQ3ZELDhDQUE4QztBQUM5QyxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBRWhCLGVBQWU7QUFDZixtQ0FBbUM7QUFDbkMsa0NBQWtDO0FBQ2xDLG1DQUFtQztBQUNuQyxnREFBZ0Q7QUFDaEQsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsb0JBQW9CO0FBQ3BCLDZCQUE2QjtBQUM3Qix1REFBdUQ7QUFDdkQsbUJBQW1CO0FBQ25CLGdCQUFnQjtBQUVoQixlQUFlO0FBQ2YsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQyxvQkFBb0I7QUFDcEIsNkJBQTZCO0FBQzdCLHNEQUFzRDtBQUN0RCxtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBRWhCLG9CQUFvQjtBQUNwQixlQUFlO0FBQ2YsaUNBQWlDO0FBQ2pDLCtCQUErQjtBQUMvQixpQ0FBaUM7QUFDakMsMkNBQTJDO0FBQzNDLDZCQUE2QjtBQUM3Qiw2QkFBNkI7QUFDN0IsdURBQXVEO0FBQ3ZELGlFQUFpRTtBQUNqRSxpREFBaUQ7QUFDakQsbUJBQW1CO0FBQ25CLGVBQWU7QUFFZixZQUFZO0FBQ1osNkJBQTZCO0FBRTdCLG1DQUFtQztBQUNuQywyQkFBMkI7QUFDM0IsZ0NBQWdDO0FBQ2hDLHFDQUFxQztBQUNyQyxzQ0FBc0M7QUFDdEMseUJBQXlCO0FBQ3pCLHVCQUF1QjtBQUN2Qiw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLHlCQUF5QjtBQUN6QixtREFBbUQ7QUFDbkQsMENBQTBDO0FBQzFDLGVBQWU7QUFDZixhQUFhO0FBRWIsZ0RBQWdEO0FBRWhELDJDQUEyQztBQUMzQyxPQUFPO0FBQ1AsR0FBRyIsImZpbGUiOiJ2aWV3cy9zaGVsbC5qcyIsInNvdXJjZVJvb3QiOiJBdXJlbGlhL1NvdXJjZS8ifQ==
