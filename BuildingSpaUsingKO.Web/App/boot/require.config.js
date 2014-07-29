var require = {
    baseUrl: "/",
    paths: {
        "bootstrap": "Scripts/bootstrap/bootstrap",
        "jquery": "Scripts/jquery/jquery-1.9.0",
        "knockout": "Scripts/knockout/knockout-3.2.0beta.debug",
        "text": "Scripts/require/text"
    },
    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    }
}