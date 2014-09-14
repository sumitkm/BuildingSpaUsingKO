define(["knockout", "text!./tabitem.html"], function (ko, tabitemTemplate) {
    function settingsViewModel(params) {
        self = this;
        self.url = ko.observable(params.tab == null ? "" : params.tab.url);
        self.title = ko.observable(params.tab == null ? "" : params.tab.text);
        self.component = ko.observable(params.tab == null ? "greeter" : params.tab.component);
        return self;
    };
    return { viewModel: settingsViewModel, template: tabitemTemplate };
});
