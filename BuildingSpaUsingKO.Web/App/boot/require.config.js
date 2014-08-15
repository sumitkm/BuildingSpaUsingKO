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
        //"hasher": "Scripts/crossroads/hasher",
        "text": "Scripts/require/text"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
}