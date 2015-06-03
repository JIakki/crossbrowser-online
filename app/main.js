require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    paths: {
        'domReady': '../libs/requirejs-domready/domReady',
        'angular': '../libs/angular/angular.min'
     },
    
    shim: {
        'angular': {
            exports: 'angular'
        },
        priority: ['angular']

    },
 
     // запустить приложение
    deps: ['./bootstrap/index']
});


