/// <reference path="/Scripts/crossroads/crossroads.js" />
define(["jquery", "knockout", "crossroads", "historyjs"], function ($, ko, crossroads) {

    return new Router({
        routes: [
            { url: '/', params: { page: 'home' } },
            { url: 'settings', params: { page: 'settings' } }
        ]
    });

    function Router(config) {
        var currentRoute = this.currentRoute = ko.observable({});

        ko.utils.arrayForEach(config.routes, function (route) {
            crossroads.addRoute(route.url, function (requestParams) {
                currentRoute(ko.utils.extend(requestParams, route.params));
            });
        });
        activateCrossroads();
        $("body").on("click", "a",
            function (e) {
                var title, urlPath;
                urlPath = $(this).attr("href");
                if (urlPath.slice(0, 1) == "#") {
                    return true;
                }
                e.preventDefault();
                title = $(this).text();
                return History.pushState({
                    urlPath: urlPath
                }, title, urlPath);
            });
    }

    function activateCrossroads() {
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        crossroads.parse('/');

        History = window.History;
        History.Adapter.bind(window, "statechange", function () {
            return crossroads.parse(document.location.pathname + document.location.search);
        });
    }
});