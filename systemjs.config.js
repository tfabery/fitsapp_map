(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      app: 'app',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'rxjs': 'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      'angular2-google-maps':   'npm:angular2-google-maps'
    },
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      },
      "angular2-google-maps/core": {
        "defaultExtension": "js",
        "main": "index.js"
      }
    }
  });
})(this);
