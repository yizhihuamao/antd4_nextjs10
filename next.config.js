const withCss = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const path = require('path');
const cssLoaderGetLocalIdent = require('css-loader/lib/getLocalIdent.js');

module.exports = withLess(
    withCss({
        exportPathMap() {
            return {
                '/': { page: '/' }
            };
        },
        cssModules: true,
        cssLoaderOptions: {
            localIdentName: '[local]___[hash:base64:5]',
            getLocalIdent: (context, localIdentName, localName, options) => {
                const hz = context.resourcePath.replace(context.rootContext, '');
                // console.log(hz);
                if (/node_modules/.test(hz)) {
                    return localName;
                }
                return cssLoaderGetLocalIdent(context, localIdentName, localName, options);
            }
        },
        distDir: './.next',
        webpack: (config, options) => {
            // Fixes npm packages that depend on `fs` module
            config.node = {
                fs: 'empty'
            };
            config.resolve.alias['@'] = path.join(__dirname);
            return config;
        }
    })
);
