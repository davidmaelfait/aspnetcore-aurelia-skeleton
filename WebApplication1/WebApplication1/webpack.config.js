/*
* Webpack configuration file using easy-webpack
* BASED ON: https://github.com/aurelia/skeleton-navigation/blob/4e85d3974b1f755667af73bbfb7e889fe6188f33/skeleton-esnext-webpack/webpack.config.js
* 
* For this configuration to work make sure you have: 
*     - Webpack 2.1.0-beta-22
*     - Extract-text-webpack-plugin 2.0.0-beta.4 (used by @easy-webpack/config-css)
*
* TODO: Upgrade (Breaking change): 
* https://github.com/aurelia/skeleton-navigation/blob/daff198e177ef8277626bd8649f07a2b1b0b4f15/skeleton-typescript-webpack/webpack.config.ts
*/

"use strict";
const webpack = require("webpack");
const easyWebpack = require('@easy-webpack/core');
const generateConfig = easyWebpack.default;
const stripMetadata = easyWebpack.stripMetadata;
const get = easyWebpack.get;
const path = require('path');
const ENV = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() || 'development';
let config;

// This is the basic configuration for aurelia
const title = 'ATPlatform Aurelia Skeleton';
const baseUrl = '/';
const root = path.resolve();
const source = path.resolve('Aurelia/Source');
const destination = path.resolve('wwwroot/Aurelia');

// These are the core bundles used by aurelia
const coreBundles = {
    bootstrap: [
        'aurelia-bootstrapper-webpack',
        'aurelia-polyfills',
        'aurelia-pal',
        'aurelia-pal-browser'
    ],
    aurelia: [
        'aurelia-bootstrapper-webpack',
        'aurelia-binding',
        'aurelia-dependency-injection',
        'aurelia-event-aggregator',
        'aurelia-fetch-client',
        'aurelia-framework',
        'aurelia-history',
        'aurelia-history-browser',
        'aurelia-loader',
        'aurelia-loader-webpack',
        'aurelia-logging',
        'aurelia-logging-console',
        'aurelia-metadata',
        'aurelia-pal',
        'aurelia-pal-browser',
        'aurelia-path',
        'aurelia-polyfills',
        'aurelia-route-recognizer',
        'aurelia-router',
        'aurelia-task-queue',
        'aurelia-templating',
        'aurelia-templating-binding',
        'aurelia-templating-router',
        'aurelia-templating-resources',
        'aurelia-validation',
        'aurelia-auth',
        'aurelia-i18n',
        'i18next',
        'i18next-xhr-backend'
    ]
}

// Basic webpack configuration
const baseConfig = {
    entry: {
        'app': [/* this is filled by the aurelia-webpack-plugin */],
        'aurelia-bootstrap': coreBundles.bootstrap,
        'aurelia': coreBundles.aurelia.filter(pkg => coreBundles.bootstrap.indexOf(pkg) === -1)
    },
    output: {
        path: destination,
        pathinfo: true
    },
    stats: {
        warnings: false // Ignore warnings mostly related to case sensitivity in linux and sourcemaps
    },
    resolve: {
        extensions: ['', '.ts', '.js'],// Required for .ts files to be visibile in chrome
        modules: [source, 'node_modules']
    },
    // Automatically load modules instead of having to import or require them everywhere.
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            tether: "tether",
            "window.Tether": "tether",
            JSZip: "jszip",
            jszip: "jszip",
            "window.JSZip": "jszip"
        }),
        new webpack.optimize.DedupePlugin(), //Look for similar files and deduplicate them
        new webpack.optimize.OccurrenceOrderPlugin() //Assign the module and chunk ids by occurrence count. Ids that are used often get lower (shorter) ids. This make ids predictable and reduces total file size
    ]
}

// Generate config using easy-webpack based on environment
switch (ENV) {
    case 'production':
        config = generateConfig(
            baseConfig,
            require('@easy-webpack/config-env-production')({
                compress: true // Compress files
            }),
            require('@easy-webpack/config-aurelia')({
                root: root,
                src: source,
                title: title,
                baseUrl: baseUrl
            }),
            require('@easy-webpack/config-typescript')(), // Uses awesome-typescript-loader see tsconfig.json
            require('@easy-webpack/config-html')(),
            require('@easy-webpack/config-css')({
                filename: 'styles.css',
                allChunks: true,
                sourceMap: false
            }),
            require('@easy-webpack/config-fonts-and-images')({
                limit: 100000
            }),
            require('@easy-webpack/config-global-jquery')(),
            require('@easy-webpack/config-global-regenerator')(),
            require('@easy-webpack/config-common-chunks-simple')({
                appChunkName: 'app',
                firstChunk: 'aurelia-bootstrap'
            }),
            require('@easy-webpack/config-uglify')({
                debug: false
            })
        );
        break;
    default:
        config = generateConfig(
            baseConfig,
            require('@easy-webpack/config-env-development')({
                // see https://webpack.js.org/configuration/devtool/#devtool
                devtool: 'inline-source-map'
            }),
            require('@easy-webpack/config-aurelia')({
                root: root,
                src: source,
                title: title,
                baseUrl: baseUrl
            }),
            require('@easy-webpack/config-typescript')(), // Uses awesome-typescript-loader see tsconfig.json
            require('@easy-webpack/config-html')(),
            require('@easy-webpack/config-css')({
                filename: 'styles.css',
                allChunks: true,
                sourceMap: false
            }),
            require('@easy-webpack/config-fonts-and-images')({
                limit: 100000
            }),
            require('@easy-webpack/config-global-jquery')(),
            require('@easy-webpack/config-global-regenerator')(),
            require('@easy-webpack/config-common-chunks-simple')({
                appChunkName: 'app',
                firstChunk: 'aurelia-bootstrap'
            })
        );
        break;

}
// Generate configuration using easy webpack
module.exports = stripMetadata(config);