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