module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ["Electron"],
        files: ["spec/mySpec.js"],
        preprocessors: {
            '**/*.js': ['electron']
        },
        // DEV: `useIframe: false` is for launching a new window instead of using an iframe
        //   In Electron, iframes don't get `nodeIntegration` priveleges yet windows do
        client: {
            useIframe: false
        }
    });
};
