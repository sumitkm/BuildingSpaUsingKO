var History, State, loadAjaxContent, updateContent;

crossroads.addRoute('{?query}', function(query) {
    return console.log(query);
});

crossroads.addRoute('/admin', function() {
    return console.log("admin section");
});

crossroads.parse(document.location.pathname + document.location.search);

crossroads.bypassed.add(console.log, console);

History = window.History;

if (History.enabled) {
    State = History.getState();
    History.pushState({
        urlPath: window.location.pathname
    }, $("title").text(), State.urlPath);
} else {
    return false;
}

loadAjaxContent = function(target, urlBase, selector) {
    return $(target).load(urlBase + " " + selector);
};

updateContent = function(State) {
    var selector;
    selector = "#" + State.data.urlPath.substring(1);
    if ($(selector).length) {
        $("#content").children().appendTo("#hidden_content");
        return $(selector).appendTo("#content");
    } else {
        $("#content").children().clone().appendTo("#hidden_content");
        return loadAjaxContent("#content", State.url, selector);
    }
};

History.Adapter.bind(window, "statechange", function() {
    return crossroads.parse(document.location.pathname + document.location.search);
});

$("body").on("click", "a", function(e) {
    var title, urlPath;
    urlPath = $(this).attr("href");
    if (_(urlPath).startsWith('#')) {
        return true;
    }
    e.preventDefault();
    title = $(this).text();
    return History.pushState({
        urlPath: urlPath
    }, title, urlPath);
});