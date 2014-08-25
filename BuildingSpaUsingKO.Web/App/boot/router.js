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
        //if (console && console.log) {
            //crossroads.routed.add(console.log, console);
        //}
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
        History.Adapter.bind(window, "statechange", routeCrossRoads);
        crossroads.normalizeFn = crossroads.NORM_AS_OBJECT;
        //crossroads.parse('/');
        routeCrossRoads();
    }

    function routeCrossRoads() 
    {
        var State = History.getState();

        if (State.data.urlPath) {
            return crossroads.parse(State.data.urlPath);
        }
        else {
            if (State.hash.length > 1) {
                var fullHash = State.hash;
                var quesPos = fullHash.indexOf('?');
                if (quesPos > 0) {
                    var hashPath = fullHash.slice(0, quesPos);
                    return crossroads.parse(hashPath);
                }
                else {
                    return crossroads.parse(fullHash);
                }
            }
            else {
                return crossroads.parse('/');
            }
        }
    }
    
});