define(["knockout", "text!./greeting.html", "amplify"], function (ko, greeterTemplate) {

    function greeterViewModel(params) {
        var self = this;
        self.greeting = ko.observable(params.name);
        self.date = ko.observable(new Date());
        amplify.subscribe("CurrentNode-NodeClicked", function (value) {
            self.greeting(value);
        });
        return self;
    }
    return { viewModel: greeterViewModel, template: greeterTemplate };
});