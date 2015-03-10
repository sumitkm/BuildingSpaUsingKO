var require = {
    baseUrl: "/",
    paths: {
        "bootstrap": "Scripts/bootstrap/bootstrap",
        "historyjs": "Scripts/history/native.history",
        "crossroads": "Scripts/crossroads/crossroads",
        "jquery": "Scripts/jquery/jquery-1.9.0",
        "knockout": "Scripts/knockout/knockout-3.2.0beta.debug",
        "knockout-projections": "Scripts/knockout/knockout-projections.min",
        "signals": "Scripts/crossroads/signals",
        "text": "Scripts/require/text",
        "app": "app/app",
        "underscore": "Scripts/underscore/underscore",
        "amplify": "Scripts/amplify/amplify.min",
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
}