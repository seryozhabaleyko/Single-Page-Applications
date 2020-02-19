'use strict';

import Router from './router.js';
import Route from './Route.js';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('about', 'about.html')
        ]);
    }
    init();
}());